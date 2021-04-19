import React from 'react'

const RadioButton = ({ onClick }) => {
	return (
		<div>
			<h2>А полностью ли?</h2>
			<input
				type='radio'
				id='radio'
				name='radio'
				value='Чту полностью'
				onClick={onClick}
			/>
			<label htmlFor='radio'>Чту полностью</label>
			<input
				type='radio'
				id='radio'
				name='radio'
				value='Чту частично'
				onClick={onClick}
			/>
			<label htmlFor='radio'>Чту частично</label>
		</div>
	)
}
export default RadioButton