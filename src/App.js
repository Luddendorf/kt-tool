import logo from './logo.svg';
import './App.css';
import Modal from "./components/modal/Modal";
import Greetings from './components/Greetings';
import SimpleForm from './components/simple-form/SimpleForm';
import { useState } from 'react';

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [name, setName] = useState('Имя');
  const [checked, setChecked] = useState(false);
  let box= {};
  if(checked) {
    box = <input type="checkbox" name="yes" id="radio2"/>
  } else {
    box = ''
  }
  const changeName = () => {
    setName('Новое Имя')
  }
  return (
    <div className="App">      
     <h1 style={{color: "green"}}>А ты хочешь принять участие в рейде на Испанский золотой флот?</h1>
      <button className='open-btn' onClick={() => setModalActive(true)}>Вступить в число рейдеров</button>
      <Modal active={modalActive} setActive={setModalActive}>
        <p>Заявка на участие в рейде</p>
        <div>
          <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} /> Выбрать
	      	<div>{box}</div>
          </div>

          <button onClick={changeName}>
            Отправить заявку
          </button>
      </Modal>
    </div>
    
  );
}

export default App;
