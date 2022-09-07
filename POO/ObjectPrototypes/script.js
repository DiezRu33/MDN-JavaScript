const input = document.querySelector('input');
const button = document.querySelector('button')
const para = document.querySelector('p')

button.onclick = function(){
	const code = input.value;
	para.textContent = eval(code)
}

function Person(nombre,apellido,edad,genero,intereses) {
	this.name = {
		nombre,
		apellido
	};
	this.edad = edad;
	this.genero = genero;
	this.intereses = intereses;
}

Person.prototype.bio = function() {
	let string = this.name.nombre + " " + this.name.apellido + " tiene " + this.edad + " años de edad.";
	let pronombre

	if(this.genero === "hombre" || this.genero === "h" || this.genero === "Hombre" || this.genero === "H"){
		pronombre = "A él le gusta "
	} else if(this.genero === "mujer" || this.genero === "m" || this.genero === "Mujer" || this.genero === "M"){
		pronombre = "A ella le gusta "
	} else {
		pronombre = "Le gusta "
	}
		string += pronombre

	if(this.intereses.length === 1){
		string += this.intereses[0] + ". "
	} else if(this.intereses.length === 2){
		string += this.intereses [0] + " y " + this.intereses[1] + ". "
	}else {
		for(let i = 0;i < this.intereses.length;i++){
			if(i === this.intereses.length){
				string += this.intereses[i] + ". "
			}else {
				string += this.intereses[i] + ", "
			}
		}
	}

	console.log(string)
}

	Person.prototype.saludos = function(){
	console.log("Hola, mi nombre es " + this.name.nombre + ".")
}

	Person.prototype.farwell = function(){
	console.log(this.name.nombre + " dejó el servidor, hasta luego!")
}

let Person1 = new Person('Mario','Bros',24,'H',['escuchar musica',' mirar peliculas',' cantar','jugar a la play'],'non-binary')




function Profesor(nombre,apellido,edad,genero,intereses,materia){
	Person.call(this ,nombre,apellido,edad,genero,intereses);

	this.materia = materia;
}

	this.Greetings = function(){
		console.log("Hola, soy el profesor. Mi nombre es " + this.name.nombre + " " + this.name.apellido + ". " + "Saquen las carpetas.")
	}

	Profesor.prototype = Object.create(Person.prototype);

	Object.defineProperty(Profesor.prototype, 'constructor', {
		value: Profesor,
		enumerable: false,
		writeable: true
	})

	Profesor.prototype.biografia = function(){
		var prefijo;

		if(this.genero === "H" || this.genero === "h" || this.genero === "Hombre" || this.genero === "hombre"){
			prefijo = "Sr. "
		}else if(this.genero === "m" || this.genero === "M" || this.genero === "mujer" || this.genero === "Mujero"){
			prefijo = "Sra. "
		}else {
			prefijo = "Srx. "
		}
		console.log("Soy el profesor " + this.name.nombre + " " + this.name.apellido + ". Enseño " + this.materia + ". Y pueden decirme " + prefijo + this.name.apellido + ". ")
	}

	Profesor.prototype.saludos = function(){
		let prefijo;

		if(this.genero === "hombre" || this.genero === "Hombre" || this.genero === "h" || this.genero === "H"){
			prefijo = "Sr. ";
		}else if(this.genero === "mujer" || this.genero === "Mujer" || this.genero === "m" || this.genero === "M"){
			prefijo = "Sra. ";
		}else {
			prefijo = "Sx. "
		}

	console.log("Hola. Mi nombre es " + prefijo + this.name.apellido + ". Enseño " + this.materia + ". ")
	}

var Profesor1 = new Profesor('Hernan','Julianez',54,'M',['mandar tarea',' jugar volleyball',' pintar',' mandar tarea'],'Física Cuántica')

	// this.presentacion = function(){
	// 	var string = 
	// 	console.log("Hola alumnos, mi nombre es: " + this.name.nombre + " " + this.name.apellido + ". Tengo " + this.edad + " años de edad. " + "Soy " + this.genero + ". Me gusta " + this.intereses + ". ")
	// 	var pronombre
	// 	if(this.genero === "h" || this.genero === "H" || this.genero === "hombre" || this.genero === "Hombre"){
	// 		this.genero = "Él ";
	// 	}else if(this.genero === "m" || this.genero === "M" || this.genero === "Mujer" || this.genero === "mujer"){
	// 		this.genero = "Ella "
	// 	} else {
	// 		this.genero = pronombre.value
	// 	}
	// 	if(this.intereses.length === 1){
	// 		string += this.intereses[0] + ". "
	// 	}else if(this.intereses.length === 2){
	// 		string += this.intereses[0] + " y " + this.intereses[1]
	// 	}else{
	// 		for(let i = 0;i < this.intereses.length;i++){
	// 			if(i === this.intereses.length){
	// 				string += this.intereses[i] + "."
	// 			}else{
	// 				string += this.intereses[i] + ", "
	// 			}
	// 		}
	// 	}
	// }