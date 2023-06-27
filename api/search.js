import express from "express";
import cors from 'cors';
import corsOptions from "../config/corsOptions.js";
import { performSearch } from "../controllers/searchController.js";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";


const app = express();
app.use(express.json());

app.use(cors(corsOptions));

app.get("/api/search", performSearch);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
