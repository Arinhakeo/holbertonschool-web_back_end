const http = require('http');

// create a server object:
const app = http.createServer((req, res) => {
  res.end('Hello Holberton School!');
});
app.listen(1245);
module.exports = app;