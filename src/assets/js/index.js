//highlight active menu
const navbar = document.querySelector('nav');
const anchors = [...navbar.querySelectorAll('a')].filter(
  (anchor) => !anchor.href.includes('mailto')
);

function highlightLinks() {
  const hash = window.location.hash;

  anchors.forEach((anchor) => {
    anchor.hash === hash
      ? anchor.classList.add('border-current')
      : anchor.classList.remove('border-current');
  });
}

window.addEventListener('hashchange', highlightLinks);

//toggle menu in mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

function toggleNav() {
  navLinks.classList.toggle('hidden');
}

menuToggle.addEventListener('click', toggleNav);
