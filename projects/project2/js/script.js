"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
 // Possible answer array

let answers =[
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten"
]


let currentAnswer ='';

$(document).ready(function() {

  // Anyyang verification
  if (annyang) {

    /// the player should say this phrase followed by the answer
    var command = {
      "I think there are * answer": handleUserSpeech,
    };



    /// giving anyand commands
    annyang.addCommands(command);

    //// Ayand start to listen
    annyang.start();

    // Choose a phrase for the user to say first
    currentAnswer = getNewPhrase();

    // Display the phrase the player must say
    $('#command').text('Say, "I think there are ' + currentAnswer + '."');
  }
});
