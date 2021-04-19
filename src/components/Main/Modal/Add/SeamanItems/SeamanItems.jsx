const SeamanItems = ({value, deleteSeaman}) => (
    <li>
        <div className="modal__list--name">{value}</div>
        <div onClick={deleteSeaman} className="modal__list--minus">-</div>
    </li>
);

export default SeamanItems;