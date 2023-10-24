const a = Array.from(document.querySelectorAll('.has-tooltip'));

a.forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const tooltip = document.querySelector('.tooltip');
    
    function addingTooltip() {
      a.insertAdjacentHTML('afterend', 
      `<div class="tooltip tooltip_active" data-position="bottom">${a.title}</div>`
      );
    }

    if (tooltip) {
      tooltip.remove();
    }
    addingTooltip();
  });
});


