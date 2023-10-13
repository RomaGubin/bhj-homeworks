const rotator = document.querySelectorAll('.rotator__case');
let namber = 0;

setInterval(() => {

rotator.forEach((rotator) => {
  rotator.classList.remove('rotator__case_active')
});

rotator[namber].classList.add('rotator__case_active')

if (namber === rotator.length - 1) {
  return namber = 0;
}

namber++
}, 1000);