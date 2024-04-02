


/** @type {WebSocket} */
let WebSocketClient;
if(typeof window === "object"){ // Browser runtime
  WebSocketClient = WebSocket;
}else{ // NodeJS runtime
  WebSocketClient = require("ws")
}













//#region    MAIN
async function main(){

  /** @type {WebSocket} */
  let connection;
  try {
    connection = new WebSocketClient('ws://localhost:8080');
  } catch (error) {
    console.error("Create connection error : " + error);
    return;
  }

  connection.onopen = ()=>{
    console.log("Connected");
    connection.send("Hello from client");
  };
  connection.onerror = (err)=>{
    console.error("error : " + err);
  };
  connection.onmessage = (event)=>{
    console.log("message from server : " + event.data);
    try {
      connection.close();
    } catch (error) {}
  };
  connection.onclose = (event)=>{
    console.log("connection closed : " +  event);
  }

}
main();
//#endregion MAIN



