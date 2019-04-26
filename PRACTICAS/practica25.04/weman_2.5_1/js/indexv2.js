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
	//En esta función escribe la función que ordenará el arreglo por habitación
console.log(	numHabitacion); {
	function comparar ( a, b ){ return a - b; }
arr.numHabitacion( comparar );  
};

dibujaTarjetas(arreglo);

}


function ordenaPorHuesped(arreglo) {
	//Acá puedes hacer la otra que ordene por el nombre del huesped
console.log(registro.sort(function (prev,next) {
if (prev.nombreHuesped > next.nombreHuesped) {
return 1;
}
if (prev.nombreHuesped < next.nombreHuesped) {
return -1;
}
return 0;
}));

dibujaTarjetas(registro);

}
