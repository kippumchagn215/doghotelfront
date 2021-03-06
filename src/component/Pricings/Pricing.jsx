import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../Auth";
import PricingItem from "./PricingItem";
function Pricing() {
  const use = useAuth();
  const Auth = localStorage.getItem("current") === "true";
  const history = useHistory();
  const RouteChange = (price, room, description) => {
    if (Auth !== true) {
      history.push("/signin");
    } else {
      history.push("/checkout", { price, room, description });
    }
  };

  return (
    <section id="pricings">
      <h2>A Plan for Every Dog's Needs</h2>
      <strong>
        <em>Simple and affordable price plans for your and your dog.</em>
      </strong>
      <div className="row">
        <PricingItem
          title={"Single Room"}
          price={30}
          deal1="Free dog snacks"
          deal2="Lullaby for your dog"
          deal3="Provide various toys"
          onclick={RouteChange}
        />
        <PricingItem
          title={"Sweet Room"}
          price={50}
          deal1={"Free dog snacks and massage"}
          deal2={"Lullaby for your dog"}
          deal3={"Provide various toys"}
          onclick={RouteChange}
        />
        <PricingItem
          title={"Kings Room"}
          price={70}
          deal1={"Free dog snacks and massage"}
          deal2={"Lullaby for your dog and walk service"}
          deal3={"Provide various toys"}
          onclick={RouteChange}
        />
      </div>
    </section>
  );
}
export default Pricing;
