/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var mensaje;

	largo = document.getElementById('Largo').value;
	ancho = document.getElementById('Ancho').value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	if(largo > ancho)
	{
		perimetro = 2* (largo + ancho);

		mensaje= "la cantidad de alambre es: "+ perimetro*3 + " cm";
	}
		else
		{
			mensaje = "colocar datos correctamente";
		}	
	alert(mensaje);
}




function Circulo () 
{
	var radio;
	var longitud;

	radio = document.getElementById('Radio').value;

	radio = parseInt(radio);

	longitud = Math.PI * Math.pow(radio,2);
	//return 2 * Math.PI * radio;

	alert("la antidad de alambre es: " + longitud*3 + " cm");
}



function Materiales () 
{

	var largo;
	var ancho;
	var mensaje;
	var area;
	var cemento=2;
	var cal=3;
	var totalCemento;
	var totalCal;


	largo = document.getElementById('Largo').value;
	ancho = document.getElementById('Ancho').value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	area = largo * ancho;

	totalCemento =area*cemento;
	totalCal = area*cal;

	alert("la cantidad de cemento son: " + totalCemento + " bolsas y de cal son: " + totalCal+ " bolsas");
}