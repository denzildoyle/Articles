$(document).ready(function() {

    // display greeting
    var today = new Date();

	// get copyright year
	$('#year').html(today.getFullYear());

	$('#nav-toggle').on('click', function(e) {
        $(this).toggleClass('active');
        $('#menu').toggleClass('active');
        $('.mobile-nav').toggleClass('active');
        
        e.preventDefault();
            $('html, body').stop().animate({
            'scrollTop': $('#recommendation').offset().top
        }, 1000, 'swing');

        e.stopPropagation();
        window.scrollTo(0,0);
        
        $("#search").focus();
        $('body').toggleClass('no-overflow');
	});
});