const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "172.24.54.205", // IP address here - add commas between lines
    port: 50541 // PORT number here,
  });

  conn.on("connect", () => {
    console.log("Connection Established");
  });

  conn.on("data", (data) => {
    console.log(data);
    client.end();
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;

}

  module.exports = {
    connect: connect
};