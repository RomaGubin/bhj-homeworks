const reveal = document.querySelectorAll('.reveal');

reveal.forEach( function(reveal) {
  setInterval(() => {
    const { top, bottom } = reveal.getBoundingClientRect()

    if (bottom < 0 || top > window.innerHeight) {
      return reveal.classList.remove('reveal_active')
    }
    
    return reveal.classList.add('reveal_active')
  }, 500);
});
