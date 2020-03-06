$(document).ready(function(){
	var element = $('meta[name="active-menu"]').attr('content');
	$('#' + element).addClass('active');
});

function overlay(el){
    el.classList.add('cardhover');
    el.style.opacity = '.5';
}


function nooverlay(el){
    el.classList.remove('cardhover');
    el.style.opacity = '0';
}

function loadAbout(){
    
}