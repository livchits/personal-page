//highlight active menu
const navbar = document.querySelector('nav');

window.addEventListener('hashchange', () => {
  const hash = window.location.hash;
  const anchors = [...navbar.querySelectorAll('a')];

  anchors.forEach((anchor) => {
    anchor.hash === hash
      ? anchor.classList.add('border-current')
      : anchor.classList.remove('border-current');
  });
});
