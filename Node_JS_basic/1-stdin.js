process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on("data", (data) => {
  const name = String(data).trim(); // Utilisation de String() au lieu de toString()
  process.stdout.write(`Your name is: ${name}\n`);
});

process.stdin.on("end", () => {
  console.log("This important software is now closing");
});
