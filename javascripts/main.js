window.fbAsyncInit = function() {
	FB.init({
	appId      : '1036345453139986',
	xfbml      : true,
	version    : 'v2.5'
});
		    
function getInfo() {
	FB.api('/me', 'GET', {fields: 'first_name,last_name,name,id'}, function(response) {
		document.getElementById('Name').innerHTML = "Hola" + response.name;
	});
}


function mapaLibros(){
	window.open('menu.html','_self',false);
}

function mapaBodas(){
	window.open('menu.html','_self',false);
}

function mapaPapeleria(){
	window.open('menu.html','_self',false);
}

function trofeos(){
	window.open('menu.html','_self',false);
}

function recomendacion(){
	window.open('menu.html','_self',false);
}

function conocer(){
	window.open('menu.html','_self',false);
}
