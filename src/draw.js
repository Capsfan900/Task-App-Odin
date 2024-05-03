const canvas = document.getElementById('drawing-canvas');
const ctx = canvas.getContext('2d');

// Set initial drawing properties
ctx.lineWidth = 3; // Adjust the line width
ctx.strokeStyle = 'black'; // Set the line color

// Track drawing state
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Handle mouse events
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);

function startDrawing(e) {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

function draw(e) {
  if (!isDrawing) return;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];
}

function stopDrawing() {
  isDrawing = false;
}

//<canvas id="drawing-canvas" width="500" height="400"></canvas>