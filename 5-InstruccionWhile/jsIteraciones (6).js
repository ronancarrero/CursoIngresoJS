function mostrar()
{
	var numero;
	var contador;
	var acumulador;

	contador = 0;
	acumulador = 0;

	numero = prompt("Ingrese un numero");

	while(contador<4)
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		contador = contador + 1;
		acumulador = acumulador + numero;
	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}
	