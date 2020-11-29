import React from "react"
import Testimonial from "./Testimonial"
function Carousel() {
  //TODO get one more dog for testimonial
  return (
    <section id="testimonials">
      <div id="carouselExampleControls" className="carousel slide" data-ride="false" data-interval="false">
        <div className="carousel-inner">
          <Testimonial active={"active"}location={"Coco from Dallas,Tx"} imgalt={"Coco img"} img={"/images/cocobaby.jpg"} content={"Most comfortable and satisfying hotel I've ever used , I will definitetly come again with my sister Angel"} />
          <Testimonial location={"Angel from Dallas,Tx"} imgalt={"Angel img"} img={"/images/angelpray.jpg"} content={"I was recommended by my sister coco, and it was the best expereince I had in my dog life, Thanks Coco!"} />
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
}
export default Carousel;