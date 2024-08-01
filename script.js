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
// script.js

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    question.classList.toggle('active');
    question.nextElementSibling.classList.toggle('show');
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
// document.addEventListener("DOMContentLoaded", function () {
	const faqQuestions = document.querySelectorAll(".faq-question");console.log (faqQuestions);
	faqQuestions.forEach((question) => {
		question.addEventListener("click", () => {console.log("question clicked!");const answer question.querySelectorAll;console.log(answer);
			const answer = question.querySelectorAll;('.faq-answer')
			answer.style.display = answer.style.display === "none" ? "block" : "none";
		});
	});
});
