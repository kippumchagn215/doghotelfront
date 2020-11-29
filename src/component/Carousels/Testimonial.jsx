import React from "react"

function Testimonial(props) {
    return (
        <div className={`carousel-item ${props.active}`}>
            <h2>{props.content}</h2>
            <img className="d-block  carousel-img" src={props.img} alt={props.imgalt}></img>
            <em>{props.location}</em>
        </div>
    );
}
export default Testimonial;