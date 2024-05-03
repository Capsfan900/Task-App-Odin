import './style.css'
import "./createTaskObj"
import { constructTask } from './createTaskObj';





//global variables and DOM
let taskList = [];
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
     console.log(currTask);
    taskList.push(currTask);
    
  });




  //page load logic
window.onload = () => {

    welcomeScreen.showModal()
    setTimeout(() => {
      //alert("Welcome To The Site Click Spinny Guy To Enter!")
      console.log("cum");
    }, "700");
};



