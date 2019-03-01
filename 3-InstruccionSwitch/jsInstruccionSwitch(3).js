 function mostrar()
{  
	var mesDelAño;

	mesDelAño = document.getElementById('mes').value;

	switch(mesDelAño)
	{
		case "Febrero":
		alert("Este mes no tiene mas de 29 días.");
		break;
		
		default:
		alert("Este mes tiene mas de 30 días.");
		break;
	}
}