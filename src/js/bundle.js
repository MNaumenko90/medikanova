//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/foundation-sites/dist/js/foundation.js
//= ../../bower_components/fullpage/jquery.fullPage.js


/*
 * Custom js
 */

 $(document).ready(function() {
 	$('#fullpage').fullpage({
 		responsiveWidth: 980,
 		responsiveHeight: 800,
		scrollingSpeed: 1000,
		fitToSection: false,
		// css3: true,
		lazyLoading: false,
		scrollBar: true,
		// anchors:['home', 'micross', 'safescraper', 'aplication', 'articles', 'contacts'],
 		});

 $('#menu a, .icon-up-open-big').click(function(e){
		e.preventDefault();
		var scroll_el = $(this).attr('href'); 
		if ($(scroll_el).length != 0) { 
		$('html, body').animate({ scrollTop: $(scroll_el).offset().top}, 800); 
		$('.hide-box').removeClass('open-menu');
		// $('#menu-wrap').removeClass('show');
		// $('#menu-container').removeClass('show');
	}
		return false; 
	});
 	// toggle menu 

$('header').find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});

$('.view').on('click', function(event) {
        event.preventDefault();
        $(this).parents().find('.more-articles').toggleClass('opened');
        if ($(this).text() == 'Показать еще') {
            $(this).text('Свернуть')
        } else {
            $(this).text('Показать еще')
        }
        
    });

});

 $(document).foundation();