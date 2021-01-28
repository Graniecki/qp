'use strict';

const questionsBlock = document.querySelector('.questions');

questionsBlock.addEventListener('click', (event) => {
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
});
