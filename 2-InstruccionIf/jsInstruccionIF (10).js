function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	var mensaje;

	nota = Math.floor(Math.random()*10) + 1;

	if(nota ==9 || nota == 10)
	{
		mensaje = "EXCELENTE";
	}
		else
		{
			if(nota>4)
			{
				mensaje= "APROBO";
			}
				else
				{
					mensaje ="vamos, la proxima se puede";
				}
		}
		
		console.log(nota + " " +mensaje);
}//FIN DE LA FUNCIÓN