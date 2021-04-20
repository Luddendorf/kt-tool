import CaptainBlock from '../captainBlock/CaptainBlock';
import Checkbox from '../checkbox/Checkbox';
import Title from '../title/Title';
import TeamBlock from '../teamBlock/TeamBlock';
import FormBtnWrapper from '../formBtnWrapper/FormBtnWrapper';
import RadioWrapper from '../radioWrapper/RadioWrapper';
import './Form.css';

const Form = () => {
  return (
    <form>
      <CaptainBlock />
      <Title text="Чтит ли капитан пиратский кодекс чести?" />
      <Checkbox />
      <RadioWrapper />
      <TeamBlock />
      <FormBtnWrapper />
    </form>
  );
};

export default Form;
