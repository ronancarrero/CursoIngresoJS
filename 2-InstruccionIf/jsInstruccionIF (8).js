function mostrar()
{

	var años;
	var estadoCivil;
	var mensaje;

	años = document.getElementById('edad').value;
	estadoCivil = document.getElementById('estadoCivil').value;

	if(años > 17 && estadoCivil == "Soltero")
	{
		console.log("es soltero y no es menor");
	}
}