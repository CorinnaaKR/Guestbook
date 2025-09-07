//TODO: collect data from user and send to server
//-select the html element with users inputs

//TODO: Get database data from the server and rend (display) on the page

// - event listener
const guestForm = document.getElementById("guestFeedback");

guestForm.addEventListener("submit", handleSubmit);
// - event handler
//TODO: handle the form data
function handleSubmit() {
  event.preventDefault();

  // userInput.textContent = `Name: ${userInput.name}, Email: ${userInput.email}, Comment: ${userInput.comment}`;

  const formDataTemplate = new FormData(guestForm);

  console.log(formDataTemplate);

  const formValues = Object.fromEntries(formDataTemplate.entries());
  console.log(formValues);

  const returnedData = document.getElementById("dataReturn");
  if (returnedData) {
    returnedData.textContent = `Name: ${formValues.name}, Email: ${formValues.email}, Comment: ${formValues.comment}`;
  }

  const stringifiedUserInput = JSON.stringify(formValues);
  localStorage.setItem("userInput", stringifiedUserInput);
}
//- add the user input values to our object template

//-add event to html element

//the event handler has the following steps:
//- prevent default behaviour
// - create template for user's data
//- fill in the template with users data
//- send data (json) to the server --> while in development the server url uses local host, but when you finish deploying and your project is done, you need to replace the local host url with the server deployed url
