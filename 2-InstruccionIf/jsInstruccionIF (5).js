function mostrar()
{ 
	var años;

	años = document.getElementById('edad').value;

	if(años >17 || años < 13)
	{
		console.log("NO es adolecente");
	}

}