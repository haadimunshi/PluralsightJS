// (went over global scope vs. function scope)

// a common design pattern in js apps that keeps globally scoped variables organized is to define a const called 'app' and store all your global variables within it as key-val pairs


// HOISTING

// Functions in JS get hoisted. In other words, you can define a funtion AFTER calling the function, and you won't get an error... the function will execute even though the code is 'in the wrong order'
// This is bc JS gets executed after TWO passes. The first pass just looks at the code, the second pass is where actual execution occurs. So in the case of function hoisting, after the first pass, the function declaration gets hoisted above where it is called... almost as though the code is being re-organized for you.

// STRICT MODE

// Older versions of JS did not require proper variable declaration with let, const, or var. These undeclared variables would be defined on the window object by default.
// Fix: place the string 'use strict'; at the top of any js file to force proper variable declaration by putting the file into 'strict mode.'

