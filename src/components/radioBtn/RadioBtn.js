const FormRadioBtn = (props) => {
  return (
    <>
      <input type="radio" name="radio" id={props.id} />
      <label htmlFor={props.id}>{props.value}</label>
    </>
  );
};

export default FormRadioBtn;
