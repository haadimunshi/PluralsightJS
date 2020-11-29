// CREATING AND INITIALIZING ARRAYS

// OPTION 1:

let values = [];         /* This create an array, but does not initialize it */
let values = [1, 2, 3];  /* This creates AND initializes the array since it already has elements in it */

// OPTION 2:

let values = Array.of(1, 2, 3);

console.log(typeof(values));        /* Will return 'object' because values is an array, and arrays are objects in js */
console.log(Array.isArray(values));     /* Will return a boolean... true in this case, since values is indeed an array */

// SOME COMMON ARRAY MANIPULATION METHODS

const values = ['a', 'b', 'c'];

values.push('d');                   /* #push is just like ruby... adds the given element(s) to the end of the array */

const last = values.pop();          /* #pop is just like ruby... gives us the last element of the array and removes it from the array */

const first = values.shift();       /* #shift is just like ruby... gives us the first element of the array and removes that element from the array */

values.unshift('a');                /* #unshift is just like ruby... adds the given element(s) to the front of the array */

const newValues = values.slice(1, 2);   /* #slice takes two numbers as arguments: a starting index and an ending index. It returns a new array with elements contained from the starting index to the ending index, EXCLUDING the element found at the ending index. Does NOT change the original array */

values.splice(1, 1);            /* #splice takes two numbers as arguments: an index of an element we want to delete and the number of items we want to delete. It removes the element(s) specified by these args from the array */
values.splice(1, 0, 'foo');     /* #splice can also take 3 elements as args: an index, a quantity of elements, AND a value we want to insert. It then inserts the value specified by the third argument IN FRONT OF the element at the index specified by the first arg */

// ARRAY SEARCHING AND LOOPING

const values = ['a', 'b', 'c'];

values.indexOf('c');        /* #indexOf returns the index of the element specified in the given argument. SEARCHING FOR AN ELEMENT THAT DOES NOT EXIST WILL RETURN -1, NOT UNDEFINED */

const set = values.filter(function(item) {      /* #filter takes a function as an arg. In this case, we are using it to return a new arr with any elements alphabetically greater than 'b'. It will loop through the arr 1 element at a time to do this */
    return item > 'b';
});

const values = ['a', 'bbb', 'c'];

const found = values.find(function(item) {      /* #find takes a function as an arg. In this case, we are using it to return a new arr that contains all elements from the original arr that have a length greater than 1. It will loop through the arr 1 element at a time to do this */
    return item.length > 1;
});

const values = ['a', 'b', 'c'];

values.forEach(function(item) {             /* #foreach takes a function as an arg. It then loops through the arr 1 ele at a time and performs the fn on the ele. */
    console.log(item);
});

// USING ARRAYS IN THE DOM

const containers = document.getElementsByClassName('container');    /* returns an HTMLCollection object (which behaves very similarly to an arr) that contains all the HTML elements from the DOM with a class of 'container' (ie. all the bootstrap containers on the webpage) */
containers[2].classList.add('d-none');          /* takes the container found at index 2 from the HTMLCollection we gathered in the above line, accesses its class list, and adds a 'd-none' atribute, which hides the HTML element on the webpage */

// NOTES:
// Indices work the same as ruby, as does syntax for accessing array elements using suare brackets and indices
// Also like ruby: you can re-assign the value for an element in an array using indices (ie. myarray[0] = 'new_val' will change the first element in myarray to 'new_val')