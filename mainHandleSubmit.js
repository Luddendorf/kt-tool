'use strict'

function handleSubmit(){
	const input = 'отР : ' +  document.getElementById('name').value;
	const details = document.getElementById('details').value;
	window.location = `index.html?iframeSrc=innerPage.html\?name=${input}%26details=${details}`
}
