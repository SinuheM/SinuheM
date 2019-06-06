$(document).ready(function(){
	  
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});
		}
	});

	//Stop infinite animation on hover
	$(".infinite-toggle").on('mouseenter', () => {
		$(this).removeClass("animated");
	}).on('mouseleave', () => {
		$(this).addClass("animated");
	})

	//Toggle Nav on mobile
	$("#toggleNav").on('click', () => {
		$('nav').toggleClass("active");
	})
});