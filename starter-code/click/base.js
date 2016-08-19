console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $('span').on("click", function (event) {
    text = $(this).text();
    $('body').append('<li>' + text + '</li>');
  });

});
