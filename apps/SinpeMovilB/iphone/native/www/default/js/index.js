
/* JavaScript content from js/index.js in folder common */
$(document).ready(function() {
	$('.button-collapse').sideNav({
		  menuWidth: 300, // Default is 240
		  edge: 'left', // Choose the horizontal origin
		  closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
		}
	);
});

var pageName;

function getPageName() {
	var path = window.location.pathname;
	var page = path.split("/").pop();
	console.log(page);
    return page;
}

switch (getPageName()) {

case "index.html":
	pageName = "BN SINPE Móvil";
    break;
case "pasar_dinero.html":
	pageName = "Pasar Dinero";
    break;
case "tipo_cambio.html":
	pageName = "Tipo de Cambio";
    break;
case "consultas.html":
	pageName = "Consultas";
    break;
case "contactos.html":
	pageName = "Contactos Favoritos";
}

document.getElementById("menu_title").innerHTML = pageName;

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function maxLengthCheck(object) {
  if (object.value.length > object.maxLength)
    object.value = object.value.slice(0, object.maxLength)
}