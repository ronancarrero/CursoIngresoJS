/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
  	
	var importe; 
	var aumento;
	var sueldoMasAumento;



	importe = sueldo.value;
	aumento = resultado.value;

	importe = parseInt(importe);
	aumento = parseInt(aumento);

	sueldoMasAumento = importe * 10/100;

	total = sueldoMasAumento + importe;


	alert("RESULTADO: " + total);

	
}
