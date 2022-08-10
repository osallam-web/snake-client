// Require into client & input files
const {connect} = require("./client");
const {setupInput} = require("./input");

console.log("Connecting ...");

// Running Setup Input Interface
setupInput(connect());
