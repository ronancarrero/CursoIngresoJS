function mostrar()
{

	var notas;
	var sexo;
	var contador;
	var acumulador;

	acumulador=0;
	contador=0;


	while(contador<5)
	{
		contador=contador+1
		notas = prompt("ingrese una nota");
		sexo = prompt("ingrese el sexo");

		notas = parseInt(notas);

		acumulador=acumulador+1;

		if(!(notas <0 && notas >1))
		{
			alert("la nota debe estar entre 0 y 10");
		}
	}
}

