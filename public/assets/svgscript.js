// Load the existing file and draw it

SVG.on(document, 'DOMContentLoaded', function() {
   //var draw = SVG().addTo("#svg-area").size(300, 300);
   // https://stackoverflow.com/questions/15911246/loading-a-svg-file-with-svg-js

   $(document).ready(function() {
        var image = SVG('#svg-area').size(996, 501);
        $.get('./assets/US_House_2022.svg', function(contents) {
            var $tmp = $('svg', contents);
            image.svg($tmp.html());
        }, 'xml');
  });
});

const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('test_file.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
});


