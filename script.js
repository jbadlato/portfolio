$(function() {
  $('#contact_form').submit(function(e) {
    e.preventDefault();
	$.ajax({
	    url: "https://formspree.io/jbadlato@vt.edu",
	    method: "POST",
	    data: { 
	    	'_subject': 'Portfolio Contact Form',
	    	name: $('#name').val(),
	    	'_replyto': $('#email').val(),
	    	message: $('#message').val()
	    },
	    dataType: "json"
	}).done(function(response) {
	    $('#success_message').show();
	    $('#contact_form').find("input[type=text], input[type=email], textarea").val("");
	});
  });
});