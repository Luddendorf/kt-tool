
import './App.css';
import Modal from "./components/modal/Modal";
import React, { useState } from 'react';

const App = () => {
  const [modalActive, setModalActive] = useState(false); 
  const [name, setName] = useState('Вова'); 
  const changeName = () => {
    setName('Новый Вова')
  }
  return (
    <div className="App">
        <h1 style={{color: "green"}}>Здесь могла быть Ваша реклама 1111</h1>
        <main>
          <button className='open-btn' onClick={() => setModalActive(true)}>Открыть модальное окно</button>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae aliquid autem in ducimus perferendis, eos quasi officia explicabo provident, error quo possimus quam ea voluptate exercitationem ex dicta ut accusamus?</p>
        </main>
          <Modal active={modalActive} setActive={setModalActive} name={name}>

          </Modal>
          <button onClick={changeName}>
            Изменить имя
          </button>
    </div>
  );
}

export default App;
