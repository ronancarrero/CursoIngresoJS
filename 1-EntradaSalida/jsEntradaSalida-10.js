/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo;
	var descuento;

	sueldo = importe.value;
	descuento = resultado.value;

	sueldo =parseInt(sueldo);
	descuento = parseInt(descuento);

	sueldoDescuento= sueldo *25/100;

	total = sueldo - sueldoDescuento;

	alert("resultado: " + total);
	
}
