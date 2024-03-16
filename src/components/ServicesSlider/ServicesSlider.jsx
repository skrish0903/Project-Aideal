import React, { useState } from "react";
import { motion } from "framer-motion";
import "./servicesslider.scss"; // Import your CSS file

const AI_TOOLS_DATA = [
  {
    id: 1,
    logo: "/chatgptmain2.svg", // Adjust path to your logo image
    title: "ChatGPT",
    description:
      "Explore the wonders of ChatGPT, backed by OpenAI's advanced technology! With its vast knowledge base trained on diverse data sources, ChatGPT seamlessly generates human-like responses. Enjoy accurate language understanding, natural conversation flow, and adaptability to various contexts. Dive into the world of ChatGPT and experience the future of intelligent communication.",
    animation: {
      // rotate: [0, -10, 0], // Add your desired animation
      // scale: [1, 1.1, 1], // Add more animations if needed
    },
  },
  {
    id: 1,
    logo: "/BardAI.png", // Adjust path to your logo image
    title: "BardAI",
    description:
      "Large language model capable of generating text, translating languages, writing different kinds of creative content, and answering your questions in an informative way.",
    animation: {
      // rotate: [0, -10, 0], // Add your desired animation
      // scale: [1, 1.1, 1], // Add more animations if needed
    },
  },
  // ...other AI tools
];

const MotionSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="motion-slider">
      <motion.div
        className="slide-container"
        layout
        key={currentSlide}
        animate={AI_TOOLS_DATA[currentSlide].animation}
        // whileHover={{ scale: 1.1 }}
      >
        <motion.img
          className="slide-logo"
          src={AI_TOOLS_DATA[currentSlide].logo}
        />
        <div className="title-and-des">
          <h2 className="slide-title">{AI_TOOLS_DATA[currentSlide].title}</h2>
          <p className="slide-description">
            {AI_TOOLS_DATA[currentSlide].description}
          </p>
          <div className="SliderButton">
            <button>Access Now</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MotionSlider;
