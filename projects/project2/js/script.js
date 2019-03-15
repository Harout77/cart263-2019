


let voice = 'US English Male';




let voiceParameters = {
  pitch: 1,
  rate: 1,
  volume: 2
}


// $(document).ready(function () {
//
//   // Make sure we can run annyang (Chrome-dependent), otherwise no point
//   // if (annyang) {
//   //   $(document).on('click',start);
//   // }
//
//
// //
// // responsiveVoice.speak("hello world", "UK English Male", {onstart: StartCallback, onend: EndCallback});
//
//
// });


$(document).ready(function() {


$(document).on('click',function () {

// question sentence goes here
   question("HELLO WORLD");

 });
});

//// function for the question
function question (text) {
  responsiveVoice.speak(text,voice,voiceParameters);
}
