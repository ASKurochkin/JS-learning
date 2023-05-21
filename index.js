const friends = [
  {
    img: 'https://w7.pngwing.com/pngs/744/940/png-transparent-anonym-avatar-default-head-person-unknown-user-user-pictures-icon.png',
    name: 'Anna',
    books: ['Bible', 'Harry Potter', 'The Snow Queen'],
  },
  {
    img: 'https://w7.pngwing.com/pngs/744/940/png-transparent-anonym-avatar-default-head-person-unknown-user-user-pictures-icon.png',
    name: 'Bob',
    books: [],
  },
  {
    img: 'https://w7.pngwing.com/pngs/744/940/png-transparent-anonym-avatar-default-head-person-unknown-user-user-pictures-icon.png',
    name: 'Alice',
    books: ['War and peace', 'Romeo and Juliet'],
  },
  {
    img: 'https://w7.pngwing.com/pngs/744/940/png-transparent-anonym-avatar-default-head-person-unknown-user-user-pictures-icon.png',
    name: 'Oleksii',
    books: [
      'Bible',
      'War and peace',
      'Harry Potter',
      'Romeo and Juliet',
      'Death on the Nile',
    ],
  },
];

const containerEl = document.querySelector('.js-card');

const markupCard = friends.map(({ img, name, books }) => {
  return `<li>
      <img src="${img}" alt="${name}" width="300">
      <h2>${name}</h2>
      <p>Books</p>
      <ul>
      ${books.reduce((acc, book, index) => {
        if (index < 2) {
          return (acc += `<li>${book}</li>`);
        } else if (index === 2) {
          return (acc += '<li>...</li>');
        } else {
          return acc;
        }
      },
      !books.length ? '<li>No books have been read</li>':'')}
      </ul>
  </li>`;
}).join('');

containerEl.insertAdjacentHTML("beforeend", markupCard)
