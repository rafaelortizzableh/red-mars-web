// Red Mars - Interactive Features
// Parallax Effects, Scroll Animations, and Micro-interactions

document.addEventListener('DOMContentLoaded', function () {

    // Parallax Effect for Hero Section
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const stars = document.querySelector('.stars');

    window.addEventListener('scroll', function () {
        const scrollPosition = window.pageYOffset;

        // Parallax effect - slower movement for background elements
        if (stars && scrollPosition < window.innerHeight) {
            stars.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        }

        // Fade out hero content on scroll
        if (heroContent && scrollPosition < window.innerHeight) {
            const opacity = 1 - (scrollPosition / window.innerHeight);
            heroContent.style.opacity = opacity;
            heroContent.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        }

        // Navigation shadow on scroll
        const nav = document.querySelector('nav');
        if (scrollPosition > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Intersection Observer for Service Cards Animation
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const serviceObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                serviceObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        serviceObserver.observe(card);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Enhanced button hover effects with ripple
    const buttons = document.querySelectorAll('.cta-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: translate(-50%, -50%) scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
                left: ${x}px;
                top: ${y}px;
            `;

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation to stylesheet
    if (!document.querySelector('#ripple-animation')) {
        const style = document.createElement('style');
        style.id = 'ripple-animation';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: translate(-50%, -50%) scale(20);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Random star twinkling effect
    function createRandomStars() {
        const heroBg = document.querySelector('.hero-bg');
        if (!heroBg) return;

        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            const size = Math.random() * 3 + 1;
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const delay = Math.random() * 3;
            const duration = Math.random() * 2 + 2;

            star.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: white;
                border-radius: 50%;
                left: ${x}%;
                top: ${y}%;
                opacity: 0;
                animation: twinkle-star ${duration}s ease-in-out ${delay}s infinite;
            `;

            heroBg.appendChild(star);
        }
    }

    // Add star twinkling animation
    if (!document.querySelector('#star-animation')) {
        const style = document.createElement('style');
        style.id = 'star-animation';
        style.textContent = `
            @keyframes twinkle-star {
                0%, 100% { opacity: 0; transform: scale(0); }
                50% { opacity: 1; transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
    }

    createRandomStars();

    // Mouse move parallax effect on hero
    if (hero) {
        hero.addEventListener('mousemove', function (e) {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            if (stars) {
                stars.style.transform = `translate(${mouseX * 20 - 10}px, ${mouseY * 20 - 10}px)`;
            }
        });
    }

    // Interactive Footer Effects
    const footer = document.getElementById('footer');
    const footerGlow = document.querySelector('.footer-glow');
    const footerStars = document.querySelector('.footer-stars');

    if (footer && footerGlow) {
        // Create random stars in footer
        for (let i = 0; i < 30; i++) {
            const star = document.createElement('div');
            star.className = 'footer-star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            footerStars.appendChild(star);
        }

        // Glow effect following cursor
        footer.addEventListener('mousemove', function (e) {
            const rect = footer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            footerGlow.style.left = (x - 300) + 'px';
            footerGlow.style.top = (y - 300) + 'px';
            footerGlow.style.opacity = '1';

            // Show nearby stars
            const stars = footerStars.querySelectorAll('.footer-star');
            stars.forEach(star => {
                const starRect = star.getBoundingClientRect();
                const starX = starRect.left - rect.left;
                const starY = starRect.top - rect.top;
                const distance = Math.sqrt(Math.pow(x - starX, 2) + Math.pow(y - starY, 2));

                if (distance < 200) {
                    star.style.opacity = (1 - distance / 200) * 0.8;
                } else {
                    star.style.opacity = '0';
                }
            });
        });

        footer.addEventListener('mouseleave', function () {
            footerGlow.style.opacity = '0';
            const stars = footerStars.querySelectorAll('.footer-star');
            stars.forEach(star => {
                star.style.opacity = '0';
            });
        });
    }

    // Playful logo interaction in footer
    const footerLogo = document.querySelector('.footer-logo-link');
    if (footerLogo) {
        footerLogo.addEventListener('click', function (e) {
            // Detect language from page
            const isSpanish = document.documentElement.lang === 'es';
            const messages = isSpanish ? [
                '🚀 ¡Despegando hacia Marte!',
                '👽 Explorando nuevas fronteras',
                '🌌 Transformación interestelar',
                '⭐ Innovación sin límites',
                '🛸 Viajando a través del código'
            ] : [
                '🚀 Taking off to Mars!',
                '👽 Exploring new frontiers',
                '🌌 Interstellar transformation',
                '⭐ Innovation without limits',
                '🛸 Traveling through code'
            ];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];

            // Create temporary message
            const msgEl = document.createElement('div');
            msgEl.textContent = randomMessage;
            msgEl.style.cssText = `
                    position: fixed;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(214, 50, 50, 0.9);
                    color: white;
                    padding: 1rem 2rem;
                    border-radius: 50px;
                    font-weight: 600;
                    z-index: 10000;
                    animation: slideUp 0.5s ease-out;
                `;
            // If the message with the same text is already shown, don't show it again
            if (document.querySelector('.footer-logo-message')) {
                return;
            }

            document.body.appendChild(msgEl);

            setTimeout(() => {
                msgEl.style.animation = 'slideDown 0.5s ease-out';
                setTimeout(() => {
                    msgEl.remove();
                }, 500);
            }, 1500);
        })
    }

    // Add slide animations
    if (!document.querySelector('#slide-animations')) {
        const style = document.createElement('style');
        style.id = 'slide-animations';
        style.textContent = `
            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateX(-50%) translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
            }
            @keyframes slideDown {
                from {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(-50%) translateY(20px);
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Preload optimization
    window.addEventListener('load', function () {
        document.body.classList.add('loaded');
    });

});

