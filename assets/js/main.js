document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');

            // Animate links
            const links = document.querySelectorAll('.nav-links li');
            links.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            hamburger.classList.toggle('toggle');
        });
    }

    // Active link highlighting
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinksList = document.querySelectorAll('.nav-links a');
    navLinksList.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Scroll Fade-in Animation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Parallax Effect for Hero
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        if (hero) {
            let scroll = window.pageYOffset;
            hero.style.backgroundPositionY = (scroll * 0.5) + 'px';
        }
    });
});
