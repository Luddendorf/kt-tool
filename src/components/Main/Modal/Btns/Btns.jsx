const Btns = ({clearModal,checkAllInformation, state}) => {

    const captainName = state.captainName;
    const boatName = state.boatName;
    const members = state.members;

    const validateFields = () => {
        if (captainName.trim().length >= 3 && boatName.trim().length >= 3 && members.length >=1){
            checkAllInformation(
                state.captainName,
                state.boatName,
                state.isVisible,
                state.radio,
                state.members
            );
            clearModal();
        }
        else{
            console.log('Add all information!!!');
        }
    }

    return (
        <div className="modal__btns">
            <button onClick={clearModal} className="modal__btns--close">Clear</button>
            <button onClick={validateFields} className="modal__btns--add">Add Captain</button>
        </div>
    );
}

export default Btns;