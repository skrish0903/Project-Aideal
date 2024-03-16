import React from "react";
// import { motion } from "framer-motion";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./combopopup.scss";

const data = [
  {
    id: 1,
    title: "You will save",
    save: "₹0",
    description: "1 Month",
    price: "₹1200 for 30 days",
  },
  {
    id: 2,
    title: "You will save",
    save: "₹200",
    description: "2 Months",
    price: "₹2200 for 60 days",
  },
  {
    id: 3,
    title: "You will save",
    save: "₹500",
    description: "3 Months",
    price: "₹3100 for 90 days",
  },
  {
    id: 4,
    title: "You will save",
    save: "₹1200",
    description: "6 Months",
    price: "₹6000 for 180 days",
  },
  {
    id: 5,
    title: "You will save",
    save: "₹3400",
    description: "12 Months",
    price: "₹11000 for 360 days",
  },
  // ...other AI tools
];
// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 1,
// };

function ComboPopup() {
  return (
    <div className="comboPopUp">
      <h1 className="PopUp-heading">How Many Month Access You Want ?</h1>

      <div className="comboPopUpContainer">
        {data.map((d) => (
          <div
            className={`comboPopUpbox ${
              d.id === 3 || d.id === 5 ? "tall" : ""
            }`}
          >
            {d.id === 3 ? (
              <img src="Most Popular.png" alt="Image" className="batch" />
            ) : (
              ""
            )}
            {d.id === 5 ? (
              <img src="Best Choice 3.png" alt="Image" className="batch" />
            ) : (
              ""
            )}
            <h2>{d.title}</h2>
            <h4>{d.save}</h4>
            <h2>{d.description}</h2>
            <h3>{d.price}</h3>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComboPopup;
