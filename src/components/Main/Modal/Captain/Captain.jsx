const Captain = ({changeCaptainName, changeBoatName, captainName, boatName}) => (
    <div className="modal__captain">
        <input onChange={changeCaptainName} value={captainName} type="text" className="modal__captain--name" placeholder="Captain name(min 3 symbols)"/>
        <input onChange={changeBoatName} value={boatName} type="text" className="modal__captain--boat" placeholder="Captain boat(min 3 symbols)"/>
    </div>
);

export default Captain;