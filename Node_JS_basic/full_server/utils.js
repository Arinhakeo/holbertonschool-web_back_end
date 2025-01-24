import fs from 'fs/promises';

const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n').slice(1);
    const studentsByField = lines.reduce((acc, line) => {
      const [firstname, , , field] = line.split(',');
      
      if (!acc[field]) {
        acc[field] = [];
      }
      acc[field].push(firstname);
      return acc;
    }, {});

    return studentsByField;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

export default readDatabase;