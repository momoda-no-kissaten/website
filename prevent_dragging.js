images = document.getElementsByTagName('img');
for (var i = 0; i < images.length; i++) {
	images[i].ondragstart = function() {
		return false;
	};
}
