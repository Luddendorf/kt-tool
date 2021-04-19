import React from 'react'

export default function ActionButton({ message, type, onClick }) {
	return (
		<button type={type} onClick={onClick}>
			{message}
		</button>
	)
}