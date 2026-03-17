# WiZ Light Controller

A lightweight Node.js web application to control a WiZ smart bulb over your local network using UDP.

## Features

- **Web Interface:** A simple, dark-themed UI served statically to control the light.
- **Scene Control:** Instantly switch to predefined WiZ scenes (e.g., Fireplace, Forest, Party, Pulse).
- **Mode Control:** Quick presets for "Day" (bright, cool white) and "Night" (dim, warm white), plus an option to turn the light completely off.
- **Dimming Control:** Adjust the brightness of the light dynamically.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- A WiZ smart bulb connected to the same local network as the machine running this application.
- You need to know the local IP address of your WiZ bulb.

## Setup & Installation

1. Clone or download the repository.
2. Open a terminal in the project directory.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure the IP Address of your WiZ bulb:
   - Open `main.js`.
   - Update the `WIZ_IP` constant with your bulb's local IP address:
     ```javascript
     const WIZ_IP = '192.168.1.36'; // <--- Change to your bulb's IP
     ```

## Usage

1. Start the server:
   ```bash
   node main.js
   ```
2. Open your web browser and navigate to:
   [http://localhost:3000](http://localhost:3000)
3. Use the web interface to control your WiZ bulb.

## Technical Details

- **Backend:** Express.js to serve the static frontend and handle API requests.
- **Communication:** The `dgram` module is used to send UDP packets (`setPilot` method) on port `38899`, which is the standard port for WiZ bulbs local communication.
- **Frontend:** HTML/CSS/JS served from the `public` directory.
  
<img width="1920" height="1048" alt="image" src="https://github.com/user-attachments/assets/1db02077-1a10-47fd-825d-f59b55eb2aa5" />

## License

ISC
