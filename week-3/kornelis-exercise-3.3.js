/*
============================================
; Title: Exercise 3.3
; Author: Izabella Kornelis
; Date: 3 March 2020
; Modified By: Izabella Kornelis
; Description: Demonstrates how to build a Singleton pattern in JavaScript.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../kornelis-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Exercise 3.3"));
// new line
console.log('\n');

// program start

var DatabaseSingleton = (function() {
  var instance;
  function createInstance() {
    var postgresDatabase = new Object("Database instance initialized!");
    return postgresDatabase;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

function DatabaseSingletonTest() {
  var oracle = DatabaseSingleton.getInstance();
  var postgres = DatabaseSingleton.getInstance();

  console.log("Same database instance? ", oracle === postgres);
};

DatabaseSingletonTest();



// end program
