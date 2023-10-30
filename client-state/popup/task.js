const subscribeModal = document.getElementById('subscribe-modal');

function setCookie(name, value) {
  document.cookie = name + '=' + encodeURIComponent(value)
}

function getCookie(name) {
  try {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name + '='));
    return cookie.substring(name.length + 1);
  } catch {
    null
  }
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

