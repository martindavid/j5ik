var five = require('johnny-five');
var Tessel = require('tessel-io');

var board = new five.Board({
  io: new Tessel()
});

board.on('ready', () => {
  var leds = new five.Leds(["a2","a3","a4","a5","a6","a7"]);
  var index = 0;
  var step = 1;

  board.loop(100, () => {
    leds.off(); // Turn all of the LEDs off
    if (leds[index] !== undefined) {
      leds[index].on(); // Turn on the "next" active LED
    }

    index += step;
    // If we have reached start or end of the LEDs, start the whole process
    if (index === 0 || index === leds.length - 1) {
      step *= -1;
    }
  })
})
