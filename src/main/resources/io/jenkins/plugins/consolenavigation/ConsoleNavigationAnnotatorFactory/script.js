(function () {

	Behaviour.register({
		'head': function (e) {
			e.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">' +
				'<link href="https://fonts.googleapis.com/css?family=Merriweather:400,900,900i" rel="stylesheet">')
		}
	});

	Behaviour.register({
		'body': function (e) {
			e.insertAdjacentHTML('beforeend', '<a class="back-to-top"></a>')

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