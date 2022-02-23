window.onload= function(){
	$('#onload').fadeOut();
	$('body').removeClass('hidden')
}

function mostrarInfo(){
	document.getElementById('info-text').style.display = 'grid';
}
function cerrarInfo(){
	document.getElementById('info-text').style.display = 'none';
}

function mostrarIncluye(){
	document.getElementById('incluye-text').style.display = 'grid';
}
function cerrarIncluye(){
	document.getElementById('incluye-text').style.display = 'none';
}

function mostrarPyn(){
	document.getElementById('pyn-text').style.display = 'grid';
}
function cerrarPyn(){
	document.getElementById('pyn-text').style.display = 'none';
}