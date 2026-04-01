// Form handling for contact page

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formNote = document.getElementById('formNote');
    const submitButton = form.querySelector('.submit-button');
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        facility: document.getElementById('facility').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    };
    
    // Validate form
    if (!formData.name || !formData.facility || !formData.email || !formData.service || !formData.message) {
        formNote.textContent = 'Please fill in all required fields.';
        formNote.className = 'form-note error';
        return;
    }
    
    // Validate email
    if (!isValidEmail(formData.email)) {
        formNote.textContent = 'Please enter a valid email address.';
        formNote.className = 'form-note error';
        return;
    }
    
    // Disable button and show processing message
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    // Simulate form submission (in a real app, this would go to a backend)
    setTimeout(() => {
        // Success message
        formNote.textContent = '✓ Thank you! We\'ll be in touch within 24 hours.';
        formNote.className = 'form-note success';
        
        // Reset form
        form.reset();
        
        // Re-enable button
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
        
        // Clear success message after 5 seconds
        setTimeout(() => {
            formNote.textContent = '';
            formNote.className = 'form-note';
        }, 5000);
    }, 1000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Smooth scrolling for navigation links (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
