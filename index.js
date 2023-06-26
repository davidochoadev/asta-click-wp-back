import express from "express";
import cors from 'cors';
import corsOptions from "./config/corsOptions.js";
import { performSearch } from "./controllers/searchController.js";

const app = express()
app.use(express.json())

app.use(cors(corsOptions))

app.get("/", (req, res) => {
    res.send("Benvenuto nel server Express!");
  });

  app.get("/search", performSearch);

app.listen(process.env.PORT || 8000, ()=>{
    console.log("Backend started")
});