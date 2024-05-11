//BUGS FOUND//
//-task title cannot contain anything not char or number ex: task1 / or ] or } would not work 
//-try to rework state management it relys on dialog for start menu and thats not generally good practice i believe
//get better 

import './style.css'
import "./taskFactory"
import { createTaskData, renderTaskFromData } from './taskFactory';


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
    


    //Loads LocalStorage Content For "persistance"
    for (const key in localStorage) {
      // Check if the key is actually part of local storage (not inherited)
      if (localStorage.hasOwnProperty(key)) {
        const valueString = localStorage.getItem(key);
    
        // Try parsing the value as JSON (assuming tasks are stored as JSON objects)
        try {
          const taskObject = JSON.parse(valueString);
          renderTaskFromData(taskObject)
          //console.log("Key:", key);
          //console.log("Task Object:", taskObject);
        } catch (error) {
          console.warn(`Error parsing key: ${key}`, error);
        }
      }
    }

  
};











