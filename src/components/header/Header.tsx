import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faScaleBalanced,
  faHeart,
  faBasketShopping
} from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@mui/material";
import Input from "./input/Input";

export default function Header() {
  return (
    <header>
      <div className="header__catalog">
        <FontAwesomeIcon
          icon={faBars}
          style={{ color: "#fcfcfc", transform: "scale(1.5)" }}
        />
        <Typography
          variant="h6"
          style={{ fontFamily: "Arial", color: "white" }}
        >
          Каталог
        </Typography>
      </div>

      <Input />

      <div className="header__icon-wrapper">
        <button>
          <FontAwesomeIcon
            icon={faUser}
            style={{ color: "#fcfcfc", transform: "scale(1.5)" }}
          />
        </button>
        <button>
          <FontAwesomeIcon
            icon={faScaleBalanced}
            style={{ color: "#fcfcfc", transform: "scale(1.5)" }}
          />
        </button>
        <button>
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "#fcfcfc", transform: "scale(1.5)" }}
          />
        </button>
        <button>
          <FontAwesomeIcon
            icon={faBasketShopping}
            style={{ color: "#fcfcfc", transform: "scale(1.5)" }}
          />
        </button>
      </div>
    </header>
  );
}
