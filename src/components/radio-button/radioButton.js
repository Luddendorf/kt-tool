import React from 'react'

function RadioButton ({ onClick }) {
	return (
		<div>
			<h1>Чтит ли капитан пиратский кодекс чести?</h1>
			<label>
				<input
					type='radio'
					name='codex'
					value='Чту полностью'
					onClick={onClick}
				/>ДА КАПИТАН!!!
			</label>

			<br />

			<label>
				<input
					type='radio'
					name="codex"
					value='Чту частично'
					onClick={onClick}
				/>да капитан
			</label>
		</div>
	)
}
export default RadioButton
