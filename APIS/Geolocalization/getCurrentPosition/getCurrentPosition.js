var options = {
	enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 0
}

function success(pos){
	var crd = pos.coords;

	console.log("Tu posición es: ");
	console.log("Latitud: " + crd.latitude);
	console.log("Longitud: " + crd.longitude);
	console.log("More or less " + crd.accuracy + " meters.");	
};

function error(err){
	console.warn("Error(" + err.code + "): " + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);
