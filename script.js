let currentPlayer = 'X';


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

