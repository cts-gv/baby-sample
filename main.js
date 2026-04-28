/* ============================================================
   Baby Martinez — main.js
   ============================================================
   What this file handles:
   1. Floating sports balls background animation
   2. Smooth scroll-based active nav link highlighting
   3. Mobile hamburger menu toggle
   4. Scroll reveal animations on cards
   5. FormSpree form submission with success/error messages
   ============================================================ */

/* ===== 1. FLOATING BALLS ===== */
function createBalls() {
    const container = document.getElementById('animation-container');
    if (!container) return;
    container.innerHTML = '';

    // TO CHANGE: Add or remove emojis from this array to change what floats in the background
    const icons = ['⚽', '🏀', '🏈', '⚾', '🧸', '⭐', '💙', '🎀'];

    for (let i = 0; i < 18; i++) {
        const ball = document.createElement('div');
        ball.className = 'ball';
        ball.innerText = icons[Math.floor(Math.random() * icons.length)];
        ball.style.left   = (Math.random() * 96) + 'vw';
        ball.style.top    = (Math.random() * 92) + 'vh';
        const dur = (2.5 + Math.random() * 2.5).toFixed(2);
        ball.style.setProperty('--dur', dur + 's');
        ball.style.animationDelay = (Math.random() * 2).toFixed(2) + 's';
        container.appendChild(ball);
    }
}

createBalls();


/* ===== 2. ACTIVE NAV LINK ON SCROLL ===== */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

const observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === '#' + id);
            });
        }
    });
}, observerOptions);

sections.forEach(s => sectionObserver.observe(s));


/* ===== 3. MOBILE HAMBURGER ===== */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });

    // Close menu when a link is tapped
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    });
}


/* ===== 4. SCROLL REVEAL ===== */
// Add .reveal class to all cards and certain blocks
document.querySelectorAll('.card, .parent-note, .support-block, .guestbook-container').forEach(el => {
    el.classList.add('reveal');
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            // Stagger delay for grid cards
            const delay = entry.target.closest('.grid')
                ? Array.from(entry.target.parentNode.children).indexOf(entry.target) * 80
                : 0;
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, delay);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


/* ===== 5. FORMSPREE SUBMISSION ===== */
const wishForm    = document.getElementById('wish-form');
const successMsg  = document.getElementById('form-success');
const errorMsg    = document.getElementById('form-error');

if (wishForm) {
    wishForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const submitBtn = wishForm.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;

        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        try {
            const formData = new FormData(wishForm);
            const response = await fetch(wishForm.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                wishForm.reset();
                wishForm.style.display = 'none';
                successMsg.style.display = 'flex';
                errorMsg.style.display = 'none';
            } else {
                throw new Error('Server error');
            }
        } catch (err) {
            errorMsg.style.display = 'flex';
            successMsg.style.display = 'none';
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}
