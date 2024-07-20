var config = {
  apiKey: "AIzaSyCntsGwcx23zoQxFXgkxj76-8xgwGM8nJg",
  authDomain: "drawing-test-fc89d.firebaseapp.com",
  projectId: "drawing-test-fc89d",
  storageBucket: "drawing-test-fc89d.appspot.com",
  messagingSenderId: "622905699981",
  appId: "1:622905699981:web:385b2f7d00185f7a25bcc4",
  measurementId: "G-V2NTMLZJW9"
};
firebase.initializeApp(config);

var pointsData = firebase.database().ref();
var points = [];
var currentColor = "#000000";
var currentSize = 5;

function setup() {
  var canvas = createCanvas(400, 400);
  background(255);
  fill(0);
  pointsData.on("child_added", function (point) {
    points.push(point.val());
  });
  canvas.mousePressed(drawPoint);
  canvas.mouseMoved(function () {
    if (mouseIsPressed) {
      drawPoint();
    }
  });
}

function draw() {
  background(255);
  stroke(currentColor);
  strokeWeight(currentSize);
  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    ellipse(point.x, point.y, 5, 5);
  }
  $("#colorPicker").on("input", function() {
    currentColor = this.value;
  });

  $("#sizePicker").on("input", function() {
    currentSize = this.value;
  });
}

function drawPoint() {
  pointsData.push({x: mouseX, y: mouseY});
  return false;
}

$("#saveDrawing").on("click", saveDrawing);

function saveDrawing() {
  saveCanvas("Saved");
}

$("#clearDrawing").on("click", clearDrawing);

function clearDrawing() {
  pointsData.remove();
  points = [];
}