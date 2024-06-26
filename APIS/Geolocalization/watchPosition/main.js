var id, target, options;

function success(pos){
	var crd = pos.coords;
	if(target.latitude === crd.latitude && target.longitud === crd.longitude){
		console.log("Congratulation, you reach the target");
		navigator.geolocation.clearWatch(id)
	} 
}

function error( err ){ console.warn( "ERROR(" + err.code + "): " + err.message )}

target = { latitude : 0, longitude: 0 }

options = { enableHighAccuracy: false, timeout: 5000, maximumAge: 0 }

id = navigator.geolocation.watchPosition(success, error, options)
