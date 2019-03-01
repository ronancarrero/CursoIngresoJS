function mostrar()
{
	var sexo;

	sexo = prompt("Ingrese su sexo f o m");

	while(sexo !=="f" && sexo !== "m")
	{
		sexo = prompt("debe ser f o m");
	}
	document.getElementById('Sexo').value=sexo;
}