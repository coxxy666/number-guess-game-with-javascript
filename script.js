'use strict';
// import 'Math';

let score = 20;
let highest_score = 0;
let number_guess = Math.trunc(Math.random() * 20 + 1);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const user_guess = Number(document.querySelector('.guess').value);

  if (!user_guess) {
    // document.querySelector('.message').textContent = 'NO NUMBER⛔';
    displayMessage('NO NUMBER⛔');
  } else if (user_guess !== number_guess) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     user_guess > number_guess ? 'Too High  📉' : 'Too Low  📉';
      displayMessage(
        user_guess > number_guess ? 'Too High  📉' : 'Too Low  📉'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'You Lost😒';
      displayMessage('You Lost😒');

      document.querySelector('.score').textContent = 0;
    }
  } else if (number_guess == user_guess) {
    // document.querySelector('.message').textContent = 'CORRECT👍';
    displayMessage('CORRECT👍');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '50rem';
    document.querySelector('.number').textContent = number_guess;
    if (score > highest_score) {
      highest_score = score;

      document.querySelector('.highscore').textContent = highest_score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number_guess = Math.trunc(Math.random() * 20 + 1);
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = ' #000000 ';
  document.querySelector('.number').style.width = '15rem';
});
