const nav = document.querySelector('.nav__list');
const links = document.querySelectorAll('.nav__link');

nav.addEventListener('mouseover', (event) => {
  const link = event.target.closest('.nav__link');
  if (link) {
    const { offsetWidth, offsetLeft } = link;
    nav.style.setProperty('--underline-width', `${offsetWidth}px`);
    nav.style.setProperty('--underline-offset-x', `${offsetLeft}px`);
  }
});

nav.addEventListener('mouseleave', () => {
  nav.style.setProperty('--underline-width', '0');
});

// Change cursor display per action
document.querySelectorAll('.nav__link').forEach((element) => {
  element.addEventListener('click', () => {
    element.style.cursor =
      element.style.cursor === 'default'
        ? 'pointer'
        : 'default'; /* default: arrow, pointer: hand */
  });
});
