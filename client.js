const { IP, PORT } = require("./constants");
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here - add commas between lines
    port: PORT // PORT number here,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to the game server");
    conn.write("Name: OAS");
  });

  
  conn.on("data", (data) => {
    console.log(data);
  });


  /*
  conn.on("moveDown", () => {
    console.log("Move: down");
  });

  conn.on("moveRight", () => {
    console.log("Move: right");
  });

  conn.on("moveLeft", () => {
    console.log("Move: left");
  });
  */

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;

}

  module.exports = {
    connect
};