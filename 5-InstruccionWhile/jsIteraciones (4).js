function mostrar()
{
 	var numero;


 	numero = prompt("Ingrese un numero entre 0 y 9 inclusive");

 	while(numero>9 || numero <0)
 	{
 		numero = prompt("numero entre 0 y 9 inclusive");
 	}
 	console.log(numero);
}//FIN DE LA FUNCIÓN