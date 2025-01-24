import http from 'http';
import countStudents from '../3-read_file_async';
const app = http.createServer(async (req, res) => {
  const url = req.url;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    try {
      const studentsData = await countStudents('../database.csv');
      res.end(studentsData);
    } catch (error) {
      res.end(error.message);
    }
  } else if (url.startsWith('/students/')) {
    const major = url.split('/')[2];
    if (major !== 'CS' && major !== 'SWE') {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Major parameter must be CS or SWE');
    } else {
      try {
        const studentsData = await countStudents('../database.csv');
        const lines = studentsData.split('\n');
        const filteredStudents = lines
          .filter((line) => line.includes(major))
          .map((line) => line.split(',')[0])
          .join(', ');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`List: ${filteredStudents}`);
      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Cannot load the database');
      }
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

export default app;