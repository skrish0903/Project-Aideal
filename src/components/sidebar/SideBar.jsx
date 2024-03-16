import React, { useState } from "react";
import { motion } from "framer-motion";
import Tooglebutton from "./toggleButton/toggleButton";
import Links from "./links/links";
import "./sidebar.scss";

function SideBar() {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <Tooglebutton setOpen={setOpen} />
    </motion.div>
  );
}

export default SideBar;
