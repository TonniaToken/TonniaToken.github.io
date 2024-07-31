// script.js
// Add event listener to team members
document.querySelectorAll('.team-member').forEach(member => {
  member.addEventListener('click', () => {
    // Toggle active class
    member.classList.toggle('active');
  });
});

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    // Toggle active class
    question.classList.toggle('active');
    // Toggle answer display
    question.nextElementSibling.classList.toggle('show');
  });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
