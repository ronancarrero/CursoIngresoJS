function mostrar()
{
	var años;
	var estadoCivil;
	var mensaje;

	años = document.getElementById('edad').value;
	estadoCivil = document.getElementById('estadoCivil').value;


	if(años <18 && estadoCivil != "Soltero")
	{
		mensaje = "es muy pequeño para NO estar Soltero";
		console.log(mensaje);
	}
		
}