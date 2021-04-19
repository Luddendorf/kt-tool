import React from 'react'

function InputName({ name, placeholder, onChange }) {
	return (
		<input
			name={name}
			type='text'
			placeholder={placeholder}
			onChange={onChange}
		/>
	)
}

export default InputName
