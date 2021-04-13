const http = require('http');
const url = 'https://api.fbi.gov/wanted/v1/list';

const fbiList = http.request(url, (error, res) => {
  let count = 0;
  res.on('data', (data) => {
    console.log(data);
    count++;
  });
  res.on('end', () => {
    console.log(count);
  });
});
fbiList.end();
