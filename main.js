'use strict'
var bandera = false; //nos dice si el juego empieza o no
var turno = 0; //Determina el turno
var tablero = new Array(); //Arreglo de botones
var contadorJugador1 = 0;
var contadorJugador2 = 0;
var contadorEmpate = 0;

window.onload = function(){
	var iniciar = document.getElementById("empezar"); //# para id . para clases sin nada para etiquetas
	iniciar.addEventListener("click",comenzar);
	var recargar = document.getElementById("recargar");
	recargar.addEventListener("click",function(){
		location.reload();
	});
}

function comenzar(){
	bandera = true;
	var jugador1 = document.getElementById("jugador1");
	var jugador2 = document.getElementById("jugador2");

	if(jugador1.value==""){
		alert("Debe ingresar el nombre del jugador 1");
		jugador1.focus();
	}else{
		if(jugador2.value==""){
			alert("Debe ingresar el nombre del jugador 2");
			jugador2.focus();
		}else{
			tablero[0] = document.getElementById("but0");
			tablero[1] = document.getElementById("but1");
			tablero[2] = document.getElementById("but2");
			tablero[3] = document.getElementById("but3");
			tablero[4] = document.getElementById("but4");
			tablero[5] = document.getElementById("but5");
			tablero[6] = document.getElementById("but6");
			tablero[7] = document.getElementById("but7");
			tablero[8] = document.getElementById("but8");

			console.log(tablero,tablero[0]);
			for(var i=0 ; i<9 ;i++){
				tablero[i].className = "botonInicial";
				tablero[i].value = "I";
			}
			turno = 1;
			document.getElementById("turnoJugador").innerHTML =
			"Adelante Jugador "+jugador1.value;
		}
	}
}

function colocar(boton){
	console.log(boton);
	if(bandera == true){
		console.log("entro aca1");
		if(turno == 1 && boton.value == "I"){
			turno = 2;
			document.getElementById("turnoJugador").innerHTML = 
			"Adelante Jugador "+jugador2.value;
			boton.value = "X";
			boton.className = "botonJugador1";
		}else{
			if(turno == 2 && boton.value == "I"){
			turno = 1;
			document.getElementById("turnoJugador").innerHTML = 
			"Adelante Jugador "+jugador1.value;
			boton.value = "O";
			boton.className = "botonJugador2";
		    }
		}

	}
	revisar();
}

function revisar(){

	let marcaGanador = document.getElementById("ganador");

	if((tablero[0].value == "X" && tablero[1].value == "X" && tablero[2].value == "X")
	   ||(tablero[3].value == "X" && tablero[4].value == "X" && tablero[5].value == "X")
	   ||(tablero[6].value == "X" && tablero[7].value == "X" && tablero[8].value == "X")
	   ||(tablero[0].value == "X" && tablero[4].value == "X" && tablero[8].value == "X")
	   ||(tablero[2].value == "X" && tablero[4].value == "X" && tablero[6].value == "X")
	   ||(tablero[0].value == "X" && tablero[3].value == "X" && tablero[6].value == "X")
	   ||(tablero[1].value == "X" && tablero[4].value == "X" && tablero[7].value == "X")
	   ||(tablero[2].value == "X" && tablero[5].value == "X" && tablero[8].value == "X")
		){
		
		marcaGanador.innerHTML = "Felicidades "+jugador1.value+" ganaste!!";
		contadorJugador1 += 1; 
		bandera = false;

	}else if((tablero[0].value == "O" && tablero[1].value == "O" && tablero[2].value == "O")
	   ||(tablero[3].value == "O" && tablero[4].value == "O" && tablero[5].value == "O")
	   ||(tablero[6].value == "O" && tablero[7].value == "O" && tablero[8].value == "O")
	   ||(tablero[0].value == "O" && tablero[4].value == "O" && tablero[8].value == "O")
	   ||(tablero[2].value == "O" && tablero[4].value == "O" && tablero[6].value == "O")
	   ||(tablero[0].value == "O" && tablero[3].value == "O" && tablero[6].value == "O")
	   ||(tablero[1].value == "O" && tablero[4].value == "O" && tablero[7].value == "O")
	   ||(tablero[2].value == "O" && tablero[5].value == "O" && tablero[8].value == "O")
		){
		marcaGanador.innerHTML = "Felicidades "+jugador2.value+" ganaste!!";
		contadorJugador2 += 1;
		bandera = false;
		
	}else{
		if(tablero[0].value != "I" && tablero[1].value != "I" && tablero[2].value != "I" 
			&& tablero[3].value != "I" && tablero[4].value != "I" && tablero[5].value != "I"
			&& tablero[6].value != "I" && tablero[7].value != "I" && tablero[8].value != "I"){
			marcaGanador.innerHTML = "Empate!!";
			contadorEmpate+= 1;
			
		}
		
	}
}




