import React from 'react'

const Main = ({isOpen}) => (
  <div className='main'>
        <div className="main__container container">
          <img onClick={isOpen} src="https://cdn.pixabay.com/photo/2019/06/25/12/59/click-here-4298145_960_720.png" alt="Click here"/>
        </div>
  </div>
);

export default Main;