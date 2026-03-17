const express = require('express');
const dgram = require('dgram');
const app = express();
const client = dgram.createSocket('udp4');

const WIZ_IP = '192.168.1.36'; // <--- Asegúrate de poner tu IP
const PORT = 38899;

app.use(express.json());
app.use(express.static('public'));

function sendWiz(params) {
    const message = JSON.stringify({ method: 'setPilot', params });
    client.send(Buffer.from(message), 0, message.length, PORT, WIZ_IP);
}

app.post('/control', (req, res) => {
    const { type, value } = req.body;

    if (type === 'scene') {
        // Mapeo según tu captura: 9:Fireplace, 7:Forest, 4:Party, 10:Pulse
        sendWiz({ state: true, sceneId: value, speed: 100 });
    } else if (type === 'mode') {
        const modes = {
            'dia': { state: true, temp: 5000, dimming: 100 },
            'noche': { state: true, temp: 2700, dimming: 15 },
            'off': { state: false }
        };
        sendWiz(modes[value]);
    } else if (type === 'dimming') {
        sendWiz({ state: true, dimming: value });
    }

    res.json({ status: 'ok' });
});

app.listen(9000, () => console.log('Servidor Dark WiZ en http://localhost:9000'));