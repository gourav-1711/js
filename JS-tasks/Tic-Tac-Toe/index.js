const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
let currentPlayer = "O";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleCellClick(e) {
  const index = e.target.getAttribute("data-index");
  console.log(currentPlayer);

  if (board[index] != "" || !gameActive) return;

  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;

  if (checkWin()) {
    statusText.textContent = `Player ${currentPlayer} wins!`;
    gameActive = false;
  } else if (board.every((cell) => cell != "")) {
    statusText.textContent = "It's a draw!";
    gameActive = false;
    cells.forEach(cell => cell.classList.add("draw"));
  } else {
    currentPlayer = currentPlayer === "O" ? "X" : "O";
    statusText.textContent = `Player ${currentPlayer}'s turn`;
  }
}

function checkWin() {
  for (let condition of winConditions) {
    const [a, b, c] = condition;
    if (
      board[a] === currentPlayer &&
      board[b] === currentPlayer &&
      board[c] === currentPlayer &&
      board[a] !== ""
    ) {
      // highlight winning cells
      highlightWinningCells([a, b, c]);
      return true;
    }
  }
  return false;
}

function highlightWinningCells(indices) {
  indices.forEach(i => {
    cells[i].classList.add("win");
  });
}

function resetGame() {
  currentPlayer = "O";
  board = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  statusText.textContent = `Player ${currentPlayer}'s turn`;
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("win"); // ✅ remove win style
    cell.classList.remove("draw")
  });
}


cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
