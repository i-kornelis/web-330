/*
============================================
; Title: Exercise 3.2
; Author: Izabella Kornelis
; Date: 2 March 2020
; Modified By: Izabella Kornelis
; Description: Demonstrates how to build a factory pattern in JavaScript.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../kornelis-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Exercise 3.2"));
// new line
console.log('\n');

// program start
function Postgres(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "s3cret";
  this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
  this.username = properties.username || "ca-admin";
  this.password = properties.password || "ca-s3cret";
  this.server = properties.server || "localhost:8000";
  this.version = properties.version || 5.7;
}

// Oracle database
function Oracle(properties){
  this.username = properties.username || "or-admin";
  this.password = properties.password || "cle-pass";
  this.server = properties.server || "localhost:5454";
  this.version = properties.version || 2.1;
};

// Informix database
function Informix(properties){
  this.username = properties.username || "info-admin";
  this.password = properties.password || "rmix-passw";
  this.server = properties.server || "localhost:3030";
}

// database factory
function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
  if (properties.databaseType === "Postgres") {
    this.databaseClass = Postgres;

  }

  if (properties.databaseType === "MySql") {
    this.databaseClass = MySql;
  }

  if (properties.databaseType === "Oracle") {
    this.databaseClass = Oracle;
  }

  if (properties.databaseType === "Informix") {
    this.databaseClass = Informix;
  }

  return new this.databaseClass(properties);
};

// create Database factory objects
var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
  databaseType: "Postgres",
  username: "admin",
  password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
  databaseType: "MySQL",
  username: "default",
  password: "password"
});

var oracleFactory = new DatabaseFactory();
var oracle = postgresFactory.createDatabase({
  databaseType: "Oracle",
  username: "myadmin",
  password: "thisisaSecret"
});

var informixFactory = new DatabaseFactory();
var informix = mySqlFactory.createDatabase({
  databaseType: "Informix",
  username: "user",
  password: "passcode"
});

// output
console.log(oracle);
console.log(informix);

// end program

