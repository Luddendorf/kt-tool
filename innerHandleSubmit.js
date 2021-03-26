'use strict'

function handleSubmit(){
	const input = 'отД : ' +  document.getElementById('name').value;
	const details = document.getElementById('details').value;
	window.parent.location = `index.html?name=${input}&details=${details}`
}
