$(document).ready(function(){
	var element = $('meta[name="active-menu"]').attr('content');
	$('#' + element).addClass('active');
});

function overlay(el){
    console.log('hell??');
    var k = document.getElementsByClassName('card-img-overlay');
    console.log({k})
    k[0].style.display = 'block';
    // el.style.opacity = '.5';
}


function nooverlay(el){
    el.classList.remove('cardhover');
    el.style.opacity = '0';
}

function loadAbout(){
    
}