
//// random zer image generator

$(function(){

let zergs =new Array ();
zergs[0] = "/assets/images/1.jpg";
zergs[1] = "/assets/images/10.jpg";
zergs[2] = "/assets/images/11.jpg";
zergs[3] = "/assets/images/25.jpg";
var size = zergs.length
var x = Math.floor(size*Math.random())

$('#zerg').attr('src',zergs[x]);
})





let voice = 'US English Male';




let voiceParameters = {
  pitch: 1,
  rate: 1,
  volume: 2
}





$(document).ready(function() {

// randomzerg();

/// Start the voice on click
$(document).on('click',function () {

// question sentence goes here
   question("how many pages does this zerg site contains ?");

 });
});

//// function for the question
function question (text) {
  responsiveVoice.speak(text,voice,voiceParameters);
}
// // function randomzerg(){
//   function imgRandom(imgArr) {
//         return zergs[Math.floor(Math.random() * zergs.length)];
//     }
//  console.log(imgRandom(img));
// }
