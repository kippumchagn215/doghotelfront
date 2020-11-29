import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const darrow = <FontAwesomeIcon icon={"chevron-down"} />;
const Detail = (props) => {
  const [Clicked, setClicked] = useState(false);
  return (
    <li className="list-group-item fquestion-item">
      <button className="help-btn" onClick={() => setClicked(!Clicked)}>
        {darrow}
      </button>{" "}
      {props.title}
      {Clicked ? (
        <div>
          <ul>
            {props.content.map((element, index) => {
              return (
                <li className="help-detail" key={index}>
                  {element}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </li>
  );
};

export default Detail;
