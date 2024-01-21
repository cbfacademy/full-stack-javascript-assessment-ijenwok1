const express = require("express");
const { ObjectId } = require("mongodb");
const app = express.Router();

function guestsRoutes(mongodb) {
  // Create a new guest
  app.post("/", async (req, res) => {
    try {
      const newGuest = await mongodb
        .db("WeddingPlan")
        .collection("Guestlist")
        .insertOne(req.body);
      res.status(201).json(req.body);
    } catch (err) {
      console.log({ err });
    }
  });

  // Get all guests
  app.get("/", async (req, res) => {
    try {
      const guests = await mongodb
        .db("WeddingPlan")
        .collection("Guestlist")
        .find()
        .toArray();
      res.status(200).json(guests);
    } catch (err) {
      console.log({ err });
      res.status(404).json({ error: "Cannot find all guests" });
    }
  });

  // Get a guest by ID
  app.get("/:id", (req, res) => {
    const guestId = parseInt(req.params.id);
    const guest = guests.find((g) => g.id === guestId);

    if (guest) {
      res.json(guest);
    } else {
      res.status(404).json({ error: "Guest not found" });
    }
  });

  // Update a guest by name text
  app.put("/:id", async (req, res) => {
    try {
      const guestId = req.params.id;
      console.log(req.body, guestId);
      const { name, email, phoneNumber, rsvp } = req.body;
      const result = await mongodb
        .db("WeddingPlan")
        .collection("Guestlist")
        .findOneAndUpdate(
          { _id: new ObjectId(guestId) },
          { $set: { name, email, phoneNumber, rsvp } },
          { returnDocument: "after" }
        );
      res.status(201).json(result);
    } catch (err) {
      console.log({ err });
      res.status(404).json({ error: "Guest not found" });
    }
  });

  // Delete a guest by ID test
  app.delete("/:id", async (req, res) => {
    try {
      const guestId = req.params.id;
      const result = await mongodb
        .db("WeddingPlan")
        .collection("Guestlist")
        .findOneAndDelete({ _id: new ObjectId(guestId) });
      console.log("Guest deleted", guestId);
      res.status(201).json(result);
    } catch (err) {
      console.log({ err });
      res.status(404).json({ error: "Guest not found" });
    }
  });

  return app;
}

module.exports = guestsRoutes;