import './css/styles.css';
import { dragStart, dragOver, drop } from './drag.js';
import updateStatus from './status.js';

const allTasks = [
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
  {
    description: 'Task 4',
    completed: false,
    index: 4,
  },
  {
    description: 'Task 5',
    completed: false,
    index: 3,
  },
  {
    description: 'Task 6',
    completed: false,
    index: 5,
  },
];

const taskList = document.getElementById('task-list');

function populate(tasks) {
  taskList.innerHTML = '';

  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.draggable = true;
    listItem.classList.add('border-bottom', 'p-3', 'pt-2', 'pb-2', 'd-flex', 'flex-row', 'justify-content-between', 'align-items-center');
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

    if (task.completed) {
      textElement.classList.add('strike', 'text-muted');
      const tick = document.createElement('i');
      tick.classList.add('fa', 'fa-check', 'text-primary', 'me-1');
      spanItem.append(tick, textElement);
    } else {
      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      checkBox.classList.add('me-2');
      spanItem.append(checkBox, textElement);

      checkBox.addEventListener('change', () => {
        updateStatus(textElement, checkBox, task);
      });
    }
  });
}

taskList.addEventListener('drop', (e) => {
  const sortedTasks = allTasks.sort((a, b) => a.index - b.index);
  drop(e, sortedTasks, populate);
});

const sortedTasks = allTasks.sort((a, b) => a.index - b.index);
document.addEventListener('DOMContentLoaded', populate(sortedTasks));