window.onload= function(){
	$('#onload').fadeOut();
	$('body').removeClass('hidden')
}

function mostrarInfo(){
	document.getElementById('info-text').style.display = 'grid';
	document.getElementById('info-titulo').style.display = 'none';
}
function cerrarInfo(){
	document.getElementById('info-text').style.display = 'none';
	document.getElementById('info-titulo').style.display = 'grid';
}

function mostrarIncluye(){
	document.getElementById('incluye-text').style.display = 'grid';
	document.getElementById('incluye-titulo').style.display = 'none';
}
function cerrarIncluye(){
	document.getElementById('incluye-text').style.display = 'none';
	document.getElementById('incluye-titulo').style.display = 'grid';
}

function mostrarPyn(){
	document.getElementById('pyn-text').style.display = 'grid';
	document.getElementById('pyn-titulo').style.display = 'none';
}
function cerrarPyn(){
	document.getElementById('pyn-text').style.display = 'none';
	document.getElementById('pyn-titulo').style.display = 'grid';
}

function mostrarEj(){
	document.getElementById('ejemplo').style.display = 'grid';
	document.getElementById('ej-btn').style.display = 'none';
}
function cerrarEj(){
	document.getElementById('ejemplo').style.display = 'none';
	document.getElementById('ej-btn').style.display = 'grid';
}
