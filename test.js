// Є шахова дошка. Написати програму, що запитує у користувача координати клітини,
// а повертає колір клітини, обраної користувачем. Наприклад: а2 - біла

const boardSize = Number(
    prompt('Введіть розмір дошки (клітин в одному напрямку):'),
  );
  
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  
  const createChessBoard = function (size, alphabet) {
    let chessBoardAlphabet = [...alphabet].slice(0, size);
    let chessBoard = {};
    for (let i = 0; i < size; i += 1) {
      for (let row = 0; row < size; row += 1) {
        if (row % 2 === 0) {
          chessBoard[chessBoardAlphabet[row] + (i + 1)] = 'black';
        }
  
        if (row % 2 !== 0) {
          chessBoard[chessBoardAlphabet[row] + (i + 1)] = 'white';
        }
        chessBoard[chessBoardAlphabet[row] + (i + 1)] = 'white';
      }
      return console.log(chessBoard);
    }
  };
  
  createChessBoard(boardSize, alphabet);
  