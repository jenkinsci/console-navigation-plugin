(function () {

	Behaviour.register({
		'body': function (e) {
			e.insertAdjacentHTML('beforeend', '<a href="#top" class="back-to-top">Nach oben</a>')

			jQuery('.back-to-top').hide();

			jQuery(function () {
				jQuery(window).scroll(function () {
					if (jQuery(this).scrollTop() > 100) {
						jQuery('.back-to-top').fadeIn();
					} else {
						jQuery('.back-to-top').fadeOut();
					}
				});

				jQuery('.back-to-top').click(function () {
					jQuery('body,html').animate({
						scrollTop: 0
					}, 400);
					return false;
				});
			});
		}
	});
})();