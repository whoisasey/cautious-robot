import express from 'express';
import {
  getAllEntries,
  createEntry,
  getEntry,
  deleteEntry,
} from './controllers/entries';

const router = express.Router();

router.get('/', getAllEntries);

router.post('/', createEntry);

router.get('/:id', getEntry);

router.delete('/:id', deleteEntry);

export default router;
