/*
============================================
; Title: Exercise 1.3
; Author: Izabella Kornelis
; Date: 19 February 2020
; Modified By: Izabella Kornelis
; Description: A simple JavaScript program using a function to create a cell phone object.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../kornelis-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Exercise 1.3"));
// new line
console.log('\n');

//program start

function CellPhone(manufacturer, model, color, price) {

    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

// get price
    this.getPrice = function() {
        return this.price;
    };

// get model
    this.getModel = function() {
        return this.model;
    };

    this.getDetails = function() {
        return "Manufacturer: " + this.manufacturer + "\nModel: " + this.getModel() +
             "\nColor: " + this.color + "\nPrice: " + this.getPrice();

    };

}

var myPhone = new CellPhone("Google", "Pixel 4", "white", "600.00");

console.log ("-- DISPLAYING CELL PHONE DETAILS --")
console.log (myPhone.getDetails())
//end program