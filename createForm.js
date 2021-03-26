"use strict"

export function createForm(){

	const params = new URLSearchParams(window.location.search)
	const nameParam = params.has('name')?params.get('name'):''
	const detailsParam = params.has('details')?params.get('details'):''
	
	let form = document.createElement('form')
	
	let input = document.createElement('input')
	input.setAttribute('id', 'name')
	input.setAttribute('name', 'name')
	input.setAttribute('type', 'text')
	input.setAttribute('placeholder', 'Name')
	input.setAttribute('value', nameParam)
	
	let inputLabel = document.createElement('label')
	inputLabel.setAttribute('for', 'name')
	inputLabel.innerHTML = 'Name: '
	
	let details = document.createElement('textarea')
	details.setAttribute('id', 'details')
	details.setAttribute('name', 'details')
	details.setAttribute('rows', '5')
	details.setAttribute('cols', '38')
	details.innerHTML = detailsParam
	
	let detailsLabel = document.createElement('label')
	detailsLabel.setAttribute('for', 'details')
	detailsLabel.innerHTML = 'Details:'
	
	let br = document.createElement('br')
	
	let reset = document.createElement('button')
	reset.setAttribute('type', 'reset')
	reset.innerHTML = 'Reset'
	
	let submit = document.createElement('button')
	submit.setAttribute('type', 'button')
	submit.setAttribute('onclick', 'handleSubmit()')
	submit.innerHTML = 'Submit'
	
	form.appendChild(inputLabel)
	form.appendChild(input)
	form.appendChild(detailsLabel)
	form.appendChild(br)
	form.appendChild(details)
	form.appendChild(reset)
	form.appendChild(submit)
	
	document.getElementById('mainBlock').appendChild(form)
	
	const iframeSrc = params.has('iframeSrc')?params.get('iframeSrc'):'innerPage.html'
	
	let iframe = document.createElement('iframe')
	iframe.setAttribute('class', 'innerPage')
	iframe.setAttribute('id','innerPage')
	iframe.setAttribute('width','400px')
	iframe.setAttribute('height','320pxs')
	iframe.setAttribute('src','innerPage.html')	
	iframe.innerHTML = 'Not supported.'
	
	document.getElementById('framePlace').appendChild(iframe)

}

