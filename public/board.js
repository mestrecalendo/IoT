var five = require("johnny-five");
let f = require('./script_map.js');
const board = new five.Board({
  port: "COM6"
});


board.on("ready", function() {
  console.log("Ready event. Repl instance auto-initialized!");

  var led = new five.Led(13);
  

  
});