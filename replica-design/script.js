// Smooth scroll functionality
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

// Parallax effect for hero visual
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroVisual) {
        heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.solution-card, .provider-card, .feature-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = '#000000';
        navbar.style.backdropFilter = 'none';
    }
    
    lastScroll = currentScroll;
});

// Button hover effects with cursor tracking
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseenter', function(e) {
        this.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function(e) {
        this.style.transform = 'scale(1)';
    });
});

// Card hover effects
document.querySelectorAll('.solution-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.card-preview').style.transform = 'scale(1.05)';
        this.querySelector('.card-preview').style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.querySelector('.card-preview').style.transform = 'scale(1)';
    });
});

// Geometric shape animation enhancement
const geometricShape = document.querySelector('.geometric-shape');
if (geometricShape) {
    let rotation = 45;
    setInterval(() => {
        rotation += 0.5;
        geometricShape.style.transform = `rotate(${rotation}deg)`;
    }, 50);
}

// Logo animation on scroll
const logos = document.querySelectorAll('.logo-item, .provider-card');
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    logos.forEach((logo, index) => {
        const speed = 0.05 + (index * 0.01);
        logo.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Initialize animations on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease-in';
});

// Research cards animation
document.querySelectorAll('.research-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Feedback options interactive selection
document.querySelectorAll('.feedback-option').forEach(option => {
    option.addEventListener('click', function() {
        // Remove selected class from all options
        document.querySelectorAll('.feedback-option').forEach(opt => {
            opt.style.borderColor = '#333333';
            opt.style.backgroundColor = '#2a2a2a';
        });
        // Add selected class to clicked option
        this.style.borderColor = '#ff69b4';
        this.style.backgroundColor = '#333333';
    });
});

// Demo window typing animation
const queryText = document.querySelector('.query-text');
if (queryText) {
    const originalText = queryText.textContent;
    queryText.textContent = '';
    let charIndex = 0;
    
    const typeWriter = () => {
        if (charIndex < originalText.length) {
            queryText.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Start typing when section is visible
    const demoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && charIndex === 0) {
                setTimeout(typeWriter, 500);
                demoObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const demoWindow = document.querySelector('.demo-window');
    if (demoWindow) {
        demoObserver.observe(demoWindow);
    }
}

// Testimonial card animation
const testimonialCard = document.querySelector('.testimonial-card');
if (testimonialCard) {
    testimonialCard.style.opacity = '0';
    testimonialCard.style.transform = 'translateY(50px)';
    testimonialCard.style.transition = 'all 0.8s ease-out';
    observer.observe(testimonialCard);
}

// Play button pulse animation
const playButton = document.querySelector('.play-button');
if (playButton) {
    setInterval(() => {
        playButton.style.transform = 'scale(1.1)';
        setTimeout(() => {
            playButton.style.transform = 'scale(1)';
        }, 300);
    }, 2000);
}
