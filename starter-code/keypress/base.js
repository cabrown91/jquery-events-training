console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $(window).on("keypress", function(event) {
    console.log("keypressed!");
  });

});


$(window).on("keypress", function(event) {
  console.log("keypressed!");
var end, start, count;

count = 0;
start = new Date();
for (var i = 0; i <= 60; i++) {
count = count + 1;
}
end = new Date();

console.log((end.getTime() - start.getTime()) + 'sec');
});
