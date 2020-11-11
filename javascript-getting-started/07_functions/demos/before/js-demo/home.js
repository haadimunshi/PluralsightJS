// function logMessage() {
//     console.log('Here is a message');
// }

// logMessage();
// logMessage();



// 'FUNCTION DECLARATION' or 'FUNCTION STATEMENT':
// function showMessage() {
//     (do this stuff);
// }

// showMessage()



// 'FUNCTION EXPRESSION':
// let fn = function() {
//     (do this stuff);
// }

// // fn();

// A function expression is just when you assign a function to a variable... then you call the function using that variable.

// RECALL: what you put in the parenthesis when declaring a function is/are called parameters... the values passed when you call the function are called arguments. So same as ruby

// Unlike ruby, js does NOT have implicit returns

// Functions have their own scope. If you declare a variable within a function, that variable is NOT accessible outside of it. BUT if you declare a variable outside of a function (in the 'global scope'), it is available within any functions.


// EXAMPLE OF NESTED FUNCTIONS AND HOW THEY WORK W SCOPE:
// let key = 42;                          /* 'key' as defined here is a globally scoped variable */

// function getSecretCode(value) {         /* this is the outermost function which takes in a parameter that we are referring to as 'value' */
    
//     let keyGenerator = function() {     /* a nested function expression to which we are assiging the variable 'keyGenerator' */
//         let key = 12;                   /* 'key' as deined here is functionally scoped to 'keyGenerator'... so within the keyGenerator function expression, key=12, not 42 */
//         console.log('in keyGenerator: ', key);          /* this will log out 'in keyGenerator: 12' */
//         return key;                                     /* return 12 */
//     }

//     let code = value * keyGenerator();                  /* nested function expression to which we are assigning variable 'code' */
//     console.log('in getSecretCode: ', key);             /* will log out 'in getSecretCode: 42' because key is now equal to 42 since it was only assigned the value '12' for the keyGenerator function */
//     return code;                                        /* will return whatever argument we pass in to the outermost funtion multiplied by the return value of keyGenerator... takeaway is that this nested function has access to any nested functions above it as well as arguments passed into outermost function */

// }

// let secretCode = getSecretCode(2);      /* assign variable to the return value of getSecretCode when '2' is passed in as the argument for the parameter referred to as 'value' */
// showMessage(secretCode);                /* final function call to showMessage from utils.js to render 'message' as whatever value we've ended up with for secretCode. */


// At this point, when back to utils.js and added a function called changePercentOff which grabs the HTML element in index.html with id 'percent-off' and changes its text content.
// Takeaway: 
// utils.js is where we write functions that modify the webpage itself and define what will be changed, what it will be replaced with, etc. 
// home.js (this file) is where we write the logic for how we will determine what new information gets added to (or replaces content on) the webpage
// utils.js identifies which HTML elements its messing with through element ID's (or other identifying info, depends on which type of selector method we use)
// utils.js and home.js are both ran as scripts by index.html on the lines above the closing body tag.

changePercentOff(32);