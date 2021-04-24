import React from "react";
import TextField from "../textField/TextField";

const TeamMembers = ({ marinersList, setMarinersList }) => {
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...marinersList];
    list[index][name] = value;
    setMarinersList(list);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    setMarinersList([...marinersList, { marinerName: "" }]);
  };

  const handleRemoveClick = (e) => {
    e.preventDefault();
    const list = [...marinersList];
    list.pop();
    setMarinersList(list);
  };

  return (
    <div className="teamMembers">
      <div>
        <span>Team members:</span>
        <div className="teamMembersBtns">
          {marinersList.length < 10 && (
            <button
              className="btnPlus"
              onClick={handleAddClick}
              name={"btnPlus"}
            >
              +
            </button>
          )}
          {marinersList.length > 1 && (
            <button
              className="btnMinus"
              onClick={handleRemoveClick}
              name={"btnMinus"}
            >
              -
            </button>
          )}
        </div>
      </div>
      <div className="teamMembersCount">
        {marinersList.map((item, id) => (
          <TextField
            key={id}
            value={item.marinerName}
            className="marinerName"
            name={"marinerName"}
            type={"text"}
            onChange={(e) => handleInputChange(e, id)}
            placeholder={"mariner's name"}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
