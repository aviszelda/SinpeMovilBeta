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

function sendSMS() {
	console.log("botón presionado");
}