/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	// se declaran las variables
	var dividendo;
	var divisor;
	var division;
	var resto;

	// se toman los numeros por id
	dividendo = document.getElementById('numeroDividendo').value;	
	divisor = document.getElementById('numeroDivisor').value;

	//se transforman los id en enteros
	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);

	//se realiza la operacion el simbolo % es modulo y saca el resto
	alert("El resto de la operacion es: " + (dividendo%divisor));
}
