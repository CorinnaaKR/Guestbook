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

//TODO: I want to READ all the data from my table

// http://localhost:8080/staff --> endpoint, params
app.get("/getDBData", async function (req, res) {
  //we need to query our database here
  const query = await db.query(`SELECT * FROM userFeedback;`);
  console.log(query);
  //parse data into JSON and wrangle data
  res.json(query.rows);
});

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
  const response = await fetch("http://localhost:8080/staff ");
  const data = await response.json();
  console.log(retrieveData);
  //filtering the data to the properties that we need --> data wrangling
  const wrangledData = retrieveData.text;
  console.log(wrangledData);
  return wrangledData;
}

//TODO: Render the data on the DOM
function addGuestInfo(localhost) {
  const guestFeedback = document.getElementById("guestFeedback");
  //update the values of src and alt to match the foxes data
  guestFeedback.textContent = localhost;
  guestFeedback.appendChild(guestFeedback);
}

//TODO: put the data in the API
async function addGuestFeedbacktoAPI() {
  const addGuestInfo = await guestFeedback();
  addGuestInfo(guestFeedback);
}

addGuestFeedbacktoAPI();

//TODO: I want to CREATE new data in the table


async function retrieveComments() {
  const response = await fetch(
    "https://localhost:8080/guests"
  );

  console.log(response);

  const guestsComments = await response.json();
  console.log(da);

  return guestComments;
}

//RETRIEVING & CALLING DATA

//CREATING UPGRADES Comments

const addGuestComments = document.getElementById("guestFeedback");

async function showComments() {
  const comments = await cookieUpgrades();

  upgrades.forEach((upgrades, i) => {
    //
    const commentsBox = document.createElement("p");
    commentsBox.textContent = `${Name} (Name: ${upgrades.cost}, +${upgrades.increase} CPS)`;
    console.log(upgradesButton);

    shopContainer.appendChild(upgradesButton);

}});

createUpgrades();
