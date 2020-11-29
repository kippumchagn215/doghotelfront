import React from "react"
function EmailSub() {
    return (
        <div className="email-sub">
            <div className="row">
                <div className="col sub-col">
                    <h6>Want to recieve discount coupons? Subcribe now!</h6>
                </div>
                <div className="col sub-col">
                    <div className="row">
                        <input className="sub-input" type="email" placeholder="Email Address"></input>
                        <button type="button" className="btn btn-info sub-btn btn-primary">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EmailSub;