function mostrar()
{ 
	var años;
	var mensaje;

	años = document.getElementById('edad').value;

	if (años >17)
	{
		mensaje="NO es adolecente";
		
	}

	else 
	{
		if (años <13)
		{
			mensaje="NO es adolecente";
			
		}

	}
	alert(mensaje);
}