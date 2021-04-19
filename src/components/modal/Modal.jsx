import React from "react";
import "./modal.css";

const Modal = ({ active, setActive, name }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <p> Заявка на участие в рейде на Испанский золотой флот</p>
        <form action="" className="formCapitan">
          <input
            type="text"
            className="name"
            placeholder="Имя капитана"
            value={name}
          />
          <input type="text" className="name" placeholder="Имя корабля" />
          <div className="checkbox">
            <div className="check1">
            
              <input type="checkbox" name="no" className="radio" id='radio'/>
              <label htmlFor="radio" className='mycheckbox'>Да</label>

            </div>

            <br/>
            <div className="check1">
              <input type="checkbox" name="yes" className="radio" id='radio2' />
              <label htmlFor="radio2">Да </label>
            </div>
          </div>
          <div className="button__div">
            <button>Сбросить</button>
            <button>Отправить в плавание</button>
          </div>
        </form>
      </div>
    </div>
  );
};

function greet(props) {
    
}


export default Modal;
