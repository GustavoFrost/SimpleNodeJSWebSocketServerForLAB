
const WebSocket = require("ws")



/* CONFIGURABLE_ENV


*/


//#region    PREDEFINED_CONSTANT

const WEBSOCKET_PORT = parseInt(process.env.WEBSOCKET_PORT) || 8080;


//#endregion PREDEFINED_CONSTANT


const server = new WebSocket.Server({ port: WEBSOCKET_PORT });

server.on('connection',(ws)=>{

  console.log('Client connected');

  ws.on('message',(message)=>{
    console.log(`Client send : ${message}`);
    ws.send(`Server send : ${message}`);
  });

  ws.on('close',()=>{
    console.log('Client disconnected');
  });

});



