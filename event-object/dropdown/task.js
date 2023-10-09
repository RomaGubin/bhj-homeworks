
const dropdown__value = document.querySelector('.dropdown__value');
const dropdown__list = document.querySelector('.dropdown__list');
const dropdown__link = document.querySelectorAll('.dropdown__link');

function clickOn() {
  dropdown__list.classList.toggle('dropdown__list_active');
}

dropdown__value.addEventListener('click', clickOn);

for (let i = 0; i < dropdown__link.length; i++) {
  dropdown__link[i].addEventListener('click', function (event) {
    event.preventDefault();
    dropdown__value.textContent = dropdown__link[i].textContent;
    dropdown__list.classList.remove('dropdown__list_active');
  });
}

