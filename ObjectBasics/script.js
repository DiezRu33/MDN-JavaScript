var persona = {
	nombre: {
		pila: "Diego",
		apellido: "Ramones"
	},
	saludo : function() {
		console.log("Mi nombre es: " + this.nombre.pila + ". Y mi apellido es: " + this.nombre.apellido)
	}
}

var persona2 = {
	nombre: {
		pila: "Mario",
		apellido: "Bros"
	},
	saludo : function(){
		console.log("Mi nombre es: " + this.nombre.pila + ". Y mi apellido es: " + this.nombre.apellido)
	}
}

