const fs = require('node:fs');

function countStudents(path) {
  let countt = 0;
  let countCs = 0;
  let countSwe = 0;
  const listCs = [];
  const listSwe = [];

  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n');
    lines.forEach((line) => {
      if (line.trim() === '') return;
      const dataInrow = line.split(',');
      const firstname = dataInrow[0].trim();
      const len = dataInrow.length;
      const field = dataInrow[len - 1].trim();
      countt += 1;

      if (field === 'CS') {
        countCs += 1;
        listCs.push(firstname);
      } else if (field === 'SWE') {
        countSwe += 1;
        listSwe.push(firstname);
      }
    });
    console.log(`Number of students: ${countt}`);
    console.log(`Number of students in CS: ${countCs}.`, 'List:', listCs.join(', '));
    console.log(`Number of students in SWE: ${countSwe}.`, 'List:', listSwe.join(', '));
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;