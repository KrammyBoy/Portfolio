document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            const section = document.querySelector(this.getAttribute('href'));
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }

            event.preventDefault(); 
        });
    });
});

