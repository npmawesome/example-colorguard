var colorguard = require('colorguard');
var fs = require('fs');
var css = fs.readFileSync('./sample.css', 'utf8');

var output = colorguard.inspect(css, {
  // 0 through 100. Lower is more similar. Anything below 3 warns you.
  // 3 is the default threshold, but that's mostly personal opinion
  threshold: 3,

  // This color is just ignored entirely (use with caution)
  ignore: ["#030303"],

  // These color combinations are ignored (usually use this)
  whitelist: [["#000000", "#010101"]]
});

function print(collision) {
  console.log(collision.message);
}

output.collisions.map(print);
