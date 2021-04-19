import React from 'react'
import RadioButton from './radiobtn'

export default function CheckBox({ onClick }) {
	function check() {
		let wrapper = document.getElementById('wrapper-radio')
		wrapper.classList.toggle('radio-visible')
	}

	return (
		<div>
			<input
				type='checkbox'
				id='checkbox'
				onClick={() => {
					check()
				}}
			/>
			<label htmlFor='checkbox'>Чтит ли капитан кодекс?</label>
			<div id='wrapper-radio' className='radio-visible'>
				<RadioButton onClick={onClick} />
			</div>
		</div>
	)
}