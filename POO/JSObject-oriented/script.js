function persona(nombre,apellido,edad,intereses,genero){
	this.name = {
		"nombre":nombre,
		"apellido":apellido
	}
	this.edad = edad,
	this.intereses = intereses,
	this.genero = genero,
	this.biografia = function(){
		var string = console.log("Hola, me llamo " + this.name.nombre + ", mi apellido es " + this.name.apellido + ". Tengo " + this.edad + " años de edad." + " " + "Me gusta mucho " + this.intereses + ". Soy " + this.genero + ". ");

	if(this.intereses.length === 1){
		string += this.intereses[0] + ". ";
	} else if (this.intereses.length === 2) {
		string += this.intereses[0] + ", " + this.intereses[1] + ". ";
	} else {
		for (let i = 0; i < this.intereses.length; i++){
			if(i === this.intereses.length -1){
				string += "y " + this.intereses[i] + ". ";
			} else {
				string += this.intereses[i] + ", ";
			}
		}
	}
		var pronombre
	if (this.genero === "hombre" || this.genero === "h" || this.genero === "Hombre" || this.genero === "H"){
		this.genero = "Él. "
	} else if(this.genero === "mujer" || this.genero === "m" || this.genero === "Mujer" || this.genero === "M") {
		this.genero = "Ella. "
	} else {
		this.genero = "Ellx. "
	}

	string += this.genero
}
	this.saludo = function(){
		console.log("Hola, mi nombre es " + this.name.nombre + " " + this.name.apellido + ". Mucho gusto en conocerte." + " Soy " + this.genero + ". ")
	}
}