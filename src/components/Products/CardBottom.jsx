import React from "react";
import { Badge, CBottom, CBottomTitle, Pricing, Title } from "./ProductStyle";

function CardBottom({ currentColor }) {
  return (
    <div>
      <CBottom>
        <CBottomTitle>Access Now</CBottomTitle>
        <Badge>Best tool</Badge>
        <Title>High Demand Tool</Title>
        <Pricing currentColor={currentColor}>
          <span>USD</span>
          <span>5.00</span>
        </Pricing>
      </CBottom>
    </div>
  );
}

export default CardBottom;
// <Stars>
// <i className="fa-solid fa-star"></i>
// <i className="fa-solid fa-star"></i>
// <i className="fa-solid fa-star"></i>
// <i className="fa-solid fa-star"></i>
// <i className="fa-solid fa-star"></i>
// </Stars>
