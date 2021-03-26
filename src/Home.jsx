import React from "react";
import Iframe from "react-iframe";
import "./App.css";

const disableBtns = () => {
  const checkbox = document.querySelector("#radio");
  const radioB = document.querySelectorAll("input[type=radio]");
  radioB.forEach((item) =>
    checkbox.checked ? (item.disabled = true) : (item.disabled = false)
  );
};

const Home = () => {
  return (
    <div className="home__wrapper">
      <div className="html__content">
        <h1 className="item">HTMl tags</h1>
        <select name="cases" id="cases">
          <option value="solve-1">solution 1</option>
          <option value="solve-2">solution 2</option>
          <option value="solve-3">solution 3</option>
          <option value="solve-4">solution 4</option>
        </select>

        <img
          className="img"
          src="https://wallpaperaccess.com/full/345774.png"
          alt="here must be img..."
        />

        <div className="example__form">
          <form action="">
            <p>
              <label htmlFor="text">text input</label>
            </p>
            <input type="text" name="text" />
            <button type="reset">reset</button>
            <button type="submit">submit</button>
          </form>
        </div>

        <div className="radio">
          <label htmlFor="radioBtns">Disable btns</label>
          <input
            type="checkbox"
            name="checkBoxBtns"
            id="radio"
            onClick={disableBtns}
          />
          <input name="knowledge" type="radio" value="JS" />
          <label htmlFor="">JS</label>
          <input name="knowledge" type="radio" value="React" />
          <label htmlFor="">React</label>
          <input name="knowledge" type="radio" value="Redux" />
          <label htmlFor="">Redux</label>
        </div>
      </div>

      <h1>FORM</h1>
      <div className="main__form">
        <form action="" className="formMain">
          <label htmlFor="name">name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="textarea">inforamtion</label>
          <textarea name="textarea" id="" cols="30" rows="10"></textarea>
        </form>
      </div>

      {/* <Iframe
        src="./Iframe.jsx"
        width="450px"
        height="450px"
        id="idrameId"
        className="iframe"
      /> */}
    </div>
  );
};

export default Home;
