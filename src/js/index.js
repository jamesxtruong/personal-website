// Personal Portfolio - JavaScript
console.log('Portfolio website loaded successfully!');

// Contact form handling
const contactForm = document.querySelector('#contactForm');
const formMessage = document.querySelector('#formMessage');

// Form submission event listener
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Form submission attempted');

  // Get form values
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  // Simple email check
  if (!email.includes('@') || !email.includes('.')) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.style.color = 'red';
    console.error('Invalid email format');
    return;
  }

  // Log form data
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Submit form data with fetch
  fetch(contactForm.action, {
    method: 'POST',
    body: new FormData(contactForm),
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        formMessage.textContent = 'Your message has been sent. Thank you!';
        formMessage.style.color = 'green';
        console.log('Form submitted successfully');
        contactForm.reset();
      } else {
        formMessage.textContent = 'Error. Your message was NOT sent.';
        formMessage.style.color = 'red';
        console.error(
          'Form submission failed:',
          response.status,
          response.statusText
        );
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      formMessage.textContent =
        'Oops! There was a problem submitting your form.';
      formMessage.style.color = 'red';
    });
});
