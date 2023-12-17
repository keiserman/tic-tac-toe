const Gameboard = (() => {
  const rows = 3;
  const cols = 3;
  const board = [];

  const getBoard = () => board;
  const displayBoard = () => {
    console.log(board.map((row) => row.map((cell) => cell.getCell())));
  };

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < cols; j++) {
      board[i].push(Cell());
    }
  }

  return { getBoard, displayBoard };
})();

function Cell() {
  let cell = 0;
  const setMove = (move) => (cell = move);
  const getCell = () => cell;
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
  board[0][0].setMove(1);
  board[0][1].setMove(1);
  board[0][2].setMove(1);
  console.log(checkWin(board));
  Gameboard.displayBoard();
}

function checkWin(board) {
  function sequenceMatch(array) {
    let firstCell = array[0];
    for (let i = 0; i < array.length; i++) {
      if (array[i] === 0) return false;
      if (array[i] !== firstCell) return false;
    }
    return true;
  }

  const rowMatches = (board) => {
    return board.some((row) => {
      const cells = row.map((cell) => cell.getCell());
      return sequenceMatch(cells);
    });
  };

  const condition2 = (board) => {
    return false;
  };

  const condition3 = (board) => {
    return false;
  };

  if (rowMatches(board) || condition2(board) || condition3(board)) {
    return true;
  } else {
    return false;
  }
}

const game = gameController();
