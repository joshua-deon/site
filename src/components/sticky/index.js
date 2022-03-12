import React from "react";
import "./styles.scss";
import image from "../../images/josh-photo.jpg";
import resume from "../../images/resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Sticky = () => {
  return (
    <div className="sticky">
      <div className="sticky__image">
        <img src={image} />
      </div>
      <div className="sticky__header">
        <div className="sticky__name">Joshua Johnson</div>
        <div className="sticky__location">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="sticky__location-icon"
          />
          New York, NY
        </div>
      </div>

      <ul className="sticky__skills">
        <li className="sticky__skill">HTML</li>
        <li className="sticky__skill">CSS</li>
        <li className="sticky__skill">JavaScript</li>
        <li className="sticky__skill">React.js</li>
        <li className="sticky__skill">TypeScript</li>
        <li className="sticky__skill">Angular</li>
      </ul>

      <div className="sticky__resume">
        <a href={resume} className="button">
          View Resume
        </a>
      </div>
    </div>
  );
};

export default Sticky;
