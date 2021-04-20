import { Component } from 'react';
import Input from '../input/Input';
import Title from '../title/Title';
import AddButton from '../addButton/AddButton';
import DeleteButton from '../deleteButton/DeleteButton';
import './TeamBlock.css';

export default class TeamBlock extends Component {
  constructor() {
    super();

    this.id = 1;

    this.state = {
      teamData: [{ id: 0 }],
    };

    this.addInput = (event) => {
      event.preventDefault();
      if (this.id < 10) {
        const newInput = { id: this.id++ };

        this.setState(({ teamData }) => {
          const newArr = [...teamData, newInput];
          return {
            teamData: newArr,
          };
        });
      }
    };

    this.deleteInput = (event) => {
      event.preventDefault();

      if (this.state.teamData.length > 1) {
        this.setState(({ teamData }) => {
          const newArr = [...teamData.slice(0, this.state.teamData.length - 1)];
          if (this.id !== 1) {
            this.id--;
          }
          return {
            teamData: newArr,
          };
        });
      }
    };
  }
  render() {
    const inputs = this.state.teamData.map((input) => {
      return (
        <li key={input.id}>
          <Input placeholder="Имя матроса" />
          <div className="team__block__btns">
            <AddButton onInputAdded={this.addInput} value="+" />
            <DeleteButton onInputDelete={this.deleteInput} value="-" />
          </div>
        </li>
      );
    });
    return (
      <>
        <Title text="Члены команды:" />
        <ul className="team__block">{inputs}</ul>
      </>
    );
  }
}
