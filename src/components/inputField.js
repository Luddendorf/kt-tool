import React from 'react'
import './styles/inputField.css'

function InputField({ placeholder, name, onChange }) {
	return (
		<input
			name={name}
			className='input-field'
			type='text'
			placeholder={placeholder}
			onChange={onChange}
		/>
	)
}

export default InputField
