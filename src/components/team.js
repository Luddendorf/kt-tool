import React from 'react'

function Team({ teamValue, onBlur }) {
	let child = []

	if (teamValue <= 10) {
		for (var i = 0; i <= teamValue; i += 1) {
			child.push(
				<input placeholder='Имя матроса' key={i} onBlur={onBlur}></input>
			)
		}
	} else {
		alert('Max value of a team')
	}
	return <div>{child}</div>
}
export default Team
