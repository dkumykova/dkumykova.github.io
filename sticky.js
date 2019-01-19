

window.onscroll = function() {stickbar()}
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

//function to make navbar stick as you scroll, adds sticky clas
//to navbar when you reach its scroll position; remove when
//leave sticky
function stickbar(){
	if (window.pageYOffset >= sticky) {
		nav.classList.add("sticky");
	} else {
		nav.classList.remove("sticky");
	}
}
