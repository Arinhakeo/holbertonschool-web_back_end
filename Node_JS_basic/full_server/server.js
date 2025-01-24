import app from './routes/index';

const PORT = 1245;

app.listen(1245, () => {
  console.log(`Server listening on port 1245`);
});

export default app;