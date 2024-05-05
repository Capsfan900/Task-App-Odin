import './style.css'
import "./taskFactory"
import { constructTask } from './taskFactory';
import "./stateManager"
import { createMainPage } from './stateManager';

//content needed to collect and store in local storage WEB API
//-notes data
//-formTaskData(title,description..etc)
//and the state or output drawing of the canvas(remeber what was on it)

//also put taskBool in side menu and not in task and add expand function to the task so it looks cleaner

//global variables and DOM
let taskList = [];
const body = document.querySelector("body");
const dialog = document.querySelector("dialog");
const taskBtn = document.getElementById("test");
const submit = document.querySelector("#submit1");
const welcomeScreen = document.querySelector("#welcome-screen");
const welcomeItem = document.querySelector("#welcome-item");
const startMenu = document.querySelector("dialog#welcome-screen");
const task = document.querySelector(".taskWrapper");



//const forSubmit = document.querySelector("")



//functions 


//event listeners


//logic for start menu
welcomeItem.addEventListener("click", function(){
    console.log("this works");
    startMenu.remove()
});

taskBtn.addEventListener("click", (e) => {
    dialog.showModal();
    body.style.opacity = 1;
  });



  //custom form submission handling (extracts form data into an object)
  submit.addEventListener("click", (e) => {
    e.preventDefault();
     let currTask = constructTask();
    taskList.push(currTask);
    
  });


  //page load logic

window.onload = () => {
    welcomeScreen.showModal()
    setTimeout(() => {
      //alert("Welcome To The Site Click Spinny Guy To Enter!")
      console.log("hello logs");
    }, "700");
   
};






