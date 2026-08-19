document.addEventListener('DOMContentLoaded', () => {

    // --- Ambient mouse-tracked glow ---
    document.addEventListener('mousemove', (e) => {
        const root = document.documentElement;
        root.style.setProperty('--x', e.clientX + 'px');
        root.style.setProperty('--y', e.clientY + 'px');
    });

    // --- Typing animation ---
    const typingText = document.querySelector('.typing-text');
    const roles = ["AI Engineer", "LLM & RAG Systems", "Multi-Agent Architect", "Arabic NLP"];
    let roleIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < roles[roleIndex].length) {
            typingText.textContent += roles[roleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 85);
        } else {
            setTimeout(erase, 1800);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingText.textContent = roles[roleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 45);
        } else {
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(type, 400);
        }
    }
    if (typingText) type();

    // --- Scroll-reveal animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animated-section').forEach(section => observer.observe(section));

    // --- Scrollspy ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 100) current = section.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current) && current) link.classList.add('active');
        });
    });

    // --- Tilt effect on cards ---
    document.querySelectorAll('.tilt-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = card.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;
            const rotateX = (y - 0.5) * -8;
            const rotateY = (x - 0.5) * 8;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });

    // --- Mobile nav toggle ---
    const navToggle = document.getElementById('navToggle');
    const navLinksList = document.querySelector('.nav-links');
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            const isOpen = navLinksList.classList.toggle('mobile-open');
            navToggle.setAttribute('aria-expanded', isOpen);
        });
        navLinksList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinksList.classList.remove('mobile-open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // --- Contact form: mailto fallback (no backend) ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const subject = encodeURIComponent(`Portfolio contact from ${name}`);
            const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
            window.location.href = `mailto:ashabalikhan006@gmail.com?subject=${subject}&body=${body}`;
        });
    }

    // --- Dev-time helper: flag placeholder links in the console ---
    const placeholders = document.querySelectorAll('[data-placeholder]');
    if (placeholders.length) {
        console.warn(
            `[Portfolio setup] ${placeholders.length} placeholder link(s) still point to "#". ` +
            `Search for data-placeholder in index.html and replace with your real GitHub / LinkedIn / demo URLs before deploying.`
        );
    }
});
