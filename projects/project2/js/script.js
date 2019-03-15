"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
 // Possible answer array

// let answers =[
//   "one",
//   "two",
//   "three",
//   "four",
//   "five",
//   "six",
//   "seven",
//   "eight",
//   "nine",
//   "ten"
// ]
//
//
//
// let currentAnswer ='';

$(document).ready(function() {

  if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call
    var commands = {
      'say hello (to my little) friend': greeting

    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
  }

  var greeting = function() {
    $('#greeting').text('Hello!');
  }
}
