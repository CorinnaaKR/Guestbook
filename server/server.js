import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8080;
app.listen(PORT, function () {
  console.info(` Server is running in port ${PORT}`);
});

app.get("/", function (req, res) {
  res.json({ message: "Welcome to the server. GET comfy" });
});

//imports
//initialise express and cors
//tell server to you JSON
//set up a port
//set up a root route

//TODO: I want to READ all the data from my table

//TODO: I want to CREATE new data in the table
