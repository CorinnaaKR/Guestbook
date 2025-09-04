//MANNY DEMO FOR USER INPUT-POST ROUTES

//set up a root route
//TODO: READ (GET) a welcome message in the root route
app.get("/", (_, res) => {
  res.json({ message: "Welcome to the server. GET comfy!" });
});

//=============================================================
//TODO: READ all staff data in the database with name "Manny"
app.get("/staff-manny", async (_, res) => {
  //query the database
  const query = await db.query(
    `SELECT name, location, age, role FROM staff WHERE name = $1`,
    [
      //do not add values directly here, this is for demo purposes
      "Manny",
    ]
  );
  res.json(query.rows);
});

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

//TODO: I want to READ all the data from the staff table
// http://localhost:8080/staff --> endpoint, params
app.get("/staff", async function (req, res) {
  //we need to query our database here
  const query = await db.query(`SELECT * FROM staff;`);
  console.log(query);
  //parse data into JSON and wrangle data
  res.json(query.rows);
});

//TODO: I want to READ all the names from the staff table

app.get("/staff-names", async function (req, res) {
  const query = await db.query(`SELECT name FROM staff;`);
  res.json(query.rows);
});
