/*
============================================
; Title: Exercise 2.2
; Author: Izabella Kornelis
; Date: 24 February 2020
; Modified By: Izabella Kornelis
; Description: Demonstrates how to build prototypes in JavaScript.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../kornelis-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Exercise 2.2"));
// new line
console.log('\n');

// program start

// variable declaration

var person = {
  getAge : function () {
    return this.age;
  }
};

// create object
var robert = Object.create(person, {
  "age": {
    "value": "46"
  },
  "fullname": {
    "value": "Robert Schumann"
  }
});

robert.getAge();

console.log("The person's full name is " + robert.fullname);
console.log("The person's age is " + robert.age);



// end program
