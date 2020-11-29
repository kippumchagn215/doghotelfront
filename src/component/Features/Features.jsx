import React from "react"
import FeaturesItem from "./FeaturesItem"
function Features(){

    return(
    <section id = "features">
    <div className="row">
        <FeaturesItem icon={"bone"} title={"Healthy Snacks"} content={"We give free organic and healty snacks to your dogs"}/>
        <FeaturesItem icon={"user-tie"} title={"Elite Staffs"} content={"Consist of Staff who are professionals at dog care"}/>
        <FeaturesItem icon={"heart"} title={"Best Service"} content={"We guarantee the best service for our customers"}/>
    </div>
    </section>
    );
}
export default Features;
