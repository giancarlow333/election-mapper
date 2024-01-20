const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
// export for others scripts to use
//window.$ = $;
//window.jQuery = jQuery;

// Load the existing file and draw it

SVG.on(document, 'DOMContentLoaded', function() {
   var draw = SVG().addTo("#svg-area").size(300, 300);

   $(document).ready(function() {
        var image = SVG('svg-area');
        $.get('./assets/US_House_2022.svg', function(contents) {
            var $tmp = $('svg', contents);
            image.svg($tmp.html());
        }, 'xml');
  });
});