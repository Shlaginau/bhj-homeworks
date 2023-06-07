const taskInput = document.getElementById('task__input');
const taskForm = document.getElementById('tasks__form');
const taskList = document.getElementById('tasks__list');

function createTask(title) {
  const taskElement = document.createElement('div');
  taskElement.classList.add('task');

  const taskTitle = document.createElement('div');
  taskTitle.classList.add('task__title');
  taskTitle.textContent = title;

  const taskRemove = document.createElement('a');
  taskRemove.classList.add('task__remove');
  taskRemove.innerHTML = '&times;';
  taskRemove.href = '#';

  taskRemove.addEventListener('click', () => {
    taskElement.remove();
  });

  taskElement.appendChild(taskTitle);
  taskElement.appendChild(taskRemove);

  return taskElement;
}

function addTask() {
  const taskTitle = taskInput.value.trim();

  if (taskTitle) {
    const taskElement = createTask(taskTitle);
    taskList.appendChild(taskElement);
    taskInput.value = '';
  }
}

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask();
});

taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    addTask();
  }
});