/*
============================================
; Title: Discussion 1.1
; Author: Addy Osamani
; Date: 19 February 2020
; Modified By: Izabella Kornelis
; Description: A simple JavaScript program showing constructors with prototypes.
;===========================================
*/

//program start

function Cat( name, age, color) {
	this.name = name;
	this.age = age;
	this.color = color;
}

Cat.prototype.getBio = function () {
return this.name + " is a " + this.age + " year old cat, who is " + this.color + "."
};

var billy =  new Cat("Billy", 2, "orange and white");
var cheaka = new Cat("Cheaka", 10, "black");

console.log( billy.getBio() );
console.log( cheaka.getBio() );

// end program
