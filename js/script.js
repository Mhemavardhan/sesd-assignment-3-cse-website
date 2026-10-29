/**
 * Department of Computer Science & Engineering — Client-Side Scripts
 * Mobile Navigation Drawer & Academic Contact Form Validation
 * Student: Mudavath Hemavardhan (2403A51422)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Hamburger Menu Toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // 2. Active Page Navigation Indicator
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPath) {
      link.classList.add('active');
    }
  });

  // 3. Interactive Contact Form Validation
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    const senderName = document.getElementById('senderName');
    const senderEmail = document.getElementById('senderEmail');
    const inquirySubject = document.getElementById('inquirySubject');
    const senderMessage = document.getElementById('senderMessage');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');

    function showError(input, errorElement, msg) {
      input.style.borderColor = '#DC2626';
      errorElement.textContent = msg;
      errorElement.classList.add('visible');
    }

    function clearError(input, errorElement) {
      input.style.borderColor = '#E2E8F0';
      errorElement.textContent = '';
      errorElement.classList.remove('visible');
    }

    senderName.addEventListener('input', () => clearError(senderName, nameError));
    senderEmail.addEventListener('input', () => clearError(senderEmail, emailError));
    inquirySubject.addEventListener('change', () => clearError(inquirySubject, subjectError));
    senderMessage.addEventListener('input', () => clearError(senderMessage, messageError));

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate Name
      if (!senderName.value.trim() || senderName.value.trim().length < 3) {
        showError(senderName, nameError, 'Please enter your full name (minimum 3 characters).');
        isValid = false;
      }

      // Validate Email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!senderEmail.value.trim() || !emailPattern.test(senderEmail.value.trim())) {
        showError(senderEmail, emailError, 'Please enter a valid academic/personal email address.');
        isValid = false;
      }

      // Validate Category
      if (!inquirySubject.value) {
        showError(inquirySubject, subjectError, 'Please select an inquiry category.');
        isValid = false;
      }

      // Validate Message
      if (!senderMessage.value.trim() || senderMessage.value.trim().length < 10) {
        showError(senderMessage, messageError, 'Message must be at least 10 characters in length.');
        isValid = false;
      }

      if (isValid) {
        if (formSuccess) {
          formSuccess.classList.add('visible');
        }
        contactForm.reset();
      }
    });
  }
});
