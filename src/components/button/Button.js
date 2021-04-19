import React from 'react'

const Button = ({text, onClick, disabled, style}) => {
    return(
        <button
            type="button"
            disabled={disabled || false}
            onClick={onClick}
            style={style}
        >
            {text}
        </button>
    )
}

export default Button