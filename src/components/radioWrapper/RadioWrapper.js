import RadioBtn from '../radioBtn/RadioBtn';
import Title from '../title/Title';
import './RadioWrapper.css';

const RadioWrapper = () => {
  return (
    <div className="radio__wrapper">
      <Title text="А полностью ли?" />
      <RadioBtn id="radio1" value="Чту полностью" />
      <RadioBtn id="radio2" value="Чту не полностью" />
    </div>
  );
};

export default RadioWrapper;
