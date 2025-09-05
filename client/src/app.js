//TODO: collect data from user and send to server
//-select the html element with users inputs

// - event listener
const form = document.getElementById("guestFeedback");

form.addEventListener("submit", handleSubmit);
// - event handler
//TODO: handle the form data
function handleSubmit(event) {
  event.preventDefault();
  const formDataTemplate = new FormData(form);
  console.log(formDataTemplate);
  const formValues = Object.fromEntries(formDataTemplate);
  console.log(formValues);
}

//- add the user input values to our object template

//-add event to html element

//the event handler has the following steps:
//- prevent default behaviour
// - create template for user's data
//- fill in the template with users data
//- send data (json) to the server --> while in development the server url uses local host, but when you finish deploying and your project is done, you need to replace the local host url with the server deployed url
