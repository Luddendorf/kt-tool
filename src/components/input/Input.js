import './Input.css';

const FormInput = (props) => {
  return (
    <input type="text" name={props.name} placeholder={props.placeholder} />
  );
};

export default FormInput;
