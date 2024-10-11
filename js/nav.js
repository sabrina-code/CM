let activeLink = null; // Variable to hold the currently active link

const createNavBar = (cities) => {
  const cityList = document.querySelector('.nav__list');

  cities.forEach((city, index) => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    // Add class to the elements
    li.classList.add('nav__item');
    a.classList.add('nav__link');

    a.href = `#${city.section}`;
    a.textContent = city.label;

    li.appendChild(a);
    cityList.appendChild(li);

    // Default the first item as active
    if (index === 0) {
      setActiveLink(a);
    }
  });

  // Call linkListeners after creating the links to listen to the mouse event
  linkListeners();
};

const setActiveLink = (link) => {
  const nav = document.querySelector('.nav__list');
  if (activeLink) {
    activeLink.classList.remove('active'); // Remove active class from the previous link
  }
  link.classList.add('active');
  activeLink = link; // Update the active link

  const { offsetWidth, offsetLeft } = link;
  const adjustedWidth = Math.max(offsetWidth - 50, 0);
  nav.style.setProperty('--underline-width', `${adjustedWidth}px`);
  nav.style.setProperty('--underline-offset-x', `${offsetLeft + 25}px`);
};

const linkListeners = () => {
  const nav = document.querySelector('.nav__list');
  const links = document.querySelectorAll('.nav__link');

  nav.addEventListener('mouseover', (event) => {
    const link = event.target.closest('.nav__link');
    if (link && !link.classList.contains('active')) {
      const { offsetWidth, offsetLeft } = link;

      const adjustedWidth = Math.max(offsetWidth - 50, 0);
      nav.style.setProperty('--underline-width', `${adjustedWidth}px`);
      nav.style.setProperty('--underline-offset-x', `${offsetLeft + 25}px`);
    }
  });

  links.forEach((element) => {
    element.addEventListener('click', () => setActiveLink(element));

    // revert to previous active item if condition met
    element.addEventListener('mouseleave', () => {
      if (activeLink) {
        // Only revert to active link if it exists
        const { offsetWidth, offsetLeft } = activeLink;
        const adjustedWidth = Math.max(offsetWidth - 50, 0);
        nav.style.setProperty('--underline-width', `${adjustedWidth}px`);
        nav.style.setProperty('--underline-offset-x', `${offsetLeft + 25}px`);
      }
    });
  });
};

// Fetch the navigation.json file
fetch('data/navigation.json')
  .then((response) => response.json())
  .then((data) => createNavBar(data.cities))
  .catch((error) => console.error('Error fetching the JSON:', error));
