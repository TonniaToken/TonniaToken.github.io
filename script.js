// script.js

// Add event listener to team members
document.querySelectorAll('.team-member').forEach(member => {
  member.addEventListener('click', () => {
    member.classList.toggle('active');
  });
});

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === "none" ? "block" : "none";
  });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    let target = document.querySelector(anchor.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Team member hover effects
document.querySelectorAll('.team-member img').forEach(image => {
  image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.1)';
  });
  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)';
  });
});
