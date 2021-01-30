'use strict';

// Opening question
const questionsBlock = document.querySelector('.questions');

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

questionsBlock.addEventListener('click', openQuestion);

// Form validation
const form = document.querySelector('.contact__form');

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

form.addEventListener('submit', formValidator);

// Menu opening on mobile and tablet devices
const header = document.querySelector('.header');
const headerNav = header.querySelector('.navigation');

const openMenu = (event) => {
  const target = event.target;
  const headerHeight = parseFloat(window.getComputedStyle(header).height);

  if (!target.closest('.header__menu')) {
    return;
  }

  header.style.height = headerHeight === 80 ? `${header.scrollHeight}px` : '80px';
};

header.addEventListener('click', openMenu);

// Slider
const team = document.querySelector('.team');
const cards = team.querySelector('.team__slider').children;
const state = {
  cardNumber: 0,
};

const toggleCard = (event) => {
  const target = event.target;

  if (!target.closest('.prev-slide') && !target.closest('.next-slide')) {
    return;
  }

  cards[state.cardNumber].classList.toggle('hidden');

  target.closest('.prev-slide') ? state.cardNumber-- : state.cardNumber++;

  switch (true) {
    case state.cardNumber < 0 :
      state.cardNumber = 3;
      break;
    case state.cardNumber > 3 :
      state.cardNumber = 0;
      break;
  }

  cards[state.cardNumber].classList.toggle('hidden');
};

team.addEventListener('click', toggleCard);
