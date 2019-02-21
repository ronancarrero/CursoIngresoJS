function mostrar()
{

	var años;
	var mensaje;

	años = document.getElementById('edad').value;


	if(años >=18)

	{
		mensaje="es mayor de edad";
	}
		else
		{
			mensaje="es un niño";
		}

	if (años >12 && años <18)
	{
		mensaje="es un adolecente";
	}

	alert(mensaje);
}