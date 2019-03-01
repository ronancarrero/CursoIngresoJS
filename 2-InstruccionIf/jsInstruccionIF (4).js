function mostrar()
{
	var años;
	var mensaje;

	años = document.getElementById('edad').value;

	if(años<18 && años >12)
	{
		mensaje = "ES UN ADOLECENTE";
		console.log(mensaje);
	}
}
