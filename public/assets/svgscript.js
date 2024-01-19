// Load the existing file and draw it

SVG.on(document, 'DOMContentLoaded', function() {
   var draw = SVG().addTo("#svg-area").size(300, 300);

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    //oReq.open("GET", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/responsive-logo.svg");
    oReq.open("GET", "/assets/US_House_2022.svg");
    oReq.send();
    
    var extSVG ='';
    function reqListener () {
      //console.log(this.responseText);
      extSVG = this.responseText;
      console.log(extSVG);
      draw = SVG(extSVG).addTo('#svg-area');//.size(800, 200);
    }
    //draw.rect(100, 100).attr({ fill: '#f06' });
});