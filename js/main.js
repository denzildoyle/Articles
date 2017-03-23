$(document).ready(function() {

    // display greeting
    var today = new Date();

	// get copyright year
	$('#year').html(today.getFullYear());

	$('#nav-toggle').on('click', function(ev) {
        $(this).toggleClass('active');
        $('#menu').toggleClass('active');
        $( "#search" ).focus();
        $('body').toggleClass('no-overflow');
	});
});