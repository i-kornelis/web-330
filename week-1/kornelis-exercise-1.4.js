/*
============================================
; Title: Exercise 1.4
; Author: Izabella Kornelis
; Date: 19 February 2020
; Modified By: Izabella Kornelis
; Description: A simple JavaScript program working with interfaces.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../kornelis-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Exercise 1.3"));
// new line
console.log('\n');

// program start

function Car(model){
  this.model = model;
}

Car.prototype.start = function () {
  console.log("Car added to the racetrack!")
};

function Truck(model, year){
  this.model = model;
  this.year = year;
}

Truck.prototype.start = function () {
  console.log("Truck added to the racetrack!")
};

function Jeep(model, year, color){
  this.model = model;
  this.year = year;
  this.color = color;
}

Jeep.prototype.start = function () {
  console.log("Jeep added to the racetrack!")
};

var racetrack = [];

function driveIt(vehicle) {
  vehicle.start();

  racetrack.push(vehicle);
}

// variable declaration
var civic = new Car("Civic LX");

var ranger = new Truck("Ranger", "2020")

var wrangler = new Jeep("Wrangler Sport","2018", "Firecracker Red" )

driveIt(civic);
driveIt(ranger);
driveIt(wrangler);

console.log('\n-- The following vehicles have been added to the racetrack --')

for (var x = 0; x < racetrack.length; x++){
  console.log(racetrack[x].constructor.name + ": " + racetrack[x].model)
};
// end program
