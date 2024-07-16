window.addEventListener('scroll', function() {
    let title = document.getElementById('about-title');
    let name = document.getElementById('about-name');
    let description = document.getElementById('about-description');
    let arrow = document.getElementById('arrow-down');

    const projectsSection = document.getElementById('projects');
    const projectsTop = projectsSection.offsetTop;

    // Calcula cuánto has scrolleado
    const scrollY = window.scrollY;

    // Determina el nuevo valor de opacidad
    const newOpacity = 1 - Math.min((scrollY) / ((projectsTop * 1.3) - window.innerHeight), 1);

    title.style.opacity = newOpacity;
    name.style.opacity = newOpacity;
    description.style.opacity = newOpacity;

    arrow.style.opacity = newOpacity;
});
