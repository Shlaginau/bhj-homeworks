const tooltips = document.querySelectorAll('.has-tooltip');
let activeTooltip = null;

tooltips.forEach((tooltip) => {
  tooltip.addEventListener('click', (e) => {
    e.preventDefault();
    
    const selectedTooltip = tooltip.getAttribute('title');
    
    if (activeTooltip && activeTooltip.textContent === selectedTooltip) {
      activeTooltip.classList.remove('tooltip_active');
      activeTooltip.remove();
      activeTooltip = null;
      return;
    }
    
    if (activeTooltip) {
      activeTooltip.classList.remove('tooltip_active');
      activeTooltip.remove();
    }
    
    const tooltipText = document.createElement('div');
    tooltipText.classList.add('tooltip');
    tooltipText.textContent = selectedTooltip;
    
    tooltip.parentElement.appendChild(tooltipText);
   
    const tooltipRect = tooltip.getBoundingClientRect();
    tooltipText.style.top = `${tooltipRect.top + tooltipRect.height}px`;
    tooltipText.style.left = `${tooltipRect.left}px`;
    
    tooltipText.classList.add('tooltip_active');
    
    activeTooltip = tooltipText;
  });
});