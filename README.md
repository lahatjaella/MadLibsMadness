# Mad Libs Generator

Welcome to the **Mad Libs Generator** project! This web-based application allows users to create their own fun Mad Libs by filling out a form with different words and phrases. Upon submitting the form, a personalized Mad Lib story is generated and displayed on the page. This project is built using **HTML**, **CSS**, and **JavaScript**.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [How It Works](#how-it-works)
- [Conclusion](#conclusion)

## Introduction

The Mad Libs Generator is an interactive application where users fill out a form with various words like adjectives, nouns, and names. When they click the "Generate" button, a humorous letter or story is created using their inputs. It's a fun way to explore creative word combinations in a classic Mad Libs format.

## Features

- **Form Input Validation:** The form ensures that values are entered before generating the Mad Lib. If a form field is empty, a placeholder value is used instead.
- **Live Story Generation:** Once the user clicks the "Generate" button, a custom story is generated and displayed directly on the page.
- **Dynamic Styling:** CSS classes are dynamically added to the page, enhancing the visual experience after the story is generated.

## Technologies Used

- **HTML5**: Structure of the webpage and form elements.
- **CSS3**: Styling the page, including dynamic class changes for enhanced visuals.
- **JavaScript**: Handles user input, processes the form values, and generates the final Mad Lib story.

## How It Works

### JavaScript Functions

#### `formValue(id)`

This function takes the `id` of a form element and returns the value entered by the user. If the form element with the specified `id` is not found or is empty, it returns a placeholder or error message. Here’s how it works:

```js
function formValue(id) {
  let formElement = document.getElementById(id);
  if (formElement === null) {
    return `[${id} NOT FOUND]`;
  }
  if (formElement.value.trim() === "") {
    return `[${formElement.placeholder}]`;
  }
  return document.getElementById(id).value;
}
```

- **Parameter:** `id` - The `id` attribute of the form element to retrieve its value.
- **Returns:** The value entered by the user or the placeholder text if the form field is empty.

#### `addClassToElement(id, className)`

This function adds a CSS class to an HTML element, allowing for dynamic styling once the Mad Lib is generated.

```js
function addClassToElement(id, className) {
  let element = document.getElementById(id);
  element.classList.add(className);
}
```

#### `generate()`

The core function that retrieves the form values, generates the Mad Lib story, and updates the page with the result.

```js
function generate() {
  let relative = formValue("relative");
  let adjective1 = formValue("adjective-1");
  let adjective2 = formValue("adjective-2");
  let adjective3 = formValue("adjective-3");
  let famousPerson = formValue("famous-person");
  let noun = formValue("noun");
  let dessert = formValue("dessert");
  let petName = formValue("pet-name");

  let madLib = `
    Dear ${relative}
    <br><br>
    I have been having a really ${adjective1} time at camp. The counselour is ${adjective2} and the food is ${adjective3}. I met ${famousPerson} and we quickly became ${noun}. Talk soon!
    <br><br>
    Your ${dessert},
    <br>
    ${petName}
  `;

  document.getElementById("output").innerHTML = madLib;
  addClassToElement("container", "generated");
}
```

- **Steps in `generate()`**:
  1. Retrieve the form values using the `formValue()` function.
  2. Construct a custom Mad Lib using template literals.
  3. Output the generated story to the webpage.
  4. Dynamically add a CSS class to the container for styling.

## Conclusion

The **Mad Libs Generator** is a fun, interactive project that demonstrates how JavaScript can be used to dynamically update content on a webpage based on user input. It showcases basic form handling, DOM manipulation, and dynamic styling techniques.
