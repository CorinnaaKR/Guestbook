import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8080;
app.listen(PORT, function () {
  console.log(`Server is running in port ${PORT}`);
});

// app.get("/", function (req, res) {
//   res.json({ message: "Welcome to the server. GET comfy" });
// });

//imports
//initialise express and cors
//tell server to you JSON
//set up a port
//set up a root route

//find wrangled data demo

//TODO: I want to READ all the data from the staff table
// http://localhost:8080/staff --> endpoint, params
app.get("/getDBData", async function (req, res) {
  //we need to query our database here
  const query = await db.query(`SELECT * FROM guestFeedback;`);
  console.log(query);
  //parse data into JSON and wrangle data
  res.json(query.rows);
});

//Wrangle Data
async function retrieveData() {
  const response = await fetch("http://localhost:8080/guest");
  const data = await response.json();
  console.log(retrieveData);
  //filtering the data to the properties that we need --> data wrangling
  const wrangledGuest = retrieveData.text;
  console.log(wrangledGuest);
  return wrangledGuest;
}

//TODO: Render the data on the DOM
function addGuestInfo(localhost) {
  const guestFeedback = document.getElementById("guestFeedback");
  //update the values of src and alt to match the foxes data
  guestFeedback.textContent = localhost;
  guestFeedback.appendChild(guestFeedback);
}

// //TODO: put the data in the API
async function addGuestFeedback() {
  const addGuestInfo = await retrieveData();

  addGuestInfo(guestFeedback);
}

addGuestFeedback();

//TODO: I want to CREATE new data in the table

async function guestComments() {
  const response = await fetch("https://localhost:8080/guests");

  const guestsComments = await response.json();
  console.log(guestComments);

  localStorage.setItem("clickerData", stringifiedClickerData);
  const stringifiedClickerData = JSON.stringify();

  console.log(response);

  return guestComments;
}

//CREATING UPGRADES Comments

async function showComments() {
  const showComments = await guestComments();

  guestComments.forEach((guestComments, i) => {
    const commentsBox = document.createElement("p");
    commentsBox.textContent = `${Name} (Name: ${guestComments.email} E-mail, +${guestComments.comment} Comments)`;
    console.log(showComments);

    shopContainer.appendChild(upgradesButton);
  });
}

showComments();

//TODO: CREATE (POST) new data in the database
app.post("/add-guest", (req, res) => {
  //an element to store the data coming from the client
  const newGuest = req.body.formValues;
  //database query
  //in our SQL queries, we can have a placeholder (parameter) that we will replace with the actual values when the client sends them
  const query = db.query(
    `INSERT INTO guest (name, email, comment) VALUES ($1, $2, $3)`,
    [newGuest.name, newGuest.email, newGuest.comment]
  );
  res.json("Data sent", query);
});
