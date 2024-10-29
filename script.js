// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();  

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Scroll to the target element with smooth behavior
        window.scrollTo({
            top: targetElement.offsetTop - 50, 
            behavior: 'smooth'
        });
    });
});

// Button Hover Interaction (Optional: Add if you want button effects)
const ctaButton = document.querySelector('.cta');

ctaButton.addEventListener('mouseenter', function() {
    ctaButton.style.transform = 'scale(1.1)';
    ctaButton.style.transition = 'transform 0.3s ease';
});

ctaButton.addEventListener('mouseleave', function() {
    ctaButton.style.transform = 'scale(1)';
});
// Add interactivity to skill bubbles
const bubbles = document.querySelectorAll('.skill-bubble');

bubbles.forEach(bubble => {
    bubble.addEventListener('mousemove', function(e) {
        const x = (e.offsetX - bubble.clientWidth / 2) / 5; 
        const y = (e.offsetY - bubble.clientHeight / 2) / 5;
        bubble.style.transform = `translate(${x}px, ${y}px) scale(1.2) rotate(${x}deg)`;
    });

    bubble.addEventListener('mouseleave', function() {
        bubble.style.transform = 'translate(0, 0) scale(1)'; 
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const text = document.querySelector('.typing-text');
    const textContent = text.innerHTML;
    text.innerHTML = '';   
    
    let i = 0;
    function typeWriter() {
        if (i < textContent.length) {
            text.innerHTML += textContent.charAt(i);
            i++;
            setTimeout(typeWriter, 50); 
        }
    }

    typeWriter();
});