function updateStatus(textElement, checkBox, task) {
  textElement.classList.add('strike', 'text-muted');
  const tick = document.createElement('i');
  tick.classList.add('fa', 'fa-check', 'text-primary', 'me-1');
  checkBox.parentNode.replaceChild(tick, checkBox);
  task.completed = true;
}

export default updateStatus;