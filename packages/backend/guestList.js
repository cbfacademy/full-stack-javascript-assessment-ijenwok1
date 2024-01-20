const express = require('express');
const app = express.Router()

function guestsRoutes(mongodb)
{
// Create a new guest
app.post('/', (req, res) => {
  const newGuest = { id: guests.length + 1, ...req.body };
  guests.push(newGuest);
  res.status(201).json(newGuest);
});

// Get all guests
app.get('/', async(req,res) => {
  try {
      const guests = await mongodb.db('WeddingPlan').collection('Guestlist').find().toArray();
      res.status(200).json(guests)
      }catch(err) {
       console.log({err})
      }
});

// Get a guest by ID
app.get('/:id', (req, res) => {
  const guestId = parseInt(req.params.id);
  const guest = guests.find((g) => g.id === guestId);

  if (guest) {
    res.json(guest);
  } else {
    res.status(404).json({ error: 'Guest not found' });
  }
});

// Update a guest by ID
app.put('/:id', (req, res) => {
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
app.delete('/:id', (req, res) => {
  const guestId = parseInt(req.params.id);
  const index = guests.findIndex((g) => g.id === guestId);

  if (index !== -1) {
    const deletedGuest = guests.splice(index, 1);
    res.json(deletedGuest[0]);
  } else {
    res.status(404).json({ error: 'Guest not found' });
  }
});

return app 
}

module.exports = guestsRoutes;