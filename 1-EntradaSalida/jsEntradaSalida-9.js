/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importe;
	
	importe = document.getElementById('sueldo').value;
	importe = parseInt(importe);

	document.getElementById('resultado').value=importe * 10/100 + importe;
}
