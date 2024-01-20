const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require("mongodb");
const vendorsRoutes = require('./vendors');
const guestsRoutes = require('./guestList');

require("dotenv").config();
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    // Pass the MongoDB client instance to the route handlers
    app.use('/api/vendors', vendorsRoutes(client));
    app.use('/api/guests', guestsRoutes(client));

  } finally {
    // No need to close the connection here; it will be closed when the server stops
  }
}

app.get("/", (req, res) => {
  res.send("Hello from the CBF Academy backend!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

// Call the run function to connect to MongoDB and set up routes
run().catch(console.dir);
