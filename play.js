const {connect} = require("./client");

connect();

// setup interface to handle user input from stdin

/*const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

stdin.on("data", handleUserInput);

const handleUserInput = function (data) {
  if (data = "ctrl" + "c") {
    break
  }
  else {
    return data;
  }
  // your code here
};*/
