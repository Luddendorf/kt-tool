import React from 'react'
import styles from './checkboxStyle'

const Checkbox = ({label, name, onChange, checked}) => {
    return(
        <div className={styles.inputGroup}>
            <label>
                <input
                    type='checkbox'
                    checked={checked}
                    name={name}
                    onChange={onChange}
                />
                {label}
            </label>
        </div>
    )
}

export default Checkbox