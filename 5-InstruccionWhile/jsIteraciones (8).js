function mostrar()
{
	var numero;
	var contador;
	var acumulador;
	var positivo;
	var negativo;
	var respuesta = "s";

	contador=0;
	acumulador=0;
	positivo=0;
	negativo=1;

	while(respuesta == "s")
	{
		contador=contador+1;
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		respuesta=prompt("s para continuar");

		if(numero>0)
		{
			positivo= positivo+numero;
		}
			else
			{
				negativo=negativo*numero;
			}
		if(respuesta!=="s")
		{
			break;
		}
	}
	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;
}