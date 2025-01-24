const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1); // Ignorer l'en-tête

    const fields = {};
    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstname);
    });

    let result = `Number of students: ${students.length}\n`;
    for (const [field, names] of Object.entries(fields)) {
      result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }

    return result; // Retourne la chaîne de caractères au lieu de l'afficher
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
