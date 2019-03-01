function mostrar()
{
	var numero;
	var contador;
	var acumulador;
	var respuesta = "s";

	contador =0;
	acumulador=0;

	while(respuesta == "s")
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		contador=contador+1;
		acumulador=acumulador+numero;
		respuesta = prompt("s para continuar");
	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN