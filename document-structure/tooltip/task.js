const a = Array.from(document.querySelectorAll('.has-tooltip'));

a.forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const tooltip = document.querySelector('.tooltip'); 
    const rect = a.getBoundingClientRect();
    const left = rect.left;
    const top = rect.top + 20;

    function addingTooltip() {
      const tooltipElement = document.createElement('div');
      tooltipElement.classList.add('tooltip', 'tooltip_active');
      tooltipElement.innerText = a.title;
      tooltipElement.style.left = `${left}px`;
      tooltipElement.style.top = `${top}px`;
      tooltipElement.setAttribute('data-position', `${left},${top}`);
      a.insertAdjacentElement('afterend', tooltipElement);
    }

    if (tooltip) {
      tooltip.remove();
    } else {
      addingTooltip();
    }
  });
});


