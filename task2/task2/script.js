document.getElementById("add-task").addEventListener("click", function () {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
    }
});

function addTask(taskText) {
    const taskList = document.getElementById("task-list");

    // Create the list item
    const li = document.createElement("li");

    // Create the task text element
    const taskElement = document.createElement("span");
    taskElement.textContent = taskText;
    taskElement.classList.add("task");

    // Create the complete button
    const completeButton = document.createElement("button");
    completeButton.textContent = "✔";
    completeButton.classList.add("complete");
    completeButton.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Create the remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Delete";
    removeButton.classList.add("remove");
    removeButton.addEventListener("click", function () {
        li.remove();
    });

    // Append elements to the list item
    li.appendChild(taskElement);
    li.appendChild(completeButton);
    li.appendChild(removeButton);

    // Append list item to the task list
    taskList.appendChild(li);
}
