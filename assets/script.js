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

	var show_promo = getCookie('show_promo');
	if (show_promo.length <= 1) {
		var promo_content = '';
		promo_content += '<h5>PROMO MINYAK KUDUS BELI 2 GRATIS 2</h5>';
		promo_content += '<p>Minyak Kudus harga Rp 80.000/botol.<br>Beli 2 gratis 2 botol!!<br>Cek selengkapnya di <a href="https://shopee.co.id/mpuhsembiringgurukinayan/4661759722?smtt=0.0.9">Shopee</a> atau kamu bisa chat langsung ke admin dari fitur yang sudah disediakan</p>';
		new Fancybox([{
			src: promo_content,
			type: 'html',
		}]);

		setCookie('show_promo', 'shown', 1);
	}
});

new Carousel(document.querySelector('.carousel-fancy'));