import React from 'react'

function CheckButton({ value, type, onClick,style }) {
	return (
		<button style={style} type={type} onClick={onClick}>
			{value}
		</button>
	)
}

export default CheckButton
