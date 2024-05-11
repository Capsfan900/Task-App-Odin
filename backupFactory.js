// i know i need to rename a lot of this, it's a mess

let taskList = [];
const leftMenu = document.querySelector(".left-menu");
const taskContainer = document.querySelector(".task-container");

//remeber order of parameters matter in constructors
export function Task(title, description, dueDate, priorityLevel) {
  this.Title = title;
  this.Description = description;
  this.DueDate = dueDate;
  this.PriorityLevel = priorityLevel;
}

export const constructTask = () => {
  // Object Creation Phase
  const dialog = document.querySelector("dialog");
  const formTitle = document.getElementById("title");
  const form = document.getElementById('myForm');

  const taskObj = new Task(
    form.elements.title.value,
    form.elements.description.value,
    form.elements.dueDate.value,
    form.elements.priorityLevel.value
  );

  if (formTitle.value === "") {
    alert("form is not complete!");
  } else {
    dialog.close();
    form.reset();
  }
  console.log(taskObj);
  // End of Object Creation Phase
  
  const taskBar = document.createElement("div");
  taskBar.setAttribute("class", "taskBarItems");
  const titleWithoutSpaces = taskObj.Title.replace(/\s+/g, '');
  taskBar.setAttribute("id", titleWithoutSpaces);
  taskBar.style.color ="blue";
  taskBar.width ="100%";
  taskBar.textContent = `${taskObj.Title}`;
  const isDone = document.createElement("div");
  isDone.setAttribute("class", "isDone");
  isDone.style.color = "black";
  isDone.textContent ="X";
  leftMenu.appendChild(taskBar);
  taskBar.appendChild(isDone);


  // Actual rendering of the task elements
  // Element creation

  const taskWrapper = document.createElement("div");
  taskWrapper.setAttribute("class", "taskWrapper");
  taskWrapper.setAttribute("id", `${titleWithoutSpaces}1`);
  // Dom manipulation
  const taskItem = document.createElement("div");
  const taskMenu = document.querySelector(".task-container");
  // Assigning taskObj made from formData to a variable
  let makeTask = taskObj;
  const keyValueWrapper = document.createElement("div");
  keyValueWrapper.classList.add("keyValueWrapper");

  for (const [key, value] of Object.entries(makeTask)) {
    // element create to wrap the contents of each object pair
    const taskContent = document.createElement("div");
    taskContent.classList.add("taskContent");
    const keyDiv = document.createElement("div");
    keyDiv.classList.add("key");
    keyDiv.textContent = key;
    keyDiv.style.color = "orange";
    keyDiv.style.fontSize = "25px";
    keyDiv.style.height = "20px";
    keyDiv.style.width = "100px";
    taskContent.appendChild(keyDiv);

    const valueDiv = document.createElement("div");
    valueDiv.classList.add("value");
    valueDiv.textContent = value;
    valueDiv.style.color = "purple";
    valueDiv.style.fontSize = "20px";
    valueDiv.style.height = "fit-content";
    valueDiv.style.width = "fit-content";
    taskContent.appendChild(valueDiv);
    keyValueWrapper.appendChild(taskContent);
  }

  taskItem.setAttribute("class", "task");
  taskItem.style.width = "20rem";
  taskItem.style.color = "Red";
  taskItem.style.height = "fit-content";
  taskItem.style.background = "grey";
  taskItem.appendChild(keyValueWrapper);
  taskWrapper.appendChild(taskItem);

  const formContainer = document.createElement("div");

  // Create canvas element (potentially make this its own module)
  const canvas = document.createElement("canvas");
  canvas.setAttribute("class", "canvasForTask");
  canvas.width = 600;
  canvas.height = 400;
  canvas.style.border = "1px solid black";
  // Add a border to the canvas for better visibility
  const ctx = canvas.getContext('2d');
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'black';

  // Track drawing state
  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  // Handle mouse events
  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);

  // Functions for the canvas
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

  // Dom manipulation
  taskWrapper.appendChild(canvas);

  // Create textarea
  const textarea = document.createElement("textarea");
  textarea.classList.add("task-textarea");
  textarea.placeholder = "Enter notes...";
  textarea.rows = 20;
  textarea.style.width = "100%";
  textarea.style.height = "400px";

  taskWrapper.appendChild(textarea);
  taskMenu.append(taskWrapper);

  const taskBarItem = document.querySelector(`#${titleWithoutSpaces}`);
  const taskWrapperID = document.querySelector(`#${titleWithoutSpaces}1`);
  console.log(taskBarItem);


  isDone.addEventListener("click", function() {
    taskWrapperID.remove();
    taskBarItem.remove();
  });
}