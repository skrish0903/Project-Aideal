import React from "react";
import "./services.scss";
import ServicesSlider from "../ServicesSlider/ServicesSlider";

function Services() {
  return (
    <div>
      <div className="servicesBody">
        <h3>
          We unlock the best AI tools at unbeatable prices, making them
          <span className="highlights-content"> affordable for everyone</span>.
          From creative wizards to data ninjas, we have something for{" "}
          <span className="highlights-content">every AI enthusiast</span>.
          Simplify your work, unleash your potential, and join the AI
          revolution!
        </h3>
      </div>
      <div>
        <ServicesSlider />
      </div>
    </div>
  );
}

export default Services;
