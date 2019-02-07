"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/


$( function() {
   var handle = $( "#custom-handle" );
   $( "#slider" ).slider({
     create: function() {
       handle.text( $( this ).slider( "value" ) );
     },
     slide: function( event, ui ) {
       handle.text( ui.value );

       if(ui.value > 80){

         $(this).slider( "disable" );
       }
       else {

         $(this).slider( "enable" );

       }
     }


   });
 } );


 $('body').css('cursor', 'none');
