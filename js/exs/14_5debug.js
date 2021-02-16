function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter += 1;
    }
  }
  return counter;
}
countOccurrences('ini mini miny moe', 'n');
// 1
//line 5
// 2
//breakpoint by the devtools
// 3
//there isn't a '=' in order to increase counter
// 4
