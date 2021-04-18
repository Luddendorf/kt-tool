import React from 'react'
import './styles/popUp.css'

export default function PopUp({ onClick }) {
	return (
		<div className='pop-up-wrapper'>
			<div>
				<div>Данные отправлены в консоль</div>
				<button onClick={onClick}>Close</button>
			</div>
		</div>
	)
}
