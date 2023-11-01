const subscribeModal = document.getElementById('subscribe-modal');

function setCookie(name, value) {
  document.cookie = name + '=' + encodeURIComponent(value)
}

function getCookie(name) {
   if (document.cookie.indexOf('state=off') !== -1) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name + '='));
    return cookie.substring(name.length + 1);
  }
  null
}

if (getCookie('state') !== 'off' && !subscribeModal.classList.contains('modal_active')) {
  subscribeModal.classList.toggle('modal_active');
}

subscribeModal.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal__close')) {
    subscribeModal.classList.remove('modal_active');
    setCookie('state', 'off')
  }
});

// document.cookie = 'state=; Expires=Thu, 01 Jan 1970 00:00:00 GMT';
// subscribeModal.classList.toggle('modal_active');