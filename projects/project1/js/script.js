"use strict";

/*****************

SYSYPHUS TORMENT
Harout Kullukian
This is a template. You must fill in the title,
author, and this description to match your project!

******************/

/// create a slider with an amount display
$( function() {
   var handle = $( "#custom-handle" );
   $( "#slider" ).slider({
     create: function() {
       handle.text( $( this ).slider( "value" ) );
     },
     /// show the amount on the slider
     slide: function( event, ui ) {
       handle.text( ui.value );

//// disale the slider at a certain amount
       if(ui.value > 2){

         $(this).slider( "disable" );

  ///// DIALOGE BOX GOES HERE //////

       $( "#dialog" ).dialog({
         height: 50,
         // width: 50
       });
       $( "button" ).show();
       $( "a" ).show();


       }


       else {

         $(this).slider( "enable" );

       }
     }

   });
   ///// FOCUS THE GAME ////
   handle.focus();



 ///// LAZY WAY TO HIDE MY PROBLEMS
   $( "button" ).hide();
   $( "a" ).hide();



 } );

 ///// refreshPage /////
 function refreshPage(){
     window.location.reload();
 }

//// Audio /////

/// audio music
  
 //// END Audio /////
 //// /////



 $('body').css('cursor', 'none');
