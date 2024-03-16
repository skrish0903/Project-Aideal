import React, { useState } from "react";
import "./buycombo.scss";
import { motion } from "framer-motion";
import ComboPopup from "../../PopupBuyCombo/ComboPopup";
import Model from "react-modal";

function BuyCombo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.div className="BuyCombContainer">
      <div className="boxContainer">
        <div className="box">
          <h2>Combo Mini</h2>
          <h4>$9/month</h4>
          <p>15 Tools</p>
          <button
            type="link"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            Buy Combo Mini
          </button>
          <Model
            isOpen={isModalOpen}
            onRequestClose={() => {
              setIsModalOpen(false);
            }}
            className="motion-slider"
          >
            <ComboPopup />
          </Model>
        </div>
        <div className="logo-box">
          <img src="Combo offer.png" />
        </div>
        <div className="box">
          <h2>Combo</h2>
          <h4>$15/month</h4>
          <p>20 Tools</p>
          <button
            type="link"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            Buy Combo
          </button>
          <Model
            isOpen={isModalOpen}
            onRequestClose={() => {
              setIsModalOpen(false);
            }}
            className="motion-slider"
          >
            <ComboPopup />
          </Model>
        </div>
      </div>
    </motion.div>
  );
}

export default BuyCombo;
