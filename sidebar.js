
$(document).ready(function(){
  // var current_time = new Date();

  // Toggle Sidebar
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    console.log('clicked');
  });


});