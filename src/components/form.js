import React, { useState } from 'react'
import InputField from './input'
import CheckBox from './checkbox'
import Team from './team'
import ActionButton from './button'

export default function Form({ state, setState }) {
	let [count, setCount] = useState(0)
	let [obj, setObj] = useState({
		name: '',
		surname: '',
		rules: '',
		team: '',
	})

	function PlusTeamValue() {
		setCount(count + 1)
	}
	function MinusTeamValue() {
		setCount(count - 1)
	}

	function updateName(e) {
		setObj((prev) => {
			return {
				...prev,
				name: e.target.value,
			}
		})
	}
	function updateSurname(e) {
		setObj((prev) => {
			return {
				...prev,
				surname: e.target.value,
			}
		})
	}
	function updateTeam(e) {
		setObj((prev) => {
			return {
				...prev,
				team: [...prev.team, e.target.value],
			}
		})
	}
	function updateRules(e) {
		setObj((prev) => {
			return {
				...prev,
				rules: true,
			}
		})
	}
	function closeModal() {
		setState(true)
		console.log(obj)
	}
	return (
		<form className='main-wrapper'>
			<h2>Заявка на участие в рейде на Испаснский золотой флот</h2>

			<InputField
				placeholder={'Имя капитана'}
				name={'name'}
				onChange={updateName}
			/>
			<InputField
				placeholder={'Имя корабля'}
				name={'surname'}
				onChange={updateSurname}
			/>
			<CheckBox onClick={updateRules} />
			<h2>Члены команды:</h2>
			<Team teamValue={count} onBlur={updateTeam} />
			<div>
				<button className='button-plus' onClick={PlusTeamValue} type={'button'}>
					+
				</button>
				<button
					className='button-minus'
					onClick={MinusTeamValue}
					type={'button'}>
					-
				</button>
			</div>
			<div>
				<ActionButton message={'Cбросить'} type={'reset'} />
				<ActionButton
					message={'Отправить'}
					type={'button'}
					onClick={closeModal}
				/>
			</div>
		</form>
	)
}