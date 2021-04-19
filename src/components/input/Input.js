import React from 'react'
import styles from './inputStyle'

const Input = ({placeholder, onChange, onBlur, error, value}) => {
    return(
        <div style={styles.inputGroup}>
            <input
                type='text'
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
            />
            {error && <div style={styles.error}>{error}</div>}
        </div>
    )
}

export default Input

