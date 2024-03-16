import { motion } from "framer-motion";
import React, { useState } from "react";

function Test() {
  const [open, setOpen] = useState(false);
  const variants = {
    visible: { opacity: 1, x: 800, transition: { type: "spring" } },
    hidden: { opacity: 0 },
  };
  return (
    <div className="course">
      <motion.div
        className="box"
        // initial={{ opacity: 0.5, scale: 0.5 }}
        // transition={{ duration: 2 }}
        // whileInView={{ opacity: 1, scale: 2 }}
        variants={variants}
        // initial="hidden"
        // animate="visible"
        // transition={{ duration: 2 }}
        animate={open ? "visible" : "hidden"}
      ></motion.div>
      <button onClick={() => setOpen((prev) => !prev)}>Click</button>
    </div>
  );
}

export default Test;
