import './css/styles.css';
import { dragStart, dragOver, drop } from './drag.js';
import updateStatus from './status.js';

const tasks = [
  {
    description: 'Task 1',
    completed: false,
    index: 1,
  },
  {
    description: 'Task 2',
    completed: false,
    index: 0,
  },
  {
    description: 'Task 3',
    completed: false,
    index: 2,
  },
];

function populate() {
  const taskList = document.getElementById('task-list');
  taskList.addEventListener('dragover', dragOver);
  taskList.addEventListener('drop', drop);

  taskList.innerHTML = '';
  const sortedTask = tasks.sort((a, b) => a.index - b.index);
  sortedTask.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.draggable = true;
    listItem.addEventListener('dragstart', dragStart);

    listItem.classList.add('border-bottom', 'p-3', 'pt-2', 'pb-2', 'd-flex', 'flex-row', 'justify-content-between', 'align-items-center');
    const spanItem = document.createElement('span');
    const checkBox = document.createElement('input');
    const textElement = document.createElement('p');
    textElement.innerText = task.description;
    textElement.classList.add('d-inline');
    checkBox.type = 'checkbox';
    checkBox.classList.add('me-2');
    const menu = document.createElement('i');
    menu.classList.add('fa', 'fa-ellipsis-v', 'text-secondary');
    spanItem.append(checkBox, textElement);
    listItem.append(spanItem, menu);
    taskList.append(listItem);

    checkBox.addEventListener('change', updateStatus);
  });
}

document.addEventListener('DOMContentLoaded', populate);