var brush = "Arc";
var eventList = [];
setActiveCanvas("canvas2");
innerHTML("label1",'<input type="color" id="color" style = "width: 70px;height:35px">');
onEvent("canvas2", "mousemove", function(event ) {
  if (event.shiftKey) {
    if (brush == "Arc") {
      circle(event.offsetX, event.offsetY, dotRadius(event.movementX, event.movementY));
    } else if ((brush == "Spray")) {
      for (var i = 0; i < 0.1; i++) {
        for (var j = 0; j < 10; j++) {
          circle(event.offsetX+randomNumber(-5, 5), event.offsetY+randomNumber(-5, 5), 1);
        }
      }
    } else if ((brush == "Pixel")) {
      for (var t = 0; t < 10; t++) {
        for (var h = 0; h < 10; h++) {
          circle(event.offsetX+randomNumber(-5, 5), event.offsetY+randomNumber(-5, 5), 1);
        }
      }
    } else if ((brush == "pencil")) {
      line(3, 3, event.offsetX, event.offsetY);
    }
  }
});
function dotRadius (changeX, changeY){
  var speed = Math.abs (changeX) + Math.abs (changeY);
  var output = 1 + 5/speed;
  return output;
}
onEvent("button9", "click", function( ) {
  setScreen("Brush");
});
onEvent("button6", "click", function( ) {
  setScreen("screen1");
  brush = "Spray";
});
onEvent("button11", "click", function( ) {
  setScreen("screen1");
  brush = "Arc";
});
onEvent("button8", "click", function( ) {
  setScreen("screen1");
  brush = "Pixel";
});
onEvent("button7", "click", function( ) {
  setFillColor("red");
  setStrokeColor("red");
});
onEvent("button4", "click", function( ) {
  setFillColor("black");
  setStrokeColor("black");
});
onEvent("button10", "click", function( ) {
  setFillColor("orange");
  setStrokeColor("orange");
});
onEvent("button5", "click", function( ) {
  setFillColor("yellow");
  setStrokeColor("yellow");
});
onEvent("color", "input", function( ) {
  setFillColor(getProperty("color", "value"));
  setStrokeColor(getProperty("color", "value"));
});
onEvent("button1", "click", function( ) {
  brush = "pencil";
});
onEvent("button2", "click", function( ) {
  setFillColor("white");
  setStrokeColor("white");
});
onEvent("button3", "click", function( ) {
  clearCanvas();
});
