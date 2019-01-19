

window.onscroll = function() {stickbar()}
var nav = document.getElementById("navbar");
var sticky = nav.offsetTop;

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
