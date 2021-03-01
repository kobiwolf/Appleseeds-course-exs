let avrage = function (name = 'NO-ONE', game1, game2, game3) {
  return {
    name: name,
    avv: (game1 + game2 + game3) / arguments.length,
  };
};
let avrageWin = function (status1, status2) {
  if (status1.avv > status2.avv) {
    console.log(
      `The winner is ${status1.name} with an avage of ${status1.avv}`
    );
  } else if (status1.avv < status2.avv) {
    console.log(
      `The winner is ${status2.name} with an avarge of ${status2.avv}`
    );
  } else {
    console.log(`it's a tie!lol`);
  }
};
avrageWin(avrage('John', 89, 120, 103), avrage('Mike', 166, 94, 123));
avrageWin(avrage('John', 89, 190, 193), avrage('Mike', 166, 94, 123));
