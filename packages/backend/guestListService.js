// guestListService.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// In-memory data store for the guest list
let guests = [];

app.use(bodyParser.json());

// Create a new guest
app.post('/guests', (req, res) => {
  const newGuest = { id: guests.length + 1, ...req.body };
  guests.push(newGuest);
  res.status(201).json(newGuest);
});

// Get all guests
app.get('/guests', (req, res) => {
  res.json(guests);
});

// Get a guest by ID
app.get('/guests/:id', (req, res) => {
  const guestId = parseInt(req.params.id);
  const guest = guests.find((g) => g.id === guestId);

  if (guest) {
    res.json(guest);
  } else {
    res.status(404).json({ error: 'Guest not found' });
  }
});

// Update a guest by ID
app.put('/guests/:id', (req, res) => {
  const guestId = parseInt(req.params.id);
  const index = guests.findIndex((g) => g.id === guestId);

  if (index !== -1) {
    guests[index] = { ...guests[index], ...req.body };
    res.json(guests[index]);
  } else {
    res.status(404).json({ error: 'Guest not found' });
  }
});

// Delete a guest by ID
app.delete('/guests/:id', (req, res) => {
  const guestId = parseInt(req.params.id);
  const index = guests.findIndex((g) => g.id === guestId);

  if (index !== -1) {
    const deletedGuest = guests.splice(index, 1);
    res.json(deletedGuest[0]);
  } else {
    res.status(404).json({ error: 'Guest not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
