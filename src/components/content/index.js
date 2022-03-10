import React from "react";
import "./styles.scss";
import Sticky from "../sticky";

const Content = (props) => {
  return (
    <div className="content">
      <Sticky />
      {props.children}
    </div>
  );
};

export default Content;
