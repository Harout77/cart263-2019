"use strict";

/*****************

Title of Project
Author Name

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

       //   let d = $('<div><center>Sorry try again!</center></div>');
       //   $('body').append(d);
       //   d.dialog();

       $( "#dialog" ).dialog();
       $( "button" ).show();


       }


       else {

         $(this).slider( "enable" );

       }
     }

   });
   handle.focus();

   $( "button" ).hide();


 } );
 function refreshPage(){
     window.location.reload();
 } 

 $('body').css('cursor', 'none');
