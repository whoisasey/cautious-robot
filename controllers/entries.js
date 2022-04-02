import { v4 as uuid4 } from 'uuid';
let entries = [];

// get all entries
export const getAllEntries = (req, res) => {
  res.send(entries);
};

// create new entry
export const createEntry = (req, res) => {
  const entry = req.body;

  entries.push({ ...entry, id: uuid4() });

  res.send(entries);
};

// get entry with id
export const getEntry = (req, res) => {
  const { id } = req.params;
  const entry = entries.find((entry) => entry.id === id);

  res.send(entry);
};

// delete entry
export const deleteEntry = (req, res) => {
  const { id } = req.params;
  entries = entries.filter((entry) => entry.id !== id);
  res.send(entries);
};

// update entry
// export const updateEntry = (req, res) => {
//   const { id } = req.params
//   // const { }
//     const entry = entries.find((entry) => entry.id === id)

// }
