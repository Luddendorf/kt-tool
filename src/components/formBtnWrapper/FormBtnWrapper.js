import FormBtn from '../formBtn/FormBtn';
import './FormBtnWrapper.css';

const FormBtnWrapper = () => {
  return (
    <div className="btn__wrapper">
      <FormBtn type="reset" value="Сбросить" />
      <FormBtn type="submit" value="Отправить" />
    </div>
  );
};

export default FormBtnWrapper;
