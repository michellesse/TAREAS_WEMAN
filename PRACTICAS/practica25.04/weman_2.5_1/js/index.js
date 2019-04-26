//Esta variable guarda una referencia al control de resultado, se declara global para no tener que estar ejecutando document.getElementById en cada ocasión que se necesite
let ctrlMostrado = document.getElementById('salida');

function dibujaTarjetas(arreglo) {
	let imprime = "<table id='registro'><tr><th>Habitación</th><th>Huesped</th></tr>";
	//La siguiente estructura de for es casi ya un arcaísmo. Sin embargo, los clásicos nunca mueren.
	for (let i = 0; i < arreglo.length; i++) {
		imprime += "<tr><td>" + arreglo[i].numHabitacion + "</td><td>" + arreglo[i].nombreHuesped + "</td></tr>";
	}
	imprime += "</table>"
	ctrlMostrado.innerHTML = imprime;
}

function ordenaPorHabitacion(arreglo) {
	//ordena los numero de habitación
	//trae (imprime) la info de 'registro' numHabitacion ya ordenada
	// se utiliza comparacion entre elementos para que no los ordene de acuerdo al formato Unicode
	console.log(registro.sort(function (ant, sig) {
		//especificamos la propiedad a ordenar
		if (ant.numHabitacion > sig.numHabitacion) {
			return 1;
		}
		if (ant.numHabitacion < sig.numHabitacion) {
			return -1;
		}
		return 0;
	}));
	//no lo imprimeeee! 
	//dibujarTarjetas
	dibujaTarjetas(registro); 
}

function ordenaPorHuesped(arreglo) {
	//ordena los nombres de los huespedes,
	//trae (imprime) la info de 'registro" ya ordenada
	console.log(registro.sort(function (prev, next) {
		//especificamos la propiedad a ordenar
		if (ant.nombreHuesped > sig.nombreHuesped) {
			return 1;
		}
		if (ant.nombreHuesped < sig.nombreHuesped) {
			return -1;
		}
		return 0;
	}));
	dibujaTarjetas(registro);
}

function guardar(){
    // trae los datos y los asigna  
    var _habit = document.getElementById("habitacion").value;
    var _huesp = document.getElementById("huesped").value;
    // los muestra en la tabla... esta creando otra tabla?
    var fila="<tr><td>"+_habit+"</td><td>"+_huesp +"</td></tr>";
    // var _nuevoregistro = {numHabitacion:"110",...}  
    registro.push(guardar); //esto no está funcionando, no lo guarda, solo imprime :(
    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("registro").appendChild(btn);
}