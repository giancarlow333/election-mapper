// Element selectors
let svgElt = document.querySelector("#svg-output");
// https://stackoverflow.com/questions/22894540/creating-circles-with-svg-and-javascript
const svgns = "http://www.w3.org/2000/svg";

$(document).ready(function() {
    var image = SVG('svg-output');
    $.get('/US_House_2022.svg', function(contents) {
      var $tmp = $('svg', contents);
      image.svg($tmp.html());
    }, 'xml');  
});