const revealElements = document.querySelectorAll('.reveal');

function isVisible(el) {
  const { top, bottom } = el.getBoundingClientRect();
  if (bottom < 0 || top > window.innerHeight)  {
      return false;
    }
  return true;
}
  
window.addEventListener('scroll', () => {
  for (let element of revealElements) {
    if (isVisible(element)) {
      element.classList.add('reveal_active');
    }
  }
});

