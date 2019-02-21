function mostrar()
{

	var años;
	var estado;
	var mensaje;

	años = document.getElementById('edad').value;
	estado = document.getElementById('estadoCivil').value;
	

	if (años <18 && estado != "Soltero")
	{
		mensaje="Es muy pequeño para NO ser soltero"
		alert(mensaje);
	}
	
}