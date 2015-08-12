// popup window
function windowPopup(url, width, height) {
	var left = (screen.width / 2) - (width / 2),
			top = (screen.height / 2) - (height / 2);

	window.open(url, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left);
}

$(function() {
	var curUrl = encodeURI( window.location.protocol + "//" + window.location.host + window.location.pathname );

	$(".social-btn").on("click", function(e) {
		var $this = $(this);
		var shareUrl = '';

		if( $this.data('site') == 'twitter' ) {
			shareUrl = "https://twitter.com/intent/tweet/?url="+curUrl;
		} else if( $this.data('site') == 'facebook' ) {
			shareUrl = "https://www.facebook.com/sharer/sharer.php?u="+curUrl;
		}

		windowPopup( shareUrl, 600, 300 );

		return false;
	});
});
