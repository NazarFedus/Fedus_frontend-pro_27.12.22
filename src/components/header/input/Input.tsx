import "./styles.css";
import React, { useEffect, useState } from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMicrophone, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const Input = () => {

  const [state, setState] = useState<boolean>(false);

     const body = document.body;
     body.addEventListener('click', (e) => {
          if(!e.target) return
          e.target.tagName === 'INPUT' ? setState(true) : setState(false)
     })

  return (
    <div className="header__input-wrapper">
      <form>
        <input
          placeholder={!state ? "Пошук" : "Active"}
        ></input>

        <div className="icon-wrapper">
          <button>
            <FontAwesomeIcon
              icon={faMicrophone}
              style={{ color: "#fcfcfc", transform: "scale(1.1)" }}
              onClick={(e) => e.preventDefault()}
            />
          </button>
          <button>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#fcfcfc", transform: "scale(1.1)" }}
              onClick={(e) => e.preventDefault()}
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
