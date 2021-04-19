const Visible = ({changeCheckBox, isVisible, changeRadio}) => (
    <div className="modal__visible">
        <input onChange={changeCheckBox} checked={isVisible} type="checkbox" name="modal__visible--checkbox" className="modal__captain--checkbox"/>
        <label htmlFor="modal__visible--checkbox">Does the captain know the code?</label>
        {
            isVisible && <div className="modal__visible--radio">
                <label htmlFor="isVisibleAll1">
                    <input onChange={changeRadio} type="radio" data-text="fully knows" className="isVisibleAll1" name="isVisibleAll"/>
                    <span>fully knows</span>
                </label>
                <label htmlFor="isVisibleAll2">
                    <input onChange={changeRadio} type="radio" data-text="partly knows" className="isVisibleAll2" name="isVisibleAll"/>
                    <span>partly knows</span>
                </label>
            </div>
        }
    </div>
);

export default Visible;