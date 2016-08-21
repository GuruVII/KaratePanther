$(document).on('click',function(){
$('.collapse').collapse('hide');
}) //A sloppy workaround that hides the dropdown menu when no longer used.

$("#navbar").find("li").on("click", function(){
$("#navbar").find("li").removeClass("active");
$(this).addClass("active");
});