import express from "express";
const app = express();
import Route from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";

import { fileURLToPath } from "url";
import { dirname } from "path";

import dotenv from "dotenv";
dotenv.config();

import connection from "./connection/db.js";
import DefaultData from "./default.js";

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use("/", Route);

const PORT = process.env.PORT || 8000;
connection();

// TODO: Deployment

// Heroku

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// TODO: Deployment

app.listen(
  PORT,
  console.log(`server is running successfully on port : ${PORT}`)
);
DefaultData();
