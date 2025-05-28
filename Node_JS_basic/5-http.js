 const http = require('http');
const countStudents = require('./3-read_file_async');

const databaseName = process.argv[2];

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students');
    if (!databaseName) {
      res.end('No database provided');
    } else {
      try {
        const output = await countStudents(databaseName);
        res.end(output);
      } catch (error) {
        res.end(error.message);
      }
    }
  } else {
    res.end('Not Found');
  }
});

app.listen(1245);
module.exports = app;