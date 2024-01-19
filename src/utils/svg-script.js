// Requires
import { SVG } from '@svgdotjs/svg.js';
// Element selectors
let svgElt = document.querySelector("#svg-output");
// https://stackoverflow.com/questions/22894540/creating-circles-with-svg-and-javascript
const svgns = "http://www.w3.org/2000/svg";

var draw = SVG().addTo("#svg-area").size(300, 300);
draw.rect(100, 100).attr({ fill: '#f06' })