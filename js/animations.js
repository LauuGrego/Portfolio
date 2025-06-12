// Efecto de typing para el título
const typeEffect = (element, text, speed = 100) => {
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
};

// Inicializar animaciones
document.addEventListener('DOMContentLoaded', () => {
    // Typing effect en el título
    const title = document.querySelector('.hero__title');
    title.innerHTML = '';
    typeEffect(title, 'Lautaro Gregoraschuk', 100);

    // Animación para stack items
    const stackItems = document.querySelectorAll('.stack__item');
    stackItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });

    // Parallax suave en hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    });
});
