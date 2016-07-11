
// Allows for page easing
$('.page-scroll').bind('click', function(event) {
  var $anchor = $(this);
  $('html, body').stop().animate({
    scrollTop: $($anchor.attr('href')).offset().top
  }, 1800, 'easeInOutExpo');
  event.preventDefault();
});

var openModal = function() {
  document.querySelector("#signup-modal").classList.toggle("active");
  document.querySelector("#modal-overlay").classList.toggle("active");
}



// Waypoints
// $('#wellness-trigger').waypoint( function(){
//   document.getElementById("wellness-copy").classList.add("active");
//   document.getElementById("wellness-row").classList.add("active");
// });

$('#employee-trigger').waypoint( function(){
  document.getElementById("employee-row").classList.add("active");
});


$('#pricing').waypoint( function(){
  document.getElementById("nonprofit-modal").classList.add("active");
});


$('#nonprofit-trigger').waypoint( function(){
  document.getElementById("nonprofit-modal").classList.add("active");
});






$(document).ready(function() {
  $('#pricingForm').on('submit', function(e) {
      e.preventDefault();

      var email = $('#email').val();

      $.ajax({
          url:'https://formspree.io/mzschoch@zierofinance.com',
          method:'POST',
          data:{
              _replyto:email,
               email:email,
              _subject:'Test form Submission',
          },
          dataType:"json",
          success:function() {
              console.log('success');
              $('#signup-modal h2').html("Thank You, click the link below to download your file")
              $('#pricingForm').hide();
              $('#plan-info').show();
          }
      });
  });
});
