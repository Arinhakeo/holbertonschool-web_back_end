import readDatabase from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(process.argv[2]);
      let output = 'This is the list of our students\n';
      
      // Trier les domaines alphabétiquement
      const sortedFields = Object.keys(students).sort((a, b) => 
        a.localeCompare(b, 'en', {sensitivity: 'base'}));
      
      sortedFields.forEach(field => {
        output += `Number of students in ${field}: ${students[field].length}. `;
        output += `List: ${students[field].join(', ')}\n`;
      });
      
      res.status(200).send(output);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    
    try {
      const students = await readDatabase(process.argv[2]);
      const list = students[major] || [];
      res.status(200).send(`List: ${list.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
