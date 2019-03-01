function mostrar()
{
	var años;
	var mensaje;

	años = document.getElementById('edad').value;

	if(años	>17)
	{
		mensaje = "ES MAYOR DE EDAD";
	}
		else
		{
			mensaje = "ES MENOR DE EDAD";
		}

		console.log(mensaje);
}