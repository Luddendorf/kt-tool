import React from 'react'

export default function PopUp({ onClick }) {
	return (
		<div>
			<div>
				<div>Данные отправлены в консоль</div>
				<button onClick={onClick}>Close</button>
			</div>
		</div>
	)
}