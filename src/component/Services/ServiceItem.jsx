import React from "react"
function ServiceItem(props) {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="card">
                <img className="card-img" src={props.img} alt={props.imgalt}></img>
            </div>
            <div className="card-body">
                <h5 className="card-text">{props.txt}</h5>
            </div>
        </div>

    );
}
export default ServiceItem