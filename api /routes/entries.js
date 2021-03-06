import express from 'express';
import {
  getAllEntries,
  createEntry,
  getEntry,
  deleteEntry,
} from '../controllers/entries.js';

const router = express.Router();

router.get('/', getAllEntries);

// // create new entry
// router.post('/', (req, res) => {
//   const entry = req.body;

//   entries.push({ ...entry });

//   res.send(entries);
// });

// // get entry with id
// router.get('/:id', (req, res) => {
//   const { id } = req.params;
//   const entry = entries.find((entry) => entry.id === id);

//   res.send(entry);
// });

// // delete entry
// router.delete('/:id', (req, res) => {
//   const { id } = req.params;
//   entries = entries.filter((entry) => entry.id !== id);
//   res.send(entries);
// });

export default router;
