/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{	
	var montoUno;
	var montoDos;
	var montoTres;
	var total;

	montoUno = document.getElementById('PrecioUno').value;
	montoDos = document.getElementById('PrecioDos').value;
	montoTres = document.getElementById('PrecioTres').value;

	montoUno = parseInt(montoUno);
	montoDos = parseInt(montoDos);
	montoTres = parseInt(montoTres);

	total= montoUno+montoDos+montoTres;
	alert(total);
}


function Promedio () 
{
	var montoUno;
	var montoDos;
	var montoTres;
	var total;

	montoUno = document.getElementById('PrecioUno').value;
	montoDos = document.getElementById('PrecioDos').value;
	montoTres = document.getElementById('PrecioTres').value;

	montoUno = parseInt(montoUno);
	montoDos = parseInt(montoDos);
	montoTres = parseInt(montoTres);

	total= montoUno+montoDos+montoTres;
	alert(total/3);
	
}
function PrecioFinal () 
{

	var montoUno;
	var montoDos;
	var montoTres;
	var total;

	montoUno = document.getElementById('PrecioUno').value;
	montoDos = document.getElementById('PrecioDos').value;
	montoTres = document.getElementById('PrecioTres').value;

	montoUno = parseInt(montoUno);
	montoDos = parseInt(montoDos);
	montoTres = parseInt(montoTres);

	total= montoUno+montoDos+montoTres;
	iva= total*21/100;

	alert(total + iva);
	
}