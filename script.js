const Gameboard = (() => {
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
})();

function Cell() {
  let cell = 0;

  const setMove = (move) => {
    cell = move;
  };

  const getCell = () => {
    return cell;
  };

  return { setMove, getCell };
}

function Player(id, name) {
  let playerId = id;
  let playerName = name;

  const getId = () => playerId;
  const getName = () => playerName;

  return { getId, getName };
}

function gameController() {
  const board = Gameboard.getBoard();
  const players = [Player(1, "Kevin"), Player(2, "Computer")];

  board[0][0].setMove(1);
  board[0][1].setMove(1);
  board[0][2].setMove(1);

  console.log(checkWin(board));

  Gameboard.displayBoard();
}

function checkWin(board) {
  const condition1 = (board) => {
    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
      const row = board[rowIndex];
      let firstCell = row[0].getCell();
      for (let i = 1; i < row.length; i++) {
        let currentCell = row[i].getCell();
        if (currentCell === 0) break;
        if (currentCell !== firstCell) break;
        if (i === row.length - 1) return true;
      }
    }
  };

  const condition2 = (board) => {
    return false;
  };

  const condition3 = (board) => {
    return false;
  };

  if (condition1(board) || condition2(board) || condition3(board)) {
    return true;
  } else {
    return false;
  }
}

const game = gameController();
