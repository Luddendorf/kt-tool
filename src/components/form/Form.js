import React, { useState } from 'react'
import InputName from '../input-name/inputName'
import CheckBox from '../checkbox/checkbox'
import Seaman from '../seaman/seaman'
import CheckButton from '../check-button/checkButton'
import RadioButton from "../radio-button/radioButton";
import style from "./formStyle"

function Form({ state, setState }) {

	let [data, setData] = useState({
		captainName: '',
		shipName: '',
		codex: '',
		sailorName: '',
	})
	let [quantity, setQuantity] = useState(1)

	function handleChangeCaptainName(event) {
		setData((value) => {
			return {
				...value,
				captainName: event.target.value,
			}
		})
	}

	function handleChangeShipName(event) {
		setData((value) => {
			return {
				...value,
				shipName: event.target.value,
			}
		})
	}

	function handleChangeSailorName(event) {
		setData((value) => {
			return {
				...value,
				sailorName: [...value.sailorName, event.target.value],
			}
		})
	}

	function handleChangeCodex() {
		setData((value) => {
			return {
				...value,
				codex: true,
			}
		})
	}

	function onClickPlus() {
		if(quantity < 10) {
			setQuantity(quantity + 1)
		}else{
			quantity = 10;
		}

	}
	function onClickMinus() {
		if(quantity > 1) {
			setQuantity(quantity - 1)
		}else{
			quantity = 1;
		}

	}

	function closeModal() {
		console.log(data);
		setState(true)
	}

	return (
		<div>
		<form style={style.form}>
			<h1>Заявка на участие в рейде на Испаснский золотой флот</h1>

			<InputName
				placeholder={'Имя капитана'}
				name={'captainName'}
				onChange={handleChangeCaptainName}
			/>
			<br />
			<InputName
				placeholder={'Имя корабля'}
				name={'shipName'}
				onChange={handleChangeShipName}
			/>

			<br />
			<br />

			<CheckBox />

			<div id='radio-btn'>
				<RadioButton onClick={handleChangeCodex} />
			</div>
			<h1>Члены команды:</h1>

			<div style={style.inOneLine}>
				<input placeholder='Имя матроса' key={0} onBlur={handleChangeSailorName}/>
				<div>
					<button onClick={onClickPlus} type={'button'} style={style.plusAndMinus}> +
					</button>
					<button onClick={onClickMinus} type={'button'} style={style.plusAndMinus}> -
					</button>
				</div>
			</div>
			<Seaman sizeSeaman={quantity} onBlur={handleChangeSailorName} />
			<br/>
			<div>
				<CheckButton
					value={'Cбросить'}
					type={'reset'}
				/>
				<CheckButton
					value={'Отправиться в плавание'}
					type={'button'}
					onClick={closeModal}
					style={style.checkButton}
				/>
			</div>

		</form>
			<h2><font id='introduced-data' color="#3AC1EF">Введённая информация:</font></h2>
			<p>Имя капитана: {data.captainName} </p>
			<p>Название корабля: {data.shipName}</p>
			<p>Имя матроса: {data.sailorName[0]}</p>
			<p>Имя матроса: {data.sailorName[1]}</p>
			<p>Имя матроса: {data.sailorName[2]}</p>
			<p>Имя матроса: {data.sailorName[3]}</p>
			<p>Имя матроса: {data.sailorName[4]}</p>
			<p>Имя матроса: {data.sailorName[5]}</p>
			<p>Имя матроса: {data.sailorName[6]}</p>
			<p>Имя матроса: {data.sailorName[7]}</p>
			<p>Имя матроса: {data.sailorName[8]}</p>
			<p>Имя матроса: {data.sailorName[9]}</p>
		</div>
	)
}

export default Form
