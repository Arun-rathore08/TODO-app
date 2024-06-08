document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskDeadline = document.getElementById('deadline');
    const taskPriority = document.getElementById('priority');

    const taskText = taskInput.value;
    const deadline = taskDeadline.value;
    const priority = taskPriority.value;
    const timestamp = new Date().toLocaleString();

    if (taskText === '' || deadline === '') {
        alert('Please fill out all fields');
        return;
    }

    addTask(taskText, timestamp, deadline, priority);

    // Clear input fields
    taskInput.value = '';
    taskDeadline.value = '';
    taskPriority.value = 'Low';
});

function addTask(taskText, timestamp, deadline, priority) {
    const ul = document.getElementById('task-list');

    const li = document.createElement('li');

    const taskInfo = document.createElement('div');
    taskInfo.className = 'task-info';

    const task = document.createElement('span');
    task.textContent = `${taskText} [${priority}]`;

    const taskDetails = document.createElement('span');
    taskDetails.className = 'details';
    taskDetails.textContent = `Created: ${timestamp}, Deadline: ${deadline}`;

    taskInfo.appendChild(task);
    taskInfo.appendChild(taskDetails);

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('complete');
    completeBtn.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    const updateBtn = document.createElement('button');
    updateBtn.textContent = 'Update';
    updateBtn.classList.add('update');
    updateBtn.addEventListener('click', function() {
        const newText = prompt('Update task:', taskText);
        const newDeadline = prompt('Update deadline:', deadline);
        const newPriority = prompt('Update priority (Low, Medium, High):', priority);
        if (newText && newDeadline && newPriority) {
            task.textContent = `${newText} [${newPriority}]`;
            taskDetails.textContent = `Created: ${timestamp}, Deadline: ${newDeadline}`;
        }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', function() {
        ul.removeChild(li);
    });

    li.appendChild(taskInfo);
    li.appendChild(completeBtn);
    li.appendChild(updateBtn);
    li.appendChild(deleteBtn);

    ul.appendChild(li);
}
