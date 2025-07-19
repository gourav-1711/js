const userButtons = document.querySelectorAll('.hand.user');
const cpuButtons = document.querySelectorAll('.hand.cpu');
const userScore = document.getElementById('user-score');
const cpuScore = document.getElementById('cpu-score');
const resetBtn = document.querySelector('.reset-btn');

const userSection = document.getElementById('user-section');
const cpuSection = document.getElementById('cpu-section');

const moveSound = document.getElementById('move-sound');
const winSound = document.getElementById('win-sound');
const loseSound = document.getElementById('lose-sound');
const drawSound = document.getElementById('draw-sound');

const moves = ['rock', 'paper', 'scissors'];
let score = { user: 0, cpu: 0 };

userButtons.forEach(button => {
  button.addEventListener('click', () => {
    const userMove = button.dataset.move;
    const cpuMove = moves[Math.floor(Math.random() * 3)];
    const cpuBtn = document.querySelector(`.hand.cpu[data-move="${cpuMove}"]`);

    moveSound.play();
    clearHighlights();

    const result = getWinner(userMove, cpuMove);

    if (result === 'user') {
      button.classList.add('winner');
      userSection.classList.add('winner-glow');
      cpuBtn.classList.add('loser');
      setTimeout(() => {
        cpuBtn.classList.remove('loser');
        button.classList.remove('winner');
        userSection.classList.remove('winner-glow');
      }, 800);
      score.user++;

    } else if (result === 'cpu') {
      cpuBtn.classList.add('winner');
      button.classList.add('loser');
      cpuSection.classList.add('winner-glow');
      setTimeout(() => {
        cpuBtn.classList.remove('winner');
        button.classList.remove('loser');
        cpuSection.classList.remove('winner-glow');
      }, 800);
      score.cpu++;
     
    } else {
      button.classList.add('draw');
      cpuBtn.classList.add('draw');
      setTimeout(() => {
        
      }, 800);
    
    }

    updateScore();
  });
});

function getWinner(user, cpu) {
  if (user === cpu) return 'draw';
  if (
    (user === 'rock' && cpu === 'scissors') ||
    (user === 'paper' && cpu === 'rock') ||
    (user === 'scissors' && cpu === 'paper')
  ) {
    return 'user';
  }
  return 'cpu';
}

function clearHighlights() {
  document.querySelectorAll('.hand').forEach(btn => {
    btn.classList.remove('winner', 'draw');
  });
  userSection.classList.remove('winner-glow');
  cpuSection.classList.remove('winner-glow');
}

function updateScore() {
  userScore.textContent = score.user;
  cpuScore.textContent = score.cpu;
}

resetBtn.addEventListener('click', () => {
  score = { user: 0, cpu: 0 };
  updateScore();
  clearHighlights();
});
