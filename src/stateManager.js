const body = document.querySelector("body");
const globalWrapper = document.querySelector(".globalWrapper"); 



export const createTaskForm = () =>{
  // Create the form element
  const form = document.createElement('form');
  form.setAttribute("id","myForm");

  // Create the formWrapper div
  const formWrapper = document.createElement('div');
    formWrapper.setAttribute("class","formWrapper");
  // Create the h3 element
  const heading = document.createElement('h3');
  heading.textContent = 'Task Creation Tool';

  // Create the colorme div
  const colormeDiv = document.createElement('div');
  colormeDiv.setAttribute("class","colorme");

  // Create the title label and input
  const titleLabel = document.createElement('label');
  titleLabel.textContent = 'Title:';

  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.placeholder = 'task title';
  titleInput.required = true;
  titleInput.setAttribute("id","title");

  const titleBreak = document.createElement('br');
  // Create the description label and textarea
  const descriptionLabel = document.createElement('label');
  descriptionLabel.textContent = 'Description:';

  const descriptionTextarea = document.createElement('textarea');
  descriptionTextarea.placeholder = 'brief description of your task';
  descriptionTextarea.required = true;
  descriptionTextarea.setAttribute("id","description");

  // Create the dueDate label and input
  const dueDateLabel = document.createElement('label');
  dueDateLabel.textContent = 'Due Date:';

  const dueDateInput = document.createElement('input');
  dueDateInput.type = 'date';
  dueDateInput.required = true;

  // Create the priorityLevel label and select
  const priorityLevelLabel = document.createElement('label');
  priorityLevelLabel.textContent = 'Priority Level:';

  const priorityLevelSelect = document.createElement('select');
  priorityLevelSelect.required = true;
  

  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = 'Select a priority';
  priorityLevelSelect.appendChild(defaultOption);

  const lowOption = document.createElement('option');
  lowOption.value = 'low';
  lowOption.textContent = 'Low';
  priorityLevelSelect.appendChild(lowOption);

  const mediumOption = document.createElement('option');
  mediumOption.value = 'medium';
  mediumOption.textContent = 'Medium';
  priorityLevelSelect.appendChild(mediumOption);

  const highOption = document.createElement('option');
  highOption.value = 'high';
  highOption.textContent = 'High';
  priorityLevelSelect.appendChild(highOption);

  // Create the submit button
  const submitButton = document.createElement('button');
  submitButton.setAttribute("id","submit1");
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';

  // Assemble the HTML structure
  colormeDiv.appendChild(titleLabel);
  colormeDiv.appendChild(titleInput);
  colormeDiv.appendChild(titleBreak);
  colormeDiv.appendChild(descriptionLabel);
  colormeDiv.appendChild(descriptionTextarea);
  colormeDiv.appendChild(dueDateLabel);
  colormeDiv.appendChild(dueDateInput);
  colormeDiv.appendChild(priorityLevelLabel);
  colormeDiv.appendChild(priorityLevelSelect);

  formWrapper.appendChild(heading);
  formWrapper.appendChild(document.createElement('br'));
  formWrapper.appendChild(colormeDiv);

  form.appendChild(formWrapper);
  form.appendChild(submitButton);
  globalWrapper.appendChild(form);

}

export const restMainPage = () =>{
    
}

export const createPageLoad = () =>{

}



