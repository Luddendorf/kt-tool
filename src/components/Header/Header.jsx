import React from 'react'

const Header = ({isOpen}) => (
  <div className='header'>
        <div className="header__container container">
            <div className="header__title">
                <h3>Captain</h3>
            </div>
            <div className="header__navList">
                <div onClick={isOpen} className="header__navList--item">Modal</div>
            </div>
        </div>
  </div>
);

export default Header;