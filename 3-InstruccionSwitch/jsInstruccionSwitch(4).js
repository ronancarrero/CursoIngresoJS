function mostrar()
{
	var mesDelAño;
	var mensaje;

	mesDelAño = document.getElementById('mes').value;

	switch (mesDelAño)
	{
		case "Febrero":
			mensaje = "Si tiene 28 dias.";
		break;

		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Septiembre":
		case "Noviembre":
		case "Diciembre":
			mensaje = "Tiene 31 días.";
		break;

		default:
			mensaje="Tiene 30 días.";
		break;
	}
	alert(mensaje);
}