// const nav = document.querySelector('.nav__list');
// const links = document.querySelectorAll('.nav__link');

// nav.addEventListener('mouseover', (event) => {
//   const link = event.target.closest('.nav__link');
//   if (link) {
//     const { offsetWidth, offsetLeft } = link;
//     nav.style.setProperty('--underline-width', `${offsetWidth}px`);
//     nav.style.setProperty('--underline-offset-x', `${offsetLeft}px`);
//   }
// });

// // nav.addEventListener('mouseleave', () => {
// //   nav.style.setProperty('--underline-width', '0');
// // });

// // Add active class to a link onclick
// links.forEach((element) => {
//   element.addEventListener('click', () => {
//     // Remove active class from all links first then add it to the clicked link
//     links.forEach((link) => link.classList.remove('active'));
//     element.classList.add('active');
//   });

//   // Keep cursor style on mouseleave for the active link
//   element.addEventListener('mouseleave', () => {
//     element.style.cursor = 'default';
//   });
// });

// // Change cursor display per action
// document.querySelectorAll('.nav__link').forEach((element) => {
//   element.addEventListener('click', () => {
//     element.style.cursor =
//       element.style.cursor === 'default'
//         ? 'pointer'
//         : 'default'; /* default: arrow, pointer: hand */
//   });
// });

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

// Remove this event listener
// nav.addEventListener('mouseleave', () => {
//   nav.style.setProperty('--underline-width', '0');
// });

// Add active class to a link onclick
links.forEach((element) => {
  element.addEventListener('click', () => {
    // Remove active class from all links first then add it to the clicked link
    links.forEach((link) => link.classList.remove('active'));
    element.classList.add('active');

    // Set the underline to the clicked link
    const { offsetWidth, offsetLeft } = element;
    nav.style.setProperty('--underline-width', `${offsetWidth}px`);
    nav.style.setProperty('--underline-offset-x', `${offsetLeft}px`);
  });

  // Keep cursor style on mouseleave for the active link
  element.addEventListener('mouseleave', () => {
    element.style.cursor = 'default';
  });
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
