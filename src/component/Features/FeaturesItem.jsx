import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function FeaturesItem(props){
    return(
        <div className="feature-box col-lg-4">
        <FontAwesomeIcon className ="feature-icon" icon ={props.icon}/>
        <h3>{props.title}</h3>
        <em className = "feature_txt">{props.content}</em>
      </div>
    );
}
export default FeaturesItem