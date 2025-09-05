//MANNY DEMO FOR USER INPUT-POST ROUTES

//TODO: I want to READ all the data from the staff table
// http://localhost:8080/guests --> endpoint, params
app.get("/getDBData", async function (req, res) {
  //we need to query our database here
  const query = await db.query(`SELECT * FROM guestFeedback;`);
  console.log(query);
  //parse data into JSON and wrangle data
  res.json(query.rows);
});



//find wrangled data demo
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

function getGuestComments() {
  const retrievedData = localStorage.getItem("clickerData");
  if (retrievedData) {
    const loadedData = JSON.parse(retrievedData);
    clickerData.cookieAmount = loadedData.cookieAmount;
    clickerData.cps = loadedData.cps;
  }
}

loadedData();

//CREATING UPGRADES Comments

const addGuestComments = document.getElementById("guestFeedback");

async function showComments() {
  const comments = await cookieUpgrades();


  upgrades.forEach((upgrades, i) => {
    //
    const commentsBox = document.createElement("Comment");
    commentsBox.textContent = `${Name} (Name: ${upgrades.cost}, +${upgrades.increase} CPS)`;
    console.log(upgradesButton);

    shopContainer.appendChild(upgradesButton);


createUpgrades();


//Cookie Clicker Code

 const stringifiedClickerData = JSON.stringify(clickerData);
  localStorage.setItem("clickerData", stringifiedClickerData);
}, 1000);

//CALLING API

async function cookieUpgrades() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );

  console.log(response);

  const data = await response.json();
  console.log(data);

  return data;
}
cookieUpgrades();

//RETRIEVING & CALLING DATA

function purchaseUpdgrades(i) {
  upgrades = null;
}

function loadedData() {
  const retrievedData = localStorage.getItem("clickerData");
  if (retrievedData) {
    const loadedData = JSON.parse(retrievedData);
    clickerData.cookieAmount = loadedData.cookieAmount;
    clickerData.cps = loadedData.cps;
  }
}

loadedData();

//CREATING UPGRADES BUTTONS

const returnedData = document.getElementById("shop-container");

async function createUpgrades() {
  const upgrades = await cookieUpgrades();

  //my original code...(double check with Manny or Joe)
  //for (let i = 0; i < upgrades.length; i++) {

  //ChatGPT suggestion *double check understanding*

  upgrades.forEach((upgrades, i) => {
    
    const upgradesButton = document.createElement("button");
    upgradesButton.textContent = `${upgrades.name} (Cost: ${upgrades.cost}, +${upgrades.increase} CPS)`;
    console.log(upgradesButton);

    shopContainer.appendChild(upgradesButton);
  )}};
createUpgrades();


//TODO: CREATE (POST) new data in the database
app.post("/add-staff", (req, res) => {
  //an element to store the data coming from the client
  const newStaff = req.body.formValues;
  //database query
  //in our SQL queries, we can have a placeholder (parameter) that we will replace with the actual values when the client sends them
  const query = db.query(
    `INSERT INTO staff (name, location, age, role) VALUES ($1, $2, $3, $4)`,
    [newStaff.name, newStaff.location, newStaff.age, newStaff.role]
  );
  res.json("Data sent", query);
});

//MANNY DEMO CODE FOR SERVER QUERIES

//TODO: I want to READ all the names from the staff table

app.get("/staff-names", async function (req, res) {
  const query = await db.query(`SELECT name FROM staff;`);
  res.json(query.rows);
});
