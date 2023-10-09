const tab = document.querySelectorAll('.tab');
const tab__content = document.querySelectorAll('.tab__content');

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener('click', function click() {
    for (let i = 0; i < tab.length; i++) {
      tab[i].classList.toggle('tab_active', false);
    }
    tab[i].classList.toggle('tab_active', true);

    if (tab[i].textContent == tab[0].textContent) {
      tab__content[0].classList.toggle('tab__content_active', true);
      tab__content[1].classList.toggle('tab__content_active', false);
      tab__content[2].classList.toggle('tab__content_active', false);
    } else if (tab[i].textContent == tab[1].textContent) {
      tab__content[0].classList.toggle('tab__content_active', false);
      tab__content[1].classList.toggle('tab__content_active', true);
      tab__content[2].classList.toggle('tab__content_active', false);
    } else {
      tab__content[0].classList.toggle('tab__content_active', false);
      tab__content[1].classList.toggle('tab__content_active', false);
      tab__content[2].classList.toggle('tab__content_active', true);
    }
  });
};
