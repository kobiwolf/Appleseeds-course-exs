const https = require('https');
const url = 'https://cat-fact.herokuapp.com/facts';

const fbiList = https.request(url, (res) => {
  let count = 0;
  let full = [];
  res.on('data', (data) => {
    console.log(data.toString());
    full.push(data.toString());
    count++;
  });
  res.on('end', () => {
    console.log(JSON.parse(full[0]));
    console.log(count);
  });
});
fbiList.end();
