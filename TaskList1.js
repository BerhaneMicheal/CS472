// Get references to the HTML elements we will interact with
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const clearTasksButton = document.getElementById("clearTasksButton");
const taskList = document.getElementById("taskList");

// Add an event listener for the "Add Task" button
addTaskButton.addEventListener("click", function() {
  const taskText = taskInput.value.trim(); // Get the input value and remove whitespace
  
  if (taskText.length > 0) { // Check if the input has content
    taskList.value += taskText + "\n"; // Add the task to the taskList textarea
    taskInput.value = ""; // Clear the input field
  }
});

// Add an event listener for the "Clear Tasks" button
clearTasksButton.addEventListener("click", function() {
  taskList.value = ""; // Clear the taskList textarea
});
