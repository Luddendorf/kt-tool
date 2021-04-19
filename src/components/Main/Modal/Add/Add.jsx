import SeamanItems from "./SeamanItems/SeamanItems";

const Add = ({changeValue,addSeaman,deleteSeaman,members,value}) => {
    return(
        <>
            <div className="modal__add">
                <input onChange={changeValue} value={value} type="text" className="modal__add--seaman" placeholder="Captain seaman(min 3 symbols)"/>
                <div onClick={addSeaman} className="modal__add--one">+</div>
            </div>
            <div className="captain__mates">Сaptain's mates(1 min - 5 max):</div>
            <ul className="modal__list">
                    {
                        !!members.length && members.map((person, index) => <SeamanItems key={index} value={person} deleteSeaman={deleteSeaman}/>)
                    }
            </ul>
        </>
    );
}

export default Add;