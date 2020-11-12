// EXAMPLE OF AN OBJECT AND SOME PROPERTIES:

// let person = {             /* Variable we will use to refer to the object */
//     name: "John",          /* Key value pairs. property: value */
//     age: 32,
//     partTime: false,
//     showInfo: function() {                               /* A property can also be a function (note: functions are called methods in js when they are defined on an object) */
//         showMessage(this.name + 'is' + this.age);        /* We have to use the 'this' keyword to refer to the current object in order to get the object's name for this example... note: this.age gets us 44, not 32, bc we reassign person.age to 44 a few lines below this) */
//     }
// };

// person.age = 33;            /* Modify properties you've already defined like this */
// person['age'] = 44;         /* Or like this */
// person.country = 'USA';     /* Define new properties like this */

// console.log(person.age);

// PASSING NON-OBJECT DATA TYPES TO A FUNCTION

// let message = 'Hello';

// function changeMessage(message) {       /* This function changes the message from 'Hello' to 'Hi!' */
//     message = 'Hi!';
// }

// changeMessage(message)                  /* When we call the above function on this line, it will return the changed message: 'Hi!' */

// showMessage(message)                    /* BUT... this line will return 'Hello' because the changeMessage function DID NOT ACTUALLY CHANGE THE VALUE STORED AT VARIABLE 'MESSAGE'... it just changed the value of the argument we passed in ('Hello'), not the actual value of the variable itself. */

// // PASSING OBJECTS TO A FUNCTION

// let person = {
//     name: 'John',
//     age: 32,
//     partTime: false
// };

// function incrementAge(person) {
//     person.age++;
// }

// incrementAge(person);

// showMessage(person.age);


// So unlike the example above where we passed a non-object data type, when we DO pass an object to a function, we CAN change the actual value of a property of the object.
// So when we call showMessage(person.age) we WILL get the incremented age of 33, NOT 32.

// JS has some pretty interesting built-in objects and pre-defined methods on these objects... reference MDN docs to see them


// DOM = Document Object Model... 'programming the DOM' = modifying the web page, getting events from user triggers on a webpage, etc.
// 'DOM' is basically just a way to refer to the web of objects that make up a webpage.


// 'document' is a JS object we used in document.getElementById (from functions defined in utils.js). 'document' is just a reference to the DOM
// '.getElementById' is a standard JS selector method that can be called on the DOM object ('document') to return another object of type HTMLElement
// '.textContent' is a property of the DOM object (of type HTMLElemenet) we selected with the above selector method. in showMessage, we are changing this DOM object to whatever argument we pass in to the 'message' parameter of the function.

// 'style' is a property of HTMLElement objects that we can use to overwrite CSS values
// Format to set a style: element.style.cssproperty = value. ex: element.style.color = "blue";
// For hyphenated CSS properties like font-weight, we just use camel case (so fontWeight)


// DETECTING BUTTON CLICKS

// Started by adding id="see-review" to the button element on index.html

// const button = document.getElementById('see-review');

// button.addEventListener('click', function() {               /* addEventListener is a method we can call on a selected HTML element. The first parameter it takes is the event type, the second is a function that we want executed when that event occurs on the HTML element */
//     console.log('click');
// });

// You can use event listeners (like the one above) to act as a toggle for showing and hiding DOM elements
// Started by adding a div element to index.html with id="review" and class="container d-none" that contains an h4 and a p element. The class="container d-none" is a bootstrap container with a bootstrap class of "display:none" so that it is hidden by default. This whole div element was added below the button referenced in the eventlistener above.
// So goal is to use the button click as a toggle to display the div element.
// With all this in mind, modify the code above:


const button = document.getElementById('see-review');           

button.addEventListener('click', function() {                   

    const review = document.getElementById('review');           /* create a contsant called 'review' that references the div we created */

    if (review.classList.contains('d-none')) {
        review.classList.remove('d-none');                      /* classList is an HTMLElement method that accesses all the classes defined on the element. .remove is a method we can call on that class list to remove a specified class. In this case, removing 'd-none' should make the div element visible */
        button.textContent = 'CLOSE REVIEW';
    }
    else {
        review.classList.add('d-none');
        button.textContent = 'SEE REVIEW';
    }
                              

});