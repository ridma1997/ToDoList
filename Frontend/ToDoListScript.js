const API_URL = 'http://localhost:5000/api/tasks';

async function fetchTasks() {
  const response = await fetch(API_URL);
  const tasks = await response.json();
  const taskList = document.getElementById('Task-List');
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const taskItem = document.createElement('li');
    taskItem.className = task.completed ? 'completed' : '';
    taskItem.innerHTML = `
      <span>${task.title}</span>
      <div>
        <button onclick="toggleTask('${task._id}', ${!task.completed})">Complete</button>
        <button onclick="deleteTask('${task._id}')">Delete</button>
        <button onclick="editTask('${task._id}', '${task.title}')">Edit</button>
      </div>
    `;
    taskList.appendChild(taskItem);
  });
}

async function addTask() {
  const taskTitle = document.getElementById('New-Task').value;
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: taskTitle, completed: false }),
  });
  const newTask = await response.json();
  fetchTasks();
}

async function toggleTask(id, completed) {
  await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed }),
  });
  fetchTasks();
}

async function deleteTask(id) {
  const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  if (response.ok) {
    fetchTasks();
  } else {
    console.error('Failed to delete task');
  }
}

async function editTask(id, title) {
  const newTitle = prompt('Edit task title', title);
  if (newTitle) {
    await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTitle }),
    });
    fetchTasks();
  }
}

document.addEventListener('DOMContentLoaded', fetchTasks);
