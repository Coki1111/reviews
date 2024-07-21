const heartCoki = document.getElementById('heartCoki')
const clickme = document.getElementById('clickme')

function triggerResizeEvent() {
    window.dispatchEvent(new Event('resize'));
}

heartCoki.addEventListener('click', () => {
    heartCoki.style.opacity = '0';
    clickme.style.opacity = '0';
    setTimeout(() => {
    heartCoki.style.display = 'none';
    clickme.style.display = 'none';
    document.body.classList.add("pink-background");
    document.querySelector('.mainContent').style.display = 'block';
    triggerResizeEvent();
    },  600);
});

clickme.addEventListener('click', () => {
    heartCoki.style.opacity = '0';
    clickme.style.opacity = '0';
    setTimeout(() => {
    heartCoki.style.display = 'none';
    clickme.style.display = 'none';
    document.body.classList.add("pink-background");
    document.querySelector('.mainContent').style.display = 'block';
    triggerResizeEvent();
    },  600);
});
  