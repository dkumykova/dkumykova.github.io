function drop() {
	document.getElementById("droplinks").classList.toggle("show");
}

//close if user clicks out of dropdown
window.onclick = function(event) {
	if(!event.target.matches('.dropbtn')){
		var dropdowns = document.getElementsByClassName("drop-content");
		var i;
		for(i = 0; i < dropdowns.length; i++){
		var openDrop = dropdowns[i];
		if (openDrop.classList.contains('show')){
			openDrop.classList.remove('show');
			}
		}
	}
}