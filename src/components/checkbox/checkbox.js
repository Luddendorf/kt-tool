import React from 'react'

function CheckBox({}) {
	return (
		<div>
			<label>
			<input
				type='checkbox'
				id='codex'
			/>Пиратский кодекс
			</label>
			<br />
			<label>
				<input
					type='checkbox'
					id='codex2'
				/>Пиратский кодекс чести
			</label>
		</div>
	)
}

export default CheckBox
