import React from'react'
import styles from './popupStyle'

const Popup = ({children, closePopup}) => {
    const onBackgroundClick = () => {
        closePopup()
    }

    return(
        <div style={styles.popup} onClick={onBackgroundClick}>
            <div style={styles.contentContainer}>
                {children}
                <button type="button" onClick={closePopup} style={styles.exitButton}>
                    X
                </button>
            </div>
        </div>
    )
}

export default Popup