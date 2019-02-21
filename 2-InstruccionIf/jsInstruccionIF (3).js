function mostrar()
{
	var años;
	var mensaje;

	años = document.getElementById('edad').value;

	if (años > 17)
	{
		mensaje = "Es mayor de edad";
	}
	else
	{
		mensaje = "Es menor de edad";
	}

	alert(mensaje);

}