const Gameboard = (() => {
  const dimensions = 3;
  const board = [];

  const getBoard = () => board;
  const displayBoard = () => {
    console.log(board.map((row) => row.map((cell) => cell.getCell())));
  };

  for (let i = 0; i < dimensions; i++) {
    board[i] = [];
    for (let j = 0; j < dimensions; j++) {
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
  board[0][2].setMove(1);
  board[1][1].setMove(1);
  board[2][0].setMove(1);
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

  const rowMatch = (board) => {
    return board.some((row) => {
      const cells = row.map((cell) => cell.getCell());
      return sequenceMatch(cells);
    });
  };

  const colMatch = (board) => {
    for (let i = 0; i < board[0].length; i++) {
      const cells = board.map((row) => row[i].getCell());
      if (sequenceMatch(cells)) return true;
    }
    return false;
  };

  const diagonalMatch = (board) => {
    const cells = [];
    const cellsReverse = [];
    for (let i = 0; i < board.length; i++) {
      cells.push(board[i][i].getCell());
      cellsReverse.push(board[i][board.length - i - 1].getCell());
    }
    return sequenceMatch(cells) || sequenceMatch(cellsReverse) ? true : false;
  };

  if (rowMatch(board) || colMatch(board) || diagonalMatch(board)) {
    return true;
  } else {
    return false;
  }
}

const game = gameController();
