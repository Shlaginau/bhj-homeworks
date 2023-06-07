const tooltips = document.querySelectorAll('.has-tooltip');


tooltips.forEach((tooltip) => {
  tooltip.addEventListener('click', (e) => {
    e.preventDefault();
    
    const activeTooltips = document.querySelectorAll('.tooltip_active');
    
    activeTooltips.forEach((activeTooltip) => {
      activeTooltip.classList.remove('tooltip_active');
      activeTooltip.remove();
    });
    
    const selectedTooltip = tooltip.getAttribute('title');
    const tooltipText = document.createElement('div');
    tooltipText.classList.add('tooltip');
    tooltipText.textContent = selectedTooltip;
    
    tooltip.parentElement.appendChild(tooltipText);
   
    const tooltipRect = tooltip.getBoundingClientRect();
    tooltipText.style.top = `${tooltipRect.top + tooltipRect.height}px`;
    tooltipText.style.left = `${tooltipRect.left}px`;
    
    tooltipText.classList.add('tooltip_active');
    
    setTimeout(() => {
      tooltipText.classList.remove('tooltip_active');
      tooltipText.remove();
    }, 1000);
  });
});