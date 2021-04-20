import React from 'react'
import RadioButton from '../radio-button/radioButton'
import './checkButton.css'

function CheckBox({onClick}) {

	return (
		<div>
			<label>
				<input
					type='checkbox'
					id='codex'
					onClick={() => {
						change()
					}}
				/>Пиратский кодекс
			</label>

			<div id='change' className='visible'>
				<RadioButton onClick={onClick} />
			</div>
		</div>
	)

	function change() {
		const change = document.getElementById('change');
		change.classList.toggle('visible');
	}
}

export default CheckBox
