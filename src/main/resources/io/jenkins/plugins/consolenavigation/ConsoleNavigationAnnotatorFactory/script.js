(function () {

	Behaviour.specify('head', 'headlibs', 0,
		function (e) {
			e.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">' +
				'<link href="https://fonts.googleapis.com/css?family=Merriweather:400,900,900i" rel="stylesheet">')
		}
	);

	Behaviour.specify('body', 'buttoninserts', 0,
		function (e) {
			e.insertAdjacentHTML('beforeend', '<a class="back-to-top"></a>')
			e.insertAdjacentHTML('beforeend', '<a class="scroll-to-bottom"></a>')

			jQuery('.back-to-top').hide();

			jQuery(function () {
				jQuery(window).scroll(function () {
					if (jQuery(this).scrollTop() > 100) {
						jQuery('.back-to-top').fadeIn();
					} else {
						jQuery('.back-to-top').fadeOut();
					}

					if (jQuery(this).scrollTop() + jQuery(this).height() === jQuery(document).height()) {
						jQuery('.scroll-to-bottom').fadeOut();
					} else {
						jQuery('.scroll-to-bottom').fadeIn();
					}
				});

				jQuery(document).bind('keypress', function (event) {
					// press alt + 0
					console.log('key pressed: ' + event.which);
					if (event.which === 8800 && event.altKey) {
						scrollToTop();
					} else if (event.which === 8364 && event.altKey) {
						scrollToBottom();
					} else if (event.which === 8776 && event.altKey) {
						scrollToError();
					}
				});

				jQuery('.back-to-top').click(function () {
					scrollToTop();
					return false;
				});

				jQuery('.scroll-to-bottom').click(function () {
					scrollToBottom();
					return false;
				});

				function scrollToTop() {
					scrollTo(0);
				}

				function scrollToBottom() {
					scrollTo(jQuery(document).height());
				}

				function scrollTo(position) {
					jQuery('body,html').animate({
						scrollTop: position
					}, 400);
				}

				var positions = [];

				function scrollToError() {
					var consoleOutput = jQuery('.console-output');
					var text = consoleOutput.html();
					var newText = text.replace(/ERROR/g, '<span class="get-position-of-it"></span>');
					consoleOutput.html(newText); //Set wrapper
					var foundErrorElements = jQuery(".get-position-of-it");
					if (foundErrorElements.length > 1) {
						for (var i = 0; i < foundErrorElements.length; i++) {
							var elem = foundErrorElements[i];
							var position = elem.offsetTop;
							if (!positions.includes(position)) {
								positions.push(position);
							}
						}
					}

					consoleOutput.html(text); //Place back

					if (positions.length >= 1) {
						scrollTo(positions[0]);
						positions.pop();
					}
				}
			});
		}
	);
})();