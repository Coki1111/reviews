const particlesJs = document.getElementById('particles-js');

function loadParticles() {
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('particles.js loaded - callback');
    });
}