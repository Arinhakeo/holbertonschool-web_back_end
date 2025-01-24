import countStudents from '../../3-read_file_async';

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsData = await countStudents('../database.csv');
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`This is the list of our students\n${studentsData}`);
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.url.split('/')[2];
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
  }
}