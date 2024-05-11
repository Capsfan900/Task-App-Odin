//BUGS FOUND//
//-task title cannot contain anything not char or number ex: task1 / would not work 
//-try to rework state management it relys on dialog for start menu and thats not generally good practice i believe

import './style.css'
import "./taskFactory"
import { createTaskData } from './taskFactory';


//content needed to collect and store in local storage WEB API
//-notes data
//-formTaskData(title,description..etc)
//and the state or output drawing of the canvas(remeber what was on it)



//global variables and DOM

let taskList = [];
const body = document.querySelector("body");
const dialog = document.querySelector("dialog");
const taskBtn = document.getElementById("test");
const submit = document.querySelector("#submit1");
const welcomeScreen = document.querySelector("#welcome-screen");
const welcomeItem = document.querySelector("#welcome-item");
const startMenu = document.querySelector("dialog#welcome-screen");



//event listeners

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
    let currTask = createTaskData();
    e.preventDefault();
    taskList.push(currTask);
  });

window.onload = () => {
    welcomeScreen.showModal()
    setTimeout(() => {
      //alert("Welcome To The Site Click Spinny Guy To Enter!")
      console.log("hello logs this is my shitty program for tasks ");
    }, "700");
   

};











