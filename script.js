/* Given the 'id' attribute of a form element, this will return the value entered by the user into that form element. */
function formValue(id) {
  // declares the variable formElement and assigns "document.getElementbyId(id)" to it
  // "document" references the HTML page loaded into the browser
  // "getElementbyId(id)" returns the first element assigned to "id"
  // essentially the form element is assigned the element assigned to "id"
  let formElement = document.getElementById(id);
  
  // checks the condition that the form is null
  // returns variable id NOT FOUND if the form element is null
  if (formElement === null) {
    return `[${id} NOT FOUND]`;
  }

  // declares a variable value and assigns "formElement.value" to it
  // "formElement.value" returns the current value entered into the form element's input field
  let value = formElement.value;

	// checks the condition that the formElement.value is equal to an empty string 
  // .trim() removes whitespace from the value 
  // returns a placeholder in the form element if the form contains an empty string 
  if (formElement.value.trim() === "") {
    return `[${formElement.placeholder}]`;
  }

  // .value returns the current value of the form element
  // document.getElementById(id) retrieves the element from the HTML page with the specified "id"
  return document.getElementById(id).value;
}

/* Given the 'id' of an HTML element and a 'className', this will add that class name to the HTML element with the specified id. */
function addClassToElement(id, className) {
  let element = document.getElementById(id);
  element.classList.add(className);
}

/* The code here will be executed each time the Generate button is clicked. */
function generate() {

  //retrieve the form values
  let relative = formValue("relative");
  let adjective1 = formValue("adjective-1");
  let adjective2 = formValue("adjective-2");
  let adjective3 = formValue("adjective-3");
  let famousPerson = formValue("famous-person");
  let noun = formValue("noun");
  let dessert = formValue("dessert");
  let petName = formValue("pet-name");
  
  //insert form values into mad lib
  let madLib = `
    Dear ${relative}
    <br><br>
    I have been having a really ${adjective1} time at camp. The counselour is ${adjective2}  and the food is ${adjective3}. I met ${famousPerson} and we quickly became ${noun} . Talk soon!
    <br><br>
    Your ${dessert}, 
    <br>
    ${petName}
  `;

  console.log(madLib)
  
  //output mad lib to player 
  document.getElementById("output").innerHTML = madLib;
  addClassToElement("container", "generated");
}