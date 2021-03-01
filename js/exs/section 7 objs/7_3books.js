const book1 = {
  name: 'Lord-Of-The-Rings',
  author: 'Tolkin',
  year: 1995,
};
const book2 = {
  name: 'Spider-Man',
  author: 'Marvel',
  year: 2000,
};
const bookUti = {
  getFirstPublished(book1, book2) {
    return book1.year > book2.year ? book2 : book1;
  },
  setNewEdition(book, editionYear) {
    book.Edition = editionYear;
  },
  setLanguage(book, language) {
    book.language = language;
  },
  setTranslation(book, language, translation) {
    book.translation = {
      language,
      translation,
    };
  },
  setPublisher(book, location, name) {
    book.publisher = {
      location,
      name,
    };
  },
  isSamePublisher(book1, book2) {
    console.log(
      book1.publisher.name === book2.publisher.name &&
        book1.publisher.location === book2.publisher.location
        ? 'the same'
        : 'not the same'
    );
  },
};
console.log(bookUti.getFirstPublished(book1, book2));
bookUti.isSamePublisher(book1, book2);
