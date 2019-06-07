$(document).ready(function(){
	
	loadUser();
	function loadUser() {
		$.get( "js/work.json", function( data ) {
			var template = $('#template').html();
			Mustache.parse(template);   // optional, speeds up future uses
			var rendered = Mustache.render(template, data);
			$('#projects-target').html(rendered);
		}, "json" );
	}

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
	$(".infinite-toggle").on('mouseenter', function(){
		$(this).children().removeClass("animated");
	}).on('mouseleave', function(){
		$(this).children().addClass("animated");
	})

	//Toggle Nav on mobile
	$("#toggleNav").on('click', (ev) => {
		ev.preventDefault();
		$('nav').toggleClass("active");
	})
	$('nav ul a').on('click', function(){
		$('nav, nav a').removeClass("active");
		$(this).addClass("active");
	})

	// When the user scrolls down 50px from the top of the document, resize the header's font size
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
		let sections = [
			{	'id' : '#nav-home', 'position' : -50 	},
			{	'id' : '#nav-work', 'position' : document.getElementById("work").offsetTop - 200 	},
			{	'id' : '#nav-cont', 'position' : document.getElementById("contact").offsetTop -200 	}
		]
		
		$('nav, nav a').removeClass("active");
		for (let i = sections.length; i > 0; i--) {
			let section = sections[i-1];
			if (document.body.scrollTop > section.position || document.documentElement.scrollTop > section.position) {
				$(section.id).addClass("active");
				break;
			}
		}
		/* if (document.body.scrollTop > positionContact || document.documentElement.scrollTop > positionContact) {
			$('#nav-cont').addClass("active");
		} else if (document.body.scrollTop > positionWork || document.documentElement.scrollTop > positionWork) {
			$('#nav-work').addClass("active");
		} else if (document.body.scrollTop > positionHome || document.documentElement.scrollTop > positionHome) {
			$('#nav-home').addClass("active");
		} */
	}
});