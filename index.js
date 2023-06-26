const express = require("express");
const cors = require('cors');
const corsOptions = require("./config/corsOptions.js");
const { performSearch } = require("./controllers/searchController.js");

const app = express();
app.use(express.json());

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Benvenuto nel server Express!");
});

app.get("/search", performSearch);

module.exports = app;
