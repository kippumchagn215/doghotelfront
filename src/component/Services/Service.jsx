import React from "react"
import ServiceItem from "./ServiceItem"
function Service(){
    return (
        <section id="services">
        <h2>Our Services</h2>
        <div className="row card-div">
        <ServiceItem img={"images/cocodriving.jpg"} imgalt={"coco driving"} txt={"Free driving lesson for your dog!!"}/>
        <ServiceItem img={"images/angelsleep.jpg"} imgalt={"angel sleeping"} txt={"Best Comfortable pillow and blanket for a dog"}/>
        <ServiceItem img={"images/cocosnack.jpg"} imgalt={"coco eating snacks"} txt={"Healthy organic snacks for your dog"}/>
        </div>
        </section>
    );
}
export default Service;