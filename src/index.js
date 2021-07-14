import './css/styles.css';
import { dragStart, dragOver, drop } from './drag.js';
import {
  addNewTask, editTask, deleteTask, clearAllCompleted,
} from './add_and_remove.js';
import updateStatus from './status.js';

const taskList = document.getElementById('task-list');

let allTasks = [
  
];

function populate(tasks) {
  taskList.innerHTML = '';

  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.draggable = true;
    listItem.classList.add(
      'border-bottom',
      'p-3',
      'pt-2',
      'pb-2',
      'd-flex',
      'flex-row',
      'justify-content-between',
      'align-items-center',
    );
    listItem.id = task.index;

    const spanItem = document.createElement('span');
    const textElement = document.createElement('p');

    textElement.innerText = task.description;
    textElement.classList.add('d-inline');
    const menu = document.createElement('i');
    menu.classList.add('fa', 'fa-ellipsis-v', 'text-secondary');

    listItem.append(spanItem, menu);
    taskList.append(listItem);

    listItem.addEventListener('dragover', dragOver);
    listItem.addEventListener('dragstart', dragStart);
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add('me-2');

    if (task.completed) {
      textElement.classList.add('strike', 'text-muted');
      checkBox.checked = true;
    }
    spanItem.append(checkBox, textElement);
    checkBox.addEventListener('change', () => {
      updateStatus(textElement, checkBox, task);
    });
  });
}

taskList.addEventListener('drop', (e) => {
  const sortedTasks = allTasks.sort((a, b) => a.index - b.index);
  drop(e, sortedTasks, populate);
});

if (localStorage.getItem('tasks')) {
  allTasks = JSON.parse(localStorage.getItem('tasks'));
} else {
  localStorage.setItem('tasks', JSON.stringify(allTasks));
}

const sortedTasks = allTasks.sort((a, b) => a.index - b.index);
document.addEventListener('DOMContentLoaded', populate(sortedTasks));
