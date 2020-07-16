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
const skills = document.getElementById('skills');
const projectsBackgroundColor = getComputedStyle(projects).getPropertyValue(
  'background-color'
);
const skillsBackgroundColor = getComputedStyle(skills).getPropertyValue(
  'background-color'
);
const navbar = document.querySelector('nav');
const navbarDefaultBgColor = getComputedStyle(navbar).getPropertyValue(
  'background-color'
);

function setElementBackgroundColor(element, color) {
  element.style.setProperty('background-color', color);
}

document.addEventListener('scroll', () => {
  navbar.classList.remove('md:-mt-20');
  if (
    pageYOffset >= bio.offsetHeight - navbar.offsetHeight / 2 &&
    pageYOffset < bio.offsetHeight + projects.offsetHeight
  ) {
    setElementBackgroundColor(navbar, projectsBackgroundColor);
    return;
  }
  if (pageYOffset >= bio.offsetHeight + projects.offsetHeight - 500) {
    setElementBackgroundColor(navbar, skillsBackgroundColor);
    return;
  }
  if (pageYOffset < navbar.offsetHeight) {
    navbar.classList.add('md:-mt-20');
    return;
  }
  setElementBackgroundColor(navbar, navbarDefaultBgColor);
});
