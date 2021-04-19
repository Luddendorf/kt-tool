import React, { useState } from 'react'
import Form from './components/form'
import PopUp from './components/modal'

function App() {
	let [state, setState] = useState(false)
	function togglePopUp(e) {
		e.preventDefault()
		setState(false)
	}
	const View = state ? (
		<PopUp onClick={togglePopUp} />
	) : (
		<Form state={state} setState={setState} />
	)

	return <div>{View}</div>
}

export default App
