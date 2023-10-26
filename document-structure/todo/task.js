const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    function addingNote() {
      let task__inputValue = taskInput.value.trim();


      if (task__inputValue !== '') {
        tasks__list.insertAdjacentHTML('beforeEnd', 
        `<div class="task">
          <div class="task__title">
            ${task__inputValue}
          </div>
          <a href="#" class="task__remove">&times;</a>
        </div>`);
      } 
      return
    };
    addingNote();
    form.reset();
    console.log(tasks__list);
});

tasksList.addEventListener('click', (e) => {
  if (e.target.classList.contains('task__remove')) {
    e.target.parentElement.remove();
  }
});

