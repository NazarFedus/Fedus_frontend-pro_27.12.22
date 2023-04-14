import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function (count: number) {
  const stars = Array.from({ length: count }, (_, i) => (
    <FontAwesomeIcon
      icon={faStar}
      style={{ color: "#f0c905", transform: "scale(1.2)", margin: '0px 2px' }}
    />
  ));
  console.log(stars)

  return stars;
}
