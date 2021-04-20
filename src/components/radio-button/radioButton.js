import React from 'react'

function RadioButton ({ onClick }) {
	return (
		<div>
			<h1>Чтит ли капитан пиратский кодекс чести?</h1>
			<label>
				<input
					type='radio'
					name='codex'
					value='ДА КАПИТАН!!!'
					onClick={onClick}
				/>ДА КАПИТАН!!!
			</label>

			<br />

			<label>
				<input
					type='radio'
					name="codex"
					value='да капитан'
					onClick={onClick}
				/>да капитан
			</label>
		</div>
	)
}
export default RadioButton
