let currentPlayer = 'X';
const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
[0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
[0, 4, 8], [2, 4, 6]          // diagonals
];


const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetButton = document.getElementById('resetButton');

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    if (cell.textContent === '' && !checkWinner()) {
      cell.textContent = currentPlayer;
      if (checkWinner()) {
        message.textContent = `${currentPlayer} wins!`;
      } else if (checkDraw()) {
        message.textContent = 'It\'s a draw!';
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; 
      }
    }
    
    });
  });

resetButton.addEventListener('click', () => {
    cells.forEach(cell => cell.textContent = '');
    message.textContent = '';
    currentPlayer = 'X';
  });

function checkWinner() {
    for (let combo of winningCombinations) {
      if (cells[combo[0]].textContent === currentPlayer &&
          cells[combo[1]].textContent === currentPlayer &&
          cells[combo[2]].textContent === currentPlayer) {
        return true;
      }
    }
    return false;
  }

  function checkDraw() {
    for (let cell of cells) {
      if (cell.textContent === '') {
        return false;
      }
    }
    return true;
  }