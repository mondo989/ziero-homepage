
// Allows for page easing
$('.page-scroll').bind('click', function(event) {
  var $anchor = $(this);
  $('html, body').stop().animate({
    scrollTop: $($anchor.attr('href')).offset().top
  }, 1800, 'easeInOutExpo');
  event.preventDefault();
});



// Waypoints
$('#wellness-trigger').waypoint( function(){
  document.getElementById("wellness-copy").classList.add("active");
  document.getElementById("wellness-row").classList.add("active");
});

$('#employee-trigger').waypoint( function(){
  document.getElementById("employee-row").classList.add("active");
});


$('#pricing').waypoint( function(){
  document.getElementById("nonprofit-modal").classList.add("active");
});


$('#nonprofit-trigger').waypoint( function(){
  document.getElementById("nonprofit-modal").classList.add("active");
});
