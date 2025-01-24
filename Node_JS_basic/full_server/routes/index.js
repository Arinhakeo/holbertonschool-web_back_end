import { createServer } from 'http';
import StudentsController from '../controllers/StudentsController';

const router = (req, res) => {
  const url = req.url;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    StudentsController.getAllStudents(req, res);
  } else if (url.startsWith('/students/')) {
    StudentsController.getAllStudentsByMajor(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
};

const app = createServer(router);

export default app;