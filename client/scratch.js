  //MANNY DEMO CODE - INDEX HTML - FORMS & VALIDATION
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="./app.js" defer></script>
    <title>Forms and validation</title>
  </head>
  <body>
    <h1>Forms and Validation</h1>
    <form id="user-form">
      <label for="full-name">Full name: </label>
      <input
        name="full-name"
        id="full-name"
        class="full-name"
        type="text"
        required
        placeholder="spell check!"
      />
      <label for="email">Email: </label>
      <input
        name="email"
        type="email"
        required
        placeholder="gmail is preferred"
      />
      <label for="password">Password: </label>
      <input name="password" type="password" required />
         <label for="new-password">Re-type your password: </label>
    <input name="new-password" type="password" required inert/> 
      <button type="submit">Submit</button>
    </form>
  </body>
</html>  




  //MANNY DEMO INDEX HTML FOR USERS-INPUTS-POST ROUTES
  
  <body>
    <h1>Staff App</h1>
    <!-- in here, we need to add some inputs that resemble the table columns -->
    <!-- be consistent between the data you collect in the client, the data you process in the server, and the data you sotre in the database -->
    <form id="staff-form">
      <!-- validate the data type of your inputs to match the columns in the database -->
      <!-- name your inputs with the same value as the name of your columns in the database table -->
      <label for="name">Staff name: </label>
      <input type="text" name="name" required />
      <label for="location">Location: </label>
      <input type="text" name="location" required />
      <label for="age">Staff age: </label>
      <input type="number" name="age" required min="16" max="75" />
      <label for="role">Staff role: </label>
      <input type="text" name="role" required />
      <button type="submit">Submit new data</button>
    </form>
  </body>


//MANNY DEMO CODE - FORMS & VALIDATION

//forms
//TODO: add an event to our form submission
// - event listener
const form = document.getElementById("user-form");
form.addEventListener("submit", handleSubmit);
// - event handler
//TODO: handle the form data
function handleSubmit(event) {
  // - prevent the default behaviour of the submit event --> to add our input data to the URL
  event.preventDefault();
  // - create an element to store our data --> object template
  // form {
  //   full-name: blankSpace,
  //   email: blankSpace,
  //   password: blankSpace
  // }
  const formDataTemplate = new FormData(form);
  console.log(formDataTemplate);
}
  //- add the user input values to our object template
  const formValues = Object.fromEntries(formDataTemplate);
  console.log(formValues);
  // form {
  //   full-name: "Manny",
  //   email: "Manny@gmail.com",
  //   password: "hdjsvbvshjsdh2h3n44"
  // }
  // the next step would be to send the form values to the server to be processed (week 4 topic)








