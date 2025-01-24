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
        const studentsData = await countStudents('./database.csv');
        const lines = studentsData.split('\n');
  
        // Filtrer les étudiants par major
        const filteredStudents = lines
          .slice(1) // Ignorer l'en-tête
          .filter((line) => {
            const fields = line.split(','); // Diviser la ligne en champs
            if (fields.length >= 4) { // Vérifier qu'il y a au moins 4 champs
              const field = fields[3].trim(); // Récupérer le champ "field" et supprimer les espaces
              return field === major; // Filtrer par major
            }
            return false; // Ignorer les lignes mal formatées
          })
          .map((line) => line.split(',')[0].trim()) // Récupérer le prénom et supprimer les espaces
          .join(', '); // Joindre les prénoms avec une virgule
  
        console.log(`Filtered students for ${major}:`, filteredStudents); // Log pour déboguer
  
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`List: ${filteredStudents}`);
      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Cannot load the database');
      }
    }
  }
}