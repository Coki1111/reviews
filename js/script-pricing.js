const containerLogo = document.querySelector('.container-logo');
const offScreenMenu = document.querySelector('.off-screen-menu');
const body = document.querySelector('.body');

containerLogo.addEventListener('click', () => {
    containerLogo.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

body.addEventListener('click', () => {
    containerLogo.classList.toggle('inactive');
    offScreenMenu.classList.toggle('inactive');
})
  