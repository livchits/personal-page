//select elements
const selectors = [
  '#menu-toggle',
  '#nav-links',
  'nav',
  '#bio',
  '#projects',
  '#skills',
];
const getElement = (selector) => document.querySelector(selector);
const [menuToggle, navLinks, navbar, bio, projects, skills] = selectors.map(
  getElement
);

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
function getBackgroundColor(element) {
  const backgroundColor = getComputedStyle(element).getPropertyValue(
    'background-color'
  );
  return backgroundColor;
}

function setElementBackgroundColor(element, color) {
  element.style.setProperty('background-color', color);
}

const [navbarDefaultBgColor, projectsBackgroundColor, skillsBackgroundColor] = [
  navbar,
  projects,
  skills,
].map(getBackgroundColor);

const [
  { offsetHeight: navbarHeight },
  { offsetHeight: bioHeight },
  { offsetHeight: projectsHeight },
] = [navbar, bio, projects];

function changeNavbarBackgroundColor() {
  if (
    pageYOffset >= bioHeight - navbarHeight / 2 &&
    pageYOffset < bioHeight + projectsHeight - navbarHeight //user scrolled almost to projects section
  ) {
    setElementBackgroundColor(navbar, projectsBackgroundColor);
    return;
  }
  if (
    pageYOffset >=
    bioHeight + projectsHeight - navbarHeight //user scrolled in projects section
  ) {
    setElementBackgroundColor(navbar, skillsBackgroundColor);
    return;
  }
  if (pageYOffset < navbarHeight) {
    //user scrolled to the top
    navbar.classList.add('md:-mt-20');
    return;
  }
  setElementBackgroundColor(navbar, navbarDefaultBgColor);
}

document.addEventListener('scroll', () => {
  navbar.classList.remove('md:-mt-20');
  changeNavbarBackgroundColor();
});
