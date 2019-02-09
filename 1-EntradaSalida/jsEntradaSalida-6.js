/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{


	var primerNumero;
	var segundoNumero;
	var suma;

	primerNumero = numeroUno.value;
	segungoNumero = numeroDos.value;


	//se toman los datos y se transforman en nùmero con el parseInt.
	primerNumero = parseInt (primerNumero);
	segungoNumero = parseInt (segungoNumero);


	suma = primerNumero + segungoNumero;

	alert("la suma es: " + suma);




}

