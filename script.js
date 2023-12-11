function Gameboard() {
  const rows = 3;
  const cols = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < cols; j++) {
      board[i].push(Cell());
    }
  }

  const getBoard = () => {
    return board;
  };

  const displayBoard = () => {
    const boardWithCellValues = board.map((row) =>
      row.map((cell) => cell.getCell())
    );
    console.log(boardWithCellValues);
  };

  return { getBoard, displayBoard };
}

function Cell() {
  let cell = 0;

  const setMove = (move) => {
    if (cell === 0) {
      cell = move;
    }
  };

  const getCell = () => {
    return cell;
  };

  return { setMove, getCell };
}

function gameController() {
  const gameboard = Gameboard();
  const board = gameboard.getBoard();
  board[0][0].setMove(2);
  gameboard.displayBoard();
}

const game = gameController();
