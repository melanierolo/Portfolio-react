import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const SkillItem = (props) => {
  const { itemName } = props;
  return (
    <div className="skill-item">
      <FontAwesomeIcon className="skill-item__icon" icon={faCircleCheck} />
      <p className="skill-item__name"> {itemName}</p>
    </div>
  );
};

export default SkillItem;
