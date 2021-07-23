let currentPosition = 0;
let currentlyDraggging = 0;

function dragStart(e) {
  currentlyDraggging = e.target.id;
  e.target.classList.add('border', 'border-primary');
}

function dragOver(e) {
  e.preventDefault();
  currentPosition = e.target.id;
}

function drop(e, sortedTask, populate) {
  const movedItem = sortedTask.splice(currentlyDraggging - 1, 1);
  sortedTask.splice(currentPosition - 1, 0, movedItem[0]);

  sortedTask.forEach((a, b) => {
    a.index = b + 1;
  });

  localStorage.setItem('tasks', JSON.stringify(sortedTask));
  populate(sortedTask);
  e.stopPropagation();
}

module.exports = { dragStart, dragOver, drop };