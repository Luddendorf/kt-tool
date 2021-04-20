import React, { useState } from 'react';
import "./modal.css";

const Modal = ({ active, setActive, name }) => {
    const [checked, setChecked] = useState(false);
    const [allState, setAllState] = useState({});
    const Check = () => {
        return <div>
        <input type="checkbox" name="yes" id="radio3"/><label htmlFor="radio3">Да</label>
        <input type="checkbox" name="no" id="radio4"/><label htmlFor="radio4">Нет</label></div>
      }
    const click = () => {
        {/* Отлавливаю всё и записываю в переменные */}
        {/* setAllState({name : value}) */}
    }
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
              <label htmlFor="radio" className='mycheckbox'>Нет</label>
            </div>
            <br/>
            <div className="check1">
              <input type="checkbox" name="yes" className="radio" id='radio2' checked={checked} onChange={() => setChecked(!checked)} />
              <label htmlFor="radio2">Да </label>
            </div>
          </div>
          <div className='checkbox_val'>
          {/* <input type="checkbox"  checked={checked} onChange={() => setChecked(!checked)} /> Да */}
          <div>
            {checked ? <Check/> : null}
          </div>
          </div>
          <div className="button__div">
            <button>Сбросить</button>
            <button>Отправить в плавание</button> {/** onclick='submit' */}
          </div>
        </form>
      </div>
    </div>
  );
};

function greet(props) {
    
}


export default Modal;

