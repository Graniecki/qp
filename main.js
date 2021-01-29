'use strict';

const questionsBlock = document.querySelector('.questions');
const form = document.querySelector('.contact__form');

const openQuestion = (event) => {
  const target = event.target;

  if (!target.closest('.questions__block')) {
    return;
  }

  const currentQuestion = target.closest('.questions__block');
  const plus = currentQuestion.lastElementChild;
  const questions = currentQuestion.parentElement.children;

  if (currentQuestion.classList.contains('open')) {
    currentQuestion.classList.remove('open');
    currentQuestion.style.height = '80px';
    plus.style.transform = 'rotate(0deg)';

    return;
  }

  [...questions].forEach(block => {
    block.classList.remove('open');
    block.style.height = '80px';
    block.lastElementChild.style.transform = 'rotate(0deg)';
  });

  currentQuestion.classList.add('open');

  if (!currentQuestion.classList.contains('open')) {
    currentQuestion.style.height = '80px';

    return;
  }

  currentQuestion.style.height = `${currentQuestion.scrollHeight}px`;
  plus.style.transform = 'rotate(45deg)';
}

const formValidator = (event) => {
  event.preventDefault();

  const email = form.elements.email;

  if (!email.value.includes('@')) {
    email.classList.add('uncorrect');
    email.parentElement.classList.add('uncorrect');
    email.classList.remove('correct');
  } else {
    email.classList.add('correct');
    email.classList.remove('uncorrect');
    email.parentElement.classList.remove('uncorrect');
  }

  email.value = '';

  setTimeout(() => {
    email.classList.remove('correct');
    email.classList.remove('uncorrect');
    email.parentElement.classList.remove('uncorrect');
  }, 5000);
};

questionsBlock.addEventListener('click', openQuestion);
form.addEventListener('submit', formValidator);
