var elgenaracode = document.querySelector(".genaracode");
var elgenaracodeCloseButton = elgenaracode.querySelector(".genaracode__close-button");
var elgenaracodeDismissButton = elgenaracode.querySelector(".genaracode__dismiss-button");

setTimeout(function() {
	elgenaracode.classList.add("genaracode--open");
}, 1000);

var closegenaracode = function() {
	elgenaracode.classList.remove("genaracode--open");
};

if (elgenaracodeCloseButton) {
	elgenaracodeCloseButton.addEventListener("click", closegenaracode);
}

if (elgenaracodeDismissButton) {
	elgenaracodeDismissButton.addEventListener("click", closegenaracode);
}