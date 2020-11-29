import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function FollowIcon(props) {
    const array =["fab"];
    array.push(props.icon);
    return (
        <a href={props.href}><FontAwesomeIcon className = "follow-icon"icon={array} /></a>
    );
}
export default FollowIcon;