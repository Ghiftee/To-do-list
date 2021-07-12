import './css/styles.css';

const tasks = [
    {
        description: 'Task 1',
        completed: false,
        index: 1
    },
    {
        description: 'Task 2',
        completed: false,
        index: 0
    },
    {
        description: 'Task 3',
        completed: false,
        index: 2
    }
];

function populate() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    const sortedTask = tasks.sort((a,b) => a.index - b.index);
    sortedTask.forEach((task) => {
        const listItem = document.createElement('li');
        listItem.classList.add("border-bottom", "p-3", "pt-2", "pb-2", "d-flex", "flex-row", "justify-content-between", "align-items-center");
        const spanItem = document.createElement('span');
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.classList.add('me-2');
        const menu = document.createElement('i');
        menu.classList.add('fa', 'fa-ellipsis-v', 'text-secondary');
        spanItem.append(checkBox, task.description);
        listItem.append(spanItem, menu);
        taskList.append(listItem);
    })
}

document.addEventListener('DOMContentLoaded', populate);