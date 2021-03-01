const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let i1 = 0; i1 < listOfNeighbours[i].length; i1++) {
    console.log(`Cuontry:${listOfNeighbours[i][i1]}`);
  }
}
