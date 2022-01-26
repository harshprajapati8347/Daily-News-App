import express from "express";
const app = express();
import Route from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

import connection from "./connection/db.js";
import DefaultData from "./default.js";

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use("/", Route);

const PORT = 8000;
connection();
app.listen(
  PORT,
  console.log(`server is running successfully on port : ${PORT}`)
);
DefaultData();
