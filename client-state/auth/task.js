const welcome = document.getElementById('welcome');
const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');
const userId = document.getElementById('user_id');
const btn = document.getElementById('signin__btn');

if (localStorage.user_id !== 1) {
  signin.classList.remove('signin_active');
  userId.textContent = localStorage.user_id;
  welcome.classList.add('welcome_active');
} else {
  function restoreObject(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  function submittingForm() {
    console.log('тут');
    const formData = new FormData(form);
    
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', form.action);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.addEventListener ('load', () => {
      const response = xhr.response;
      localStorage.setItem('success', response.success);
      localStorage.setItem('user_id', response.user_id);
      console.log('тут');
      if (response.success) {
        userId.textContent = response.user_id;
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
      } else {
        alert('Неверный логин/пароль');
      }
      form.reset();
    });
    xhr.send(JSON.stringify(Object.fromEntries(formData)));
  }

  btn.addEventListener('click', (e) => {
    e.preventDefault();
      submittingForm();
  });
}
console.log(localStorage.user_id !== 1);