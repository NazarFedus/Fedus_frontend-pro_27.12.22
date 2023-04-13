import "./styles.css";
import React, { useEffect, useState } from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMicrophone, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

type MyCallback = (arg: boolean) => void;

const Input = ({ onStateChange }: { onStateChange: MyCallback }) => {
  const [state, setState] = useState<boolean>(false);

  function handleStateChange() {
    const newState = !state;
    console.log(newState);
    setState(newState);
    onStateChange(newState);
    console.log(state);
    console.log("click from Default");
  }

  return (
    <div className="header__input-wrapper">
      <form>
        <input
          placeholder={!state ? "Пошук" : "Active"}
          onClick={handleStateChange}
        ></input>

        <div className="icon-wrapper">
          <button>
            <FontAwesomeIcon
              icon={faMicrophone}
              style={{ color: "#fcfcfc", transform: "scale(1.1)" }}
            />
          </button>
          <button>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#fcfcfc", transform: "scale(1.1)" }}
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
