import express from "express";
import cors from 'cors';
import corsOptions from "./config/corsOptions.js";
import { performSearch } from "./controllers/searchController.js";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const app = express()
app.use(express.json())

app.use(cors(corsOptions))

app.get("/", (req, res) => {
    res.send("Benvenuto nel server Express!");
  });

  app.get("/Data/export_lombardia.csv", (req, res) => {
    const filePath = path.join(process.cwd(), "data", "export_lombardia.csv");
  
    // Read the file contents
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        res.status(500).send("Internal Server Error");
      } else {
        // Set the appropriate headers for CSV response
        res.setHeader("Content-Type", "text/csv");
        res.setHeader("Content-Disposition", "attachment; filename=export_lombardia.csv");
  
        // Send the file contents as the response
        res.send(data);
      }
    }).then(res.status(200).send("Successful Download!"));
  });
  
app.get("/search", performSearch);

app.listen(process.env.PORT || 8000, ()=>{
    console.log("Backend started")
});