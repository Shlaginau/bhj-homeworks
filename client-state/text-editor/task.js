const editor = document.getElementById('editor');
const clearButton = document.getElementById('clearButton');

editor.value = localStorage.getItem('text');

editor.addEventListener('input', () => {
  localStorage.setItem('text', editor.value);
});

clearButton.addEventListener('click', () => {
  editor.value = '';
  localStorage.removeItem('text');
});