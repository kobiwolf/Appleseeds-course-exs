let sign = prompt('How many sibiling you have??');
sign = parseInt(sign);
console.log(typeof sign);
if (sign === 1) {
  alert('1 sibling!');
} else if (sign > 1) {
  alert('more then 1 sibilings');
} else {
  alert('No sibilings');
}
