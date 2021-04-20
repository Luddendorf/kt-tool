const DeleteButton = (props) => {
  return (
    <button onClick={(event) => props.onInputDelete(event)}>
      {props.value}
    </button>
  );
};

export default DeleteButton;
