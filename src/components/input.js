import React from 'react'

function InputField({ placeholder, name, onChange }) {
	return (
		<input
			name={name}
			type='text'
			placeholder={placeholder}
			onChange={onChange}
		/>
	)
}

export default InputField