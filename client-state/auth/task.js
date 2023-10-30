const welcome = document.getElementById('welcome');
const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');
const userId = document.getElementById('user_id');
const input = document.getElementsByTagName('input');
const btn = document.getElementById('signin__btn');

function restoreObject(key) {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch {
    null
  }
}

function submittingForm() {
  const formData = new FormData();
  formData.append('login', input[0].value);
  formData.append('password', input[1].value);
  
  const xhr = new XMLHttpRequest();
  xhr.open('POST', form.action);
  xhr.setRequestHeader('Content-Type', 'application/json');
  
  xhr.onload = function() {
    console.log(JSON.parse(xhr.responseText));
    if (xhr.readyState === 4) {
      const response = JSON.parse(xhr.responseText);
      localStorage.setItem('success', response.success);
      localStorage.setItem('user_id', response.user_id);
      
      if (response.success) {
        userId.textContent = response.user_id;
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
      } else {
        alert('Неверный логин/пароль');
        location.reload();
      }
    } else {
      alert('Произошла ошибка при отправке запроса.');
    }
  };
  
  xhr.send(JSON.stringify(Object.fromEntries(formData)));
}

btn.addEventListener('click', (e) => {
  e.preventDefault();
  submittingForm();
});