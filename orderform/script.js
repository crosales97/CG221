$( function() {
    $( "#draggable" ).draggable();
  } );

  $( function() {
     $( "#dialog" ).dialog({
  position: { my: "left", at: "left bottom", of: "#nugget" }
});
   } );

$( function() {
   $( "#accordion" ).accordion({
     collapsible: true
   });
 } );

 $( function() {
   $( "input" ).checkboxradio();
 } );

 function submit() {
    document.getElementById("demo").innerHTML = "Submitted! Your Order is on its way!";
}
