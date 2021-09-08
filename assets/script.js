$(document).ready(function(){
	function setCookie(cname, cvalue, exdays) {
		const d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		let expires = "expires="+ d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	function getCookie(cname) {
		let name = cname + "=";
		let decodedCookie = decodeURIComponent(document.cookie);
		let ca = decodedCookie.split(';');
		for (let i = 0; i <ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

	$('span#year-copyright').prepend(new Date().getFullYear()+' '+$('.brand-logo')[0].innerText);

	$('.fixed-action-btn').floatingActionButton();

	$('.sidenav').sidenav();

	Fancybox.bind("[data-fancybox]", {
		Image: {
			zoom: true,
		}
	})
	if ($('.fixed-action-btn').css('display') !== 'none') {
		var tour_guide = getCookie('feature_discovery');
		$('.tap-target').tapTarget({
			onOpen: function() {
				if (tour_guide.length < 1) {
					setCookie('feature_discovery', 'shown', 1);
				}
			}
		});

		if (tour_guide.length < 1) {
			$('.tap-target').tapTarget('open');
		}
	}
});

new Carousel(document.querySelector('.carousel-fancy'));