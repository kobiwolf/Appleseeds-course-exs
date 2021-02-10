const array = ['Hello', 'Good Day', 'Your Welcome', 'hotdog', 'hamburgers'];
function count(arr) {
  let string = arr.join('');
  let obj = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      !obj[string[i].toLowerCase()]
        ? (obj[string[i].toLowerCase()] = 1)
        : (obj[string[i].toLowerCase()] += 1);
    }
  }

  return obj;
}
