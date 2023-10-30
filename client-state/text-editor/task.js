const editor = document.getElementById('editor');
const storedEditor = localStorage.getItem('editor');

if (storedEditor) {
  editor.value = storedEditor;
}

editor.addEventListener('input', () => {
  localStorage.setItem('editor', editor.value)
});