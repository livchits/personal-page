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
const [menuToggle, navLinks, nav, bio, projects, skills] = selectors.map(
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

//change nav background on scroll
function getBackgroundColor(element) {
  const backgroundColor = getComputedStyle(element).getPropertyValue(
    'background-color'
  );
  return backgroundColor;
}

function setElementBackgroundColor(element, color) {
  element.style.setProperty('background-color', color);
}

const [navDefaultBgColor, projectsBackgroundColor, skillsBackgroundColor] = [
  nav,
  projects,
  skills,
].map(getBackgroundColor);

const [
  { offsetHeight: navHeight },
  { offsetHeight: bioHeight },
  { offsetHeight: projectsHeight },
] = [nav, bio, projects];

function changeNavBackgroundColor() {
  if (
    pageYOffset >= bioHeight - navHeight / 2 &&
    pageYOffset < bioHeight + projectsHeight - navHeight //user scrolled almost to projects section
  ) {
    setElementBackgroundColor(nav, projectsBackgroundColor);
    return;
  }
  if (pageYOffset >= bioHeight + projectsHeight - navHeight) {
    setElementBackgroundColor(nav, skillsBackgroundColor);
    return;
  }
  setElementBackgroundColor(nav, navDefaultBgColor);
  return;
}

document.addEventListener('scroll', () => {
  changeNavBackgroundColor();
});

//use IntersectionObserver api to show and hide nav
const observer = new IntersectionObserver(showOrHideNav, { threshold: 0.5 });

function showOrHideNav(entries, obs) {
  entries.forEach((entry) => {
    !entry.isIntersecting
      ? nav.classList.remove('md:-mt-20')
      : nav.classList.add('md:-mt-20');
  });
}

observer.observe(bio);
