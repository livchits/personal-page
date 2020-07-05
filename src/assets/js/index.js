//highlight active menu
function highlightLinks() {
  const actualSection = window.location.hash;

  const anchors = [...document.querySelectorAll('nav a')];

  anchors.forEach((anchor) => {
    anchor.hash === actualSection
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

//hide menu after click
navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    toggleNav();
  }
});

//change navbar background on scroll
const projects = document.getElementById('projects');
const bio = document.getElementById('bio');
const projectsBackgroundColor = getComputedStyle(projects).getPropertyValue(
  'background-color'
);
const navbar = document.querySelector('nav');
const navbarDefaultBgColor = getComputedStyle(navbar).getPropertyValue(
  'background-color'
);

document.addEventListener('scroll', () => {
  if (pageYOffset >= bio.offsetHeight) {
    navbar.style.setProperty('background-color', projectsBackgroundColor);
  } else {
    navbar.style.setProperty('background-color', navbarDefaultBgColor);
  }
});
