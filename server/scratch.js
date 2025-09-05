//MANNY DEMO FOR USER INPUT-POST ROUTES

//TODO: I want to READ all the data from the staff table
// http://localhost:8080/staff --> endpoint, params
app.get("/getDBData", async function (req, res) {
  //we need to query our database here
  const query = await db.query(`SELECT * FROM guestFeedback;`);
  console.log(query);
  //parse data into JSON and wrangle data
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

//TODO: I want to READ all the names from the staff table

app.get("/staff-names", async function (req, res) {
  const query = await db.query(`SELECT name FROM staff;`);
  res.json(query.rows);
});
