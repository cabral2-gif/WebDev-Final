// script.js
// JavaScript for my personal portfolio website

//Contact form validation
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    
    //Clear previous messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    //Validate fields
    if (!name || !email || !message) {
        showFormMessage('Please fill out all fields.', 'error');
        return;
    }
    
    //Validate email format
    if (!email.includes('@') || !email.includes('.')) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    //If valid, show success message and clear form
    showFormMessage('Thank you! Your message has been sent.', 'success');
    contactForm.reset();
});

function showFormMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.textContent = message;
    
    contactForm.parentNode.insertBefore(messageDiv, contactForm);
    
    //Remove message after 3 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}