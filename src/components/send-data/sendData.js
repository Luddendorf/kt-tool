import React from 'react'
import style from './sendDataStyle'

function SendData({ onClick,onClick2 }) {
	return (
		<div style={style.all} id='pop-up' onClick={onClick2}>
			<div id='pop-up2' style={style.main} >
				<div style={style.sendDataDiv}>
					<div style={style.data}>Данные получены</div>
					<div style={style.button} onClick={onClick}>X</div>
				</div>
			</div>
		</div>
	)
}

export default SendData
