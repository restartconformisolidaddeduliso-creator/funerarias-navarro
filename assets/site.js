const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('[data-reservation-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const confirmation = form.querySelector('.success');
    confirmation.classList.add('show');
    form.reset();
    confirmation.focus();
  });
});
