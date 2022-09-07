class Persona{

	constructor(name,apellido,edad,genero,intereses,materia){
	this.name = {
		"nombre": name,
		"apellido": apellido
	},
	this.edad = edad;
	this.genero = genero;
	this.intereses = intereses;
	this.materia = materia
	}


	introducir(){
	console.log("Hola mi nombre es " + this.name + ". Y tengo " + this.edad + ". Còmo estas?")
}

}
	const Persona1 = new Persona('Diego',23)
	Persona1.introducir()


class Profesor extends Persona{
	enseña;

	constructor(name,edad,enseña){
		super(name,edad);
		this.enseña = enseña
	}

		introducir(){
		console.log("Hola mi nombre es " + this.name + ". Tengo " + this.edad + " años de edad. Y enseño " + this.enseña) 
	}

	grade(paper){
		const constructor = Math.floor(Math.random() * (5 - 1) + 1);
		console.log(constructor)
	}

	
}
const Profesor1 = new Profesor('Hernandez',54,'Teorìa del Càlculo IV')
	Profesor1.introducir();
	Profesor1.grade()


class Estudiante extends Persona{
	#año;

	constructor(name,edad,año){
		super(name,edad);
		this.#año = año
	}

	estudio(){
		console.log("Hola mi nombre es " + this.name + ". Tengo " + this.edad + " años de edad. Y estoy en " + this.#año + " grado.")
	}

	abaleableToStudy(){
		if(this.#año === 'primero' || this.#año === 'segundo' || this.#año === 'tercero'){
			console.log("No podes estudiar porque estas en " + this.#año + " grado")
		}else{
			console.log("Podes estudiar esta materia porque estas en " + this.#año + " grado")
		}
	}
	
}

const Estudiante1 = new Estudiante('Javier',32,'primero')
Estudiante1.introducir();
Estudiante1.abaleableToStudy()

class Privado{
		metodoPublico(){
		this.#metodoPrivado()
	}
		#metodoPrivado(){
		console.log("Me llamaste?")
	}
}

const Privado1 = new Privado();
Privado1.metodoPublico();


class Director extends Profesor{
	constructor(name,edad,enseña,interes){
	super(name,edad,enseña);
	this.interes = interes;
	}

	director(){
		console.log("Hola soy el director " + this.name + ". Tengo " + this.edad + " años de edad." + " Les presento a su nuevo profesor de " + this.enseña + "." + " En base a esto nos proponemos a " + this.interes + ".")
	}
}

const Director1 = new Director('Ramon',34,'Programación III','crear un programa para proyectar un futuro encaminado a las Nuevas Tecnologías');
Director1.director();

class getNdSet extends Persona{
	constructor(name,apellido,edad,genero,intereses,materia,get,set){
		super(name,apellido,edad,genero,intereses,materia);
		this._get = get;
		this.set = set;
	}
	
	get get(){
		return this._get
	}
	set get(newGetter){
		this.get = newGetter
	}

	holaSeverus(){
		console.log(`Hola soy ${this.name.nombre} ${this.name.apellido}. Tengo ${this.edad}, y seré su profesor de ${this.materia} en donde veremos ${this.intereses}. Mucho gusto.`)
	}
}

const severus = new getNdSet('Severus','Snape',58,'Hombre',['Pociones'],'Artes Obscuras')
