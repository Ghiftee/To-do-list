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
    // Got element by id from html
    const taskList = document.getElementById('task-list');
    // Cleared anything in the taskList previously
    taskList.innerHTML = '';
    // Loop over tasks array but first sort according to index
    const sortedTask = tasks.sort((a,b) => a.index - b.index);
    sortedTask.forEach((task) => {
        // Create a new list item
        const listItem = document.createElement('li');
        // set list item text to description
        listItem.innerHTML = task.description
        // add li element to ul in html with id of task-list
        taskList.append(listItem);
    })
}

document.addEventListener('DOMContentLoaded', populate);