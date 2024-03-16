import React from "react";
import { motion } from "framer-motion";
import "./datasecurity.scss";
import { slideInFromTop } from "../utils/motion";

function DataSecurity() {
  return (
    <div>
      {/* Overlay container for text and lock */}
      <div className="DataSecurityContainer">
        <motion.div variants={slideInFromTop} className="headingDatasecurity">
          <span className="headingDatasecurity">
            Performance <span className="dataSecurityandclass">&</span> Security
          </span>
        </motion.div>
        {/* Lock element */}
        <div className="lockTop">
          <motion.img
            src="public/LockTop.png"
            alt="Lock Top"
            width={70}
            height={70}
            className="translate-y-5 transition-all duration-200  lockTop"
          />
          <motion.img
            src="public/LockMain.png"
            alt="Lock Main"
            width={95}
            height={95}
            className="z-20 lockBottom"
          />
        </div>
        {/* Video element beneath the overlay */}
        <div>
          <video
            loop
            muted
            autoPlay
            playsInline
            preload="false"
            className="videoDataSecurity"
            src="/encryption.webm"
          />
        </div>
      </div>
    </div>
  );
}

export default DataSecurity;
