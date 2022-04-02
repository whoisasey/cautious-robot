import express from 'express';
import bodyParser from 'body-parser';
import entriesRoutes from './routes/entries.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/entries', entriesRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} 🐙`);
});
