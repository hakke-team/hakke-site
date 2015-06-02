$(document).ready(function() {
	$('a[href^="#"]').on('click',function(e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 800, 'easeOutQuint', function() {
      //window.location.hash = target;
    });
	});

  $('#contact .email').html('<a href="' + 'mail' + 'to:' + 'yo' + '@' + 'hakke.net' + '">' + 'yo' + '@' + 'hakke.net' + '</a>');
});
