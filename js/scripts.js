document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Formulario enviado!');
    });

    // Scroll animations
    const sections = document.querySelectorAll('.section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Header background change on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(23, 21, 59, 0.9)';
        } else {
            header.style.backgroundColor = 'var(--color-navy)';
        }
    });

    // Smooth scroll to next section
    let isScrolling = false;
    window.addEventListener('wheel', (event) => {
        if (isScrolling) return;
        isScrolling = true;

        const direction = event.deltaY > 0 ? 'next' : 'prev';
        const currentSection = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2).closest('.section');
        let targetSection;

        if (direction === 'next') {
            targetSection = currentSection.nextElementSibling;
        } else {
            targetSection = currentSection.previousElementSibling;
        }

        if (targetSection && targetSection.classList.contains('section')) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }

        setTimeout(() => {
            isScrolling = false;
        }, 1000);
    });

    // Prevent default scroll behavior
    window.addEventListener('scroll', (event) => {
        if (isScrolling) {
            event.preventDefault();
        }
    }, { passive: false });

});
