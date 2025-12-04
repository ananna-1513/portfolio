// Reveal animation on scroll — both scroll up & scroll down
function revealElements() {
  const elements = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 140;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    } else {
      // When scrolling up → animation resets
      el.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);
