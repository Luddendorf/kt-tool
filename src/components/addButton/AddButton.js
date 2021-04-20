const AddButton = (props) => {
  return (
    <button onClick={(event) => props.onInputAdded(event)}>
      {props.value}
    </button>
  );
};

export default AddButton;
