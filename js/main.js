$(document).ready(function() {

    // display greeting
    var today = new Date();

	// get copyright year
	$('#year').html(today.getFullYear());

	$('#nav-toggle').on('click', function(ev) {
		$(this).toggleClass('active');
        $('#menu').toggleClass('active');
        $( "#search" ).focus();
    	ev.preventDefault();
    	        $('html, body').stop().animate({
            'scrollTop': $('#recommendation').offset().top
        }, 1000, 'swing');
	});
});