function capital(arr) {
  return new Promise((resolve) => {
    arr.forEach((v, i) => {
      arr[i] = v.toString().toUpperCase();
    });
    resolve(arr);
  });
}
function sort(arr) {
  arr.sort();
  return new Promise((resolve, reject) => {
    if (/[^A-Z]/.test(arr.join(''))) reject(arr);
    else resolve(arr);
  });
}
let arr = ['hello', 'this', '1'];
capital(arr)
  .then((v) => sort(v))
  .then((v) => console.log('you great'))
  .catch((v) => console.log('you suck'));
