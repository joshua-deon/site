import React from "react";
import "./styles.scss";
import Sticky from "../sticky";

const Content = (props) => {
  return (
    <div className="content">
      <Sticky />
      <div className="content__children">{props.children}</div>
    </div>
  );
};

export default Content;
