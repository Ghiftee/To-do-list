function updateStatus(textElement, checkBox, task) {
  textElement.classList.add('strike', 'text-muted');
  const tick = document.createElement('i');
  tick.classList.add('fa', 'fa-check', 'text-primary', 'me-1');
  checkBox.parentNode.replaceChild(tick, checkBox);

  const allTasks = JSON.parse(localStorage.getItem('tasks'));
  const currentTask = allTasks.find((t) => t.index === task.index);
  currentTask.completed = true;
  localStorage.setItem('tasks', JSON.stringify(allTasks));
}

export default updateStatus;