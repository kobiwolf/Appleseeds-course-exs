const book = {
  name: 'Harry-Potter',
  auther: 'J-K',
  year: 2001,
  price: '50$',
};
function printInfo(objBook) {
  console.log(`The book ${objBook.name} was written by ${objBook.author} in
the year ${objBook.year}`);
}
printInfo(book);
