//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "26 feb 2024 14:30:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	