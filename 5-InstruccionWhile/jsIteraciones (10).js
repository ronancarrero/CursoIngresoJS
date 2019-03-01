function mostrar()
{
	var numero;
	var respuesta;
	var sumaNegativos;
	var contadorNegativos;
	var contadorPositivos;
	var contadorCeros;
	var contadorPares;
	var sumaCeros;
	var sumaNegativos;
	var sumaPositivos;

	contadorPares=0;
	sumaCeros=0;
	contadorCeros=0;
	sumaPositivos=0;
	sumaNegativos=0;
	contadorPositivos=0;
	contadorNegativos=0;
	respuesta="s";

	while(respuesta =="s")
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		respuesta = prompt("s para continuar");
		

		if(numero<0)
		{
			contadorNegativos = contadorNegativos + 1;
			sumaNegativos = sumaNegativos + numero;
		}
			else
			{
				if(numero>0)
				{
					contadorPositivos = contadorPositivos + 1;
					sumaPositivos = sumaPositivos + numero;
				}
				else
				{
					contadorCeros = contadorCeros + 1;
					sumaCeros = sumaCeros + numero ;
				}
				//si el modulo de una division da 0 es par
				if (numero % 2 == 0 && numero !=0)
				{
					contadorPares = contadorPares + 1;

				}
			}
		
	}

	document.write
	(
		"1- suma de negativos: " + sumaNegativos + "<br>" +
		"2- suma de positivos: " + sumaPositivos + "<br>" +
		"3- cantidad de positivos: " + contadorPositivos + "<br>"+
		"4- cantidad de negativos: " + contadorNegativos + "<br>"+
		"5- cantidad de ceros: " + contadorCeros + "<br>"+
		"6- cantidad de numeros pares: " + contadorPares + "<br>"+
		"7- promedio de positivos: " + sumaPositivos / contadorPositivos + "<br>"+
		"8- promedio de negativos: " + sumaNegativos /contadorNegativos + "<br>"+
		"9- diferencia entre posi y nega: " + (sumaPositivos + sumaNegativos)+ "<br>"

	);
}


