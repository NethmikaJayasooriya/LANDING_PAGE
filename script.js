/* --- URBANROOTS JAVASCRIPT --- */

// 1. SCROLL ANIMATION (REVEAL)
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    var windowHeight = window.innerHeight;
    var elementVisible = 100; // Trigger distance

    for (var i = 0; i < reveals.length; i++) {
        var elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

// 2. ACTIVE NAVIGATION (SCROLL SPY)
const sections = document.querySelectorAll("header, section");
const navLi = document.querySelectorAll(".nav-links li a");

function activeNav() {
    var current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 150) { 
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((a) => {
        a.classList.remove("active-link");
        if (a.getAttribute("href").includes(current)) {
            a.classList.add("active-link");
        }
    });
}

// 3. TEAM CAROUSEL NAVIGATION
function slideRight() {
    document.getElementById('teamCarousel').scrollBy({ left: 320, behavior: 'smooth' });
}
function slideLeft() {
    document.getElementById('teamCarousel').scrollBy({ left: -320, behavior: 'smooth' });
}

// 4. CUSTOM CURSOR EFFECT
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

// Move cursor on mousemove
window.addEventListener("mousemove", function(e) {
    const posX = e.clientX;
    const posY = e.clientY;

    // Dot moves instantly
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline moves with slight delay using CSS transition
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Add Hover Effect for interactive elements
const interactiveElements = document.querySelectorAll('a, button, .nav-logo, .team-card');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        document.body.classList.add('hovering');
    });
    el.addEventListener('mouseleave', () => {
        document.body.classList.remove('hovering');
    });
});

// INITIALIZATION & EVENT LISTENERS
window.addEventListener('scroll', () => {
    reveal();
    activeNav();
});

// Trigger once on load to show visible elements
reveal();

/* ===== MOBILE NAV MENU FIX ===== */

const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const navLinks = document.querySelector('.nav-links');

// Toggle menu on hamburger click
mobileMenuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Close menu when switching to desktop view
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
    }
});
