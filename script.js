// Get references to HTML elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add a task to the list
function addTask() {
    const taskText = inputBox.value.trim(); // Remove leading/trailing whitespace

    if (taskText === "") {
        alert("You must write something!");
    } else {
        const li = document.createElement("li");
        li.textContent = taskText;
        
        // Add a click event listener to mark a task as completed when clicked
        li.addEventListener("click", function () {
            li.classList.toggle("checked");
        });

        // Create a delete button for each task
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            li.remove();
        });

        // Append the delete button to the task
        li.appendChild(deleteButton);

        // Append the task to the list
        listContainer.appendChild(li);

        // Clear the input box
        inputBox.value = "";
    }
}

// Handle adding a task when the "Add" button is clicked
document.getElementById("add-button").addEventListener("click", addTask);

// Handle adding a task when Enter key is pressed in the input box
inputBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
