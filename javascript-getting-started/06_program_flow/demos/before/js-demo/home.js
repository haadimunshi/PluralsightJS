// let message = 'help';
// showMessage(message);


// if (message.length > 1) {
//     console.log('yes');
// };

// if (1 !== '2') {
//     console.log('yes');
// };

// var somenumber = (1.1 + 1.3);
// somenumber = somenumber.toFixed(2);
// // console.log(somenumber);
// if (somenumber === '2.40') {
//     console.log(somenumber);
// };


// var somestring = '123.8276';
// somestring = parseFloat(somestring);
// console.log(typeof somestring);

// var somestring = '123.8276';
// somestring = +(somestring);
// console.log(typeof somestring);

// var somestring = parseInt('10.3287');
// console.log(typeof somestring);


// let state = 'NY',
//     taxPercent;

// if (state === 'FL') {
//     taxPercent = 7;
// }
// else if (state === 'NY') {
//     taxPercent = 8;
// };

// console.log(taxPercent);

// let price = 10;
// let message = (price > 10) ? 'expensive' : 'cheap';
// showMessage(message);

// let price = 9;
// (price < 10) ? showMessage('cheap') : showMessage('expensive');

// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }

// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i ++;
// }

// let count = 1;
// do {
//     console.log(count);
//     count ++;
// } while (count < 5);





// NOTES:
// === is how we check for equivalence of value AND data type
// == is how we check for equivalence of value BUT IGNORES data type
// = is an assignment operator

// !== is how we check for non-equivalence of value AND data type
// != is how we check for non-equivalence of value BUT IGNORES data type

// FALSY VALUES: false, 0, empty string, null, undefined, NaN
// TRUTHY VALUES: everything else

// JS is weird with floating point arithmetic... ex: 1.1 + 1.3 will equal like 2.4000004 or something
// One way to deal with this: +(1.1 + 1.3).toFixed(2) 
// (toFixed(num) will limit the number of decimal places to the specified num. However, it will also return a string. The '+' symbol is an easy way to convert this string returned by tofixed into a number. 
// + symbol is an easy way to convert any string to a number.
// parseFloat(string) converts a string to a floating point number.
// parseInt(string, radix?) converts a string to an integer.

// TERNARY OPERATOR FORMAT:
// (condition) ? true-statement : false-statement;

// BLOCK SCOPE FOR VARIABLES:
// ES6: If you declare a variable using let within a block, you cannot access that variable outside of the block (the variable is 'block scoped).
// ES5: HOWEVER, if you declare using var, you CAN access it outside the block (the variable is 'not block scoped').
// If you declare a contsant within a block, it CANNOT be accessed outside the block (constants are 'block scoped').

// FOR LOOP FORMAT:
// for (variable declaration; conditional; increment/decrement/other action) {
    // do whatever is on this line if the conditional is met (the loop will break once the conditional fails);
// }

// WHILE LOOP FORMAT:
// variable declaration;
// while (conditional) {
    // (do what's on this line if conditional is met);
    // (also whatever's on this line, etc etc);
    // an increment/decrement somewhere in here too so that the loop exits at a specified point;
// }

// DO...WHILE LOOP FORMAT:
// variable declaration;
// do {
    // (do whatever's on this line, next line, etc etc.);
    // an increment/decrement somewhere in here too so that the loop exits at a specified point based on the next line;
// } while (conditional);

// For loops and while loops appear to be the same functionally... while loops are just handy for more complex logic.
// Do...while loops guarantee that whatever's in the do block will be performed at least once, because the conditional for the loop doesn't execute until the end.
