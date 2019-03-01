function mostrar()
{
	var clave;

	clave = prompt("Ingrese la contraseña");

	while(clave !=="utn750")
	{
		clave = prompt("ERROR: Ingrese la contraseña");
	}

	console.log("BIENVENIDO");
}