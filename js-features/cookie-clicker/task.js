const clicker__counter = document.getElementById('clicker__counter');
const img_cookie = document.getElementById('cookie');

img_cookie.onclick = function() {
  clicker__counter.textContent++;
  if (img_cookie.width == '200') {
    img_cookie.width = '250';
  } else {
    img_cookie.width = '200';
  }
}

