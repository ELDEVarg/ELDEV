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

function mostrarCliente(){
	document.getElementById('cliente1').style.display = 'grid';
	document.getElementById('cliente2').style.display = 'grid';
	document.getElementById('cerrarCliente').style.display = 'grid';
}
function cerrarCliente(){
	document.getElementById('cliente1').style.display = 'none';
	document.getElementById('cliente2').style.display = 'none';
	document.getElementById('cerrarCliente').style.display = 'none';
}