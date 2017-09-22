function showLoginForm(evento){
	if(evento == "showform"){
		divShow = document.getElementById('formLoginId');
		divShow.style.display = "block";
	}
	else{
		document.getElementById('formLoginId').style.display = "none";
	}
}
