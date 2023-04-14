import "./styles.css";
import React, { useEffect, useState } from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMicrophone, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const Input = () => {

  const [isActive, setIsActive] = useState<boolean>(false);

     const body = document.body;
     body.addEventListener('click', (e) => {
          if(!e.target) return
          (e.target as Element).nodeName === 'INPUT' ? setIsActive(true) : setIsActive(false)
     })

  return (
    <div className="header__input-wrapper">
      <form>
        <input
          placeholder={!isActive ? "Пошук" : "Active"}
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
