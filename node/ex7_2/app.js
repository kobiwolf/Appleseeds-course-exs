const http = require('http');
const fs = require('fs');

const json = require('./users.json');
const diff = fs.readFileSync('./diff.html').toString();
const style = fs.readFileSync('./style.css').toString();

const app = http.createServer((req, res) => {
  const url = req.url;

  switch (url) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(`<h1>home page.</h1> `);
      break;
    case '/users':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(JSON.stringify(json));
      break;
    case '/diff.html':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(diff);
      res.end();
      break;
    case '/style.css':
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(style);
      res.end();
      break;
    case '/js.js':
      fs.readFile('./js.js', function (error, jsRead) {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        console.log(jsRead.toString());
        res.write(jsRead.toString());
        res.end();
      });

      break;
    default:
      res.write(`wrong `);
      break;
  }
});

app.listen(3000);
