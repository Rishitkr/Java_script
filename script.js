let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const task = {
            id: Date.now(),
            text: taskText,
            completed: false
        };
        
        tasks.push(task);
        saveTasks();
        renderTasks();
        taskInput.value = '';
    }
}

function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasks();
    renderTasks();
}

function toggleTask(taskId) {
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    saveTasks();
    renderTasks();
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}" onclick="toggleTask(${task.id})">
                ${task.text}
            </span>
            <button onclick="deleteTask(${task.id})">Finish</button>
        `;
        taskList.appendChild(li);
    });
}

// Initial render
renderTasks();