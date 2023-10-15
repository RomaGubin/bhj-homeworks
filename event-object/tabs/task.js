const tabAll = document.querySelectorAll('.tab');
const tab__content = document.querySelectorAll('.tab__content');

console.log(tab__content);
  
function content_notActive() {
  for (let i = 0; i < tab__content.length; i++) {
    tab__content[i].classList.toggle('tab__content_active', false);
  }
}

tabAll.forEach(tab => {
  tab.addEventListener('click', function click() {
    tabAll.forEach(tab => {
      tab.classList.toggle('tab_active', false);
    });
    tab.classList.toggle('tab_active', true);

    if (tab.textContent == tabAll[0].textContent) {
      content_notActive();
      return tab__content[0].classList.toggle('tab__content_active', true);
    }
    if (tab.textContent == tabAll[1].textContent) {
      content_notActive();
      return tab__content[1].classList.toggle('tab__content_active', true);
    }
    content_notActive();
    return tab__content[2].classList.toggle('tab__content_active', true);
  });
});