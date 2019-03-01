/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;

	primerNumero = document.getElementById('numeroUno').value;
	segundoNumero = document.getElementById('numeroDos').value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	alert(" la Suma es: " + (primerNumero + segundoNumero));
}


function restar()
{
	var primerNumero;
	var segundoNumero;

	primerNumero = document.getElementById('numeroUno').value;
	segundoNumero = document.getElementById('numeroDos').value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	alert(" la Resta es: " + (primerNumero - segundoNumero));
}

function multiplicar()
{ 
	
	var primerNumero;
	var segundoNumero;

	primerNumero = document.getElementById('numeroUno').value;
	segundoNumero = document.getElementById('numeroDos').value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	alert(" la Multiplicación es: " + (primerNumero * segundoNumero));

}

function dividir()
{
	
	var primerNumero;
	var segundoNumero;

	primerNumero = document.getElementById('numeroUno').value;
	segundoNumero = document.getElementById('numeroDos').value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	alert(" la Division es: " + (primerNumero / segundoNumero));
	
}

