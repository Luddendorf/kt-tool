import React from 'react';
import "./modal.css"

const Modal = ({ active, setActive }) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <p> Заявка на участие в рейде на Испанский золотой флот</p>
                <form action="" className='formCapitan'>
                    <input type="text" className='name' placeholder='Имя капитана' />
                    <input type="text" className='name' placeholder='Имя корабля' />
                    <div className='checkbox'>
                        <input type="checkbox" name='no' className='check' /> Нет
                    <input type="checkbox" name='yes' className='check' /> Да
                </div>
                    <div className='button__div'>
                        <button>Сбросить</button>
                        <button>Отправить в плавание</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;