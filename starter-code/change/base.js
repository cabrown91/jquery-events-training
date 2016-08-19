console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );


});

var input1 = $('#left').val();
var input2 = $('#right').val();
var field1 = parseInt(input1);
var field2 = parseInt(input2);
var total = field1 + field2;
var displayTotal = $('#total').val(total);
