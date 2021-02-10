const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Shabat!',
];
function Myfunc() {
  let now = new Date();
  console.log(`Today is ${days[now.getUTCDay()]},
    The date is ${
      months[now.getUTCMonth()]
    }.${now.getDate()} in ${now.getUTCFullYear()} 
`);
}
Myfunc();
