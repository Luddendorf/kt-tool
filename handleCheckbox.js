'use strict'

function handleCheckbox(){
	if(document.getElementById('radio1').disabled){
		document.getElementById('radio1').disabled = false;
		document.getElementById('radio2').disabled = false;
		document.getElementById('radio3').disabled = false;
	}else{
		document.getElementById('radio1').disabled = true;
		document.getElementById('radio2').disabled = true;
		document.getElementById('radio3').disabled = true;
	}
}
