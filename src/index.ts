import express from 'express';

const PORT = process.env.PORT ?? 3000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.send({ message: 'Hello world!' });
});

app.listen(PORT, () => {
  console.log(`Server up and running at http://localhost:${PORT}`);
});
