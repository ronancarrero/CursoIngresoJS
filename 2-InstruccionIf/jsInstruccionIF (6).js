function mostrar()
{
	var años;
	var mensaje;

	años = document.getElementById('edad').value;

	if(años >18)
	{
		mensaje = "ES MAYOR DE EDAD";
	}
		else
		{
			if(años<13)
			{
				mensaje ="ES UN NIÑO";
			}
			else
			{
				mensaje="ES ADOLECENTE";
			}
		}
	console.log(mensaje);
}