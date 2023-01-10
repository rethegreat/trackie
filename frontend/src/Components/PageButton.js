import "./PageButton.css";
import { Link } from "react-router-dom";
import React from "react";

function PageButton(props) {
  return (
    <div className="next-page-button" onClick={props.onClick}>
      <Link
        className="button-title"
        to={props.to}
        refresh="true"
      >
        {props.title}
      </Link>
    </div>
  );
}

export default PageButton;
