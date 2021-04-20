const FormBtn = (props) => {
  function onSubmit() {
    const form = document.querySelector('form');
    for (let elem of form.elements) {
      console.log(elem.value);
    }
  }
  function onReset() {
    console.log(1);
  }

  function checkClick(event) {
    event.preventDefault();
    event.target.type === 'submit' ? onSubmit() : onReset();
  }
  return (
    <button
      onClick={(event) => {
        checkClick(event);
      }}
      type={props.type}
    >
      {props.value}
    </button>
  );
};

export default FormBtn;
