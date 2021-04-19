import React from 'react'

function Seaman({ sizeSeaman, onBlur }) {
	const arr = []

	if (sizeSeaman <= 10) {
		for (let i = 1; i < sizeSeaman; i++) {
			arr.push(
				<input placeholder='Имя матроса' key={i} onBlur={onBlur}/>,
				<br />
			)
		}
	} else {
		sizeSeaman = 10;
		for (let i = 1; i < sizeSeaman; i++) {
			arr.push(
				<input placeholder='Имя матроса' key={i} onBlur={onBlur}/>,
				<br />
			)
		}
	}
	return <div>{arr}</div>
}
export default Seaman
