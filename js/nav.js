import { fetchNavData } from './fetchNavData.js'; // Adjust the path as necessary

// Fetch and create the navigation bar
const init = async () => {
  const cities = await fetchNavData();
  createNavBar(cities);
  // Set default display city
  if (cities.length > 0) {
    displayCityContent(cities[0].label);
  }
};
init();

// Variable to hold the currently active link
let activeLink = null;

// Convert rem to pixels before shrinking the underline. We need to shrink 1.7rem on each side to fit the line to the width of the text
const shrinkAmount =
  1.7 * parseFloat(getComputedStyle(document.documentElement).fontSize);

// Feed nav content dynamically
const createNavBar = (cities) => {
  const cityList = document.querySelector('.nav__list');

  cities.forEach((city, index) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    li.classList.add('nav__item');
    a.classList.add('nav__link');
    a.href = `#${city.section}`;
    a.textContent = city.label;
    li.appendChild(a);
    cityList.appendChild(li);

    // onclick listener for each city link
    a.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default anchor behavior
      setActiveLink(a);
      displayCityContent(city.label); // Call to display city name
    });

    // Default the first item as active
    if (index === 0) setActiveLink(a);
  });

  linkListeners();
};

// Display City name after onclick event
const displayCityContent = (cityName) => {
  const contentDiv = document.querySelector('.city__title');
  contentDiv.textContent = `${cityName}`;
};

// shrink underline to fit in the width of the text
const updateUnderline = (link) => {
  const nav = document.querySelector('.nav__list');
  const { offsetWidth, offsetLeft } = link;
  const adjustedWidth = Math.max(offsetWidth - shrinkAmount * 2, 0);
  nav.style.setProperty('--underline-width', `${adjustedWidth}px`);
  nav.style.setProperty(
    '--underline-offset-x',
    `${offsetLeft + shrinkAmount}px`
  );
};

// Remove active class from the previous link before setting a new active link
const setActiveLink = (link) => {
  if (activeLink) activeLink.classList.remove('active');
  link.classList.add('active');

  activeLink = link;
  updateUnderline(link);
};

// mouse action event listener
const linkListeners = () => {
  const nav = document.querySelector('.nav__list');
  const links = document.querySelectorAll('.nav__link');

  nav.addEventListener('mouseover', (event) => {
    const link = event.target.closest('.nav__link');
    if (link && !link.classList.contains('active')) updateUnderline(link);
  });

  links.forEach((element) => {
    element.addEventListener('click', () => setActiveLink(element));

    // revert to previous active item if condition met
    element.addEventListener('mouseleave', () => {
      if (activeLink) updateUnderline(activeLink);
    });
  });
};
