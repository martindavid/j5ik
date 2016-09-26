var Tessel = require("tessel-io");
var five = require("johnny-five");

var board = new five.Board({
  io: new Tessel()
});

board.on("ready", () => {
  var led = new five.Led("a5");
  // make the led blink every 500ms
  //led.blink(500);

  // make led pulse every 500ms
  led.pulse(500);
});
