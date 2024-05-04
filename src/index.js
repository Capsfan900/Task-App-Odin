import './style.css'
import "./createTaskObj"
import { constructTask } from './createTaskObj';

//content needed to collect and store in local storage WEB API
//-notes data
//-formTaskData(title,description..etc)
//and the state or output drawing of the canvas(remeber what was on it)



//global variables and DOM
let taskList = [];
const mainContent = document.querySelector(".main-content");
const dialog = document.querySelector("dialog");
const taskBtn = document.getElementById("test");
const submit = document.querySelector("#submit1");
const welcomeScreen = document.querySelector("#welcome-screen");
const welcomeItem = document.querySelector("#welcome-item");
const startMenu = document.querySelector("dialog#welcome-screen");



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



