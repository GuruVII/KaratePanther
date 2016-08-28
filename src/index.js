$(document).on('click',function(){
$('.collapse').collapse('hide');
}) //A sloppy workaround that hides the dropdown menu when no longer used.

$("#navbar").find("li").on("click", function(){
$("#navbar").find("li").removeClass("active");
$(this).addClass("active");
});// finds all children of the #navbar that are in a list, removes active class and adds it to the one you clicked on