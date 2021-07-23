const { dragOver, dragStart, drop } = require('./test-files/drag.js');
const { populate } = require('./test-files/index.js');
const { addNewTask } = require('./test-files/add_and_remove.js');

describe('Test Drag and Drop functionality', () => {
  test('should change task\'s index on drag drop', () => {
    document.body.innerHTML = `
      <div>
        <ul id="task-list">
            
        </ul>
        <input id="task-description" value="something">
          
        </input>
      </div>
    `;

    localStorage.clear();

    addNewTask();
    addNewTask();
    addNewTask();
    addNewTask();

    let tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks[0].completed = true;
    localStorage.setItem('tasks', JSON.stringify(tasks));

    populate(tasks);

    const taskList = document.querySelectorAll('#task-list li');
    const firstLiElement = taskList[0];
    const thirdLiElement = taskList[2];

    const firstElementMockEvent = {
      target: firstLiElement,
    };
    const thirdElementMockEvent = {
      target: thirdLiElement,
      preventDefault: () => {},
    };
    const dropMockEvent = {
      stopPropagation: () => {},
    };

    dragStart(firstElementMockEvent);
    dragOver(thirdElementMockEvent);
    const sortedTasks = tasks.sort((a, b) => a.index - b.index);
    drop(dropMockEvent, sortedTasks, populate);

    tasks = JSON.parse(localStorage.getItem('tasks'));

    expect(tasks[2].completed).toBe(true);
  });

  test('should change task\'s index on drag drop', () => {
    document.body.innerHTML = `
      <div>
        <ul id="task-list">
            
        </ul>
        <input id="task-description" value="something">
          
        </input>
      </div>
    `;

    localStorage.clear();

    addNewTask();
    addNewTask();
    addNewTask();
    addNewTask();
    addNewTask();
    addNewTask();
    addNewTask();

    let tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks[3].completed = true;
    localStorage.setItem('tasks', JSON.stringify(tasks));

    populate(tasks);

    const taskList = document.querySelectorAll('#task-list li');
    const fourthLiElement = taskList[3];
    const firstLiElement = taskList[0];

    const firstElementMockEvent = {
      target: firstLiElement,
      preventDefault: () => {},
    };
    const fourthElementMockEvent = {
      target: fourthLiElement,
    };
    const dropMockEvent = {
      stopPropagation: () => {},
    };

    dragStart(fourthElementMockEvent);
    dragOver(firstElementMockEvent);
    const sortedTasks = tasks.sort((a, b) => a.index - b.index);
    drop(dropMockEvent, sortedTasks, populate);

    tasks = JSON.parse(localStorage.getItem('tasks'));

    expect(tasks[0].completed).toBe(true);
  });
});
