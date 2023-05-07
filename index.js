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
  let sqrColor = 'чорний';
  let counter = -1;
  for (let i = 0; i < size; i += 1) {
    for (let row = 0; row < size; row += 1) {
      if (Object.keys(chessBoard).length % size === 0) {
        counter += 1;
      }
      if (
        (chessBoardAlphabet.indexOf(chessBoardAlphabet[row]) + counter) % 2 ===
        0
      ) {
        sqrColor = 'чорний';
      }
      if (
        (chessBoardAlphabet.indexOf(chessBoardAlphabet[row]) + counter) % 2 !==
        0
      ) {
        sqrColor = 'білий';
      }
      chessBoard[chessBoardAlphabet[row] + (i + 1)] = sqrColor;
    }
  }
  return chessBoard;
};

const squareColor = function (chessBoard) {
  let coordinate = prompt(
    'Введіть координати клітини шахматної дошки у форматі буква-цифра, наприклад а1:',
  );
  return console.log(`Колір обраної клітини ${chessBoard[coordinate]}`);
};

squareColor(createChessBoard(boardSize, alphabet))
