"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "./util/useMediaQuery";

const navMotion = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1024px)");

  return (
    <nav className="flex">
      {matches && (
        <div className="flex gap-12">
          <a href="#">Navigation Link</a>
          <a href="#">Navigation Link</a>
          <a href="#">Navigation Link</a>
        </div>
      )}

      {!matches && (
        <div
          className="space-y-1.5 cursor-pointer z-50"
          onClick={() => setToggled((prevToggle) => !prevToggle)}
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className="block h-0.5 w-8 bg-black"
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 24 }}
            className="block h-0.5 w-6 bg-black"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 16,
            }}
            className="block h-0.5 w-4 bg-black"
          ></motion.span>
        </div>
      )}

      {toggled && !matches && (
        <div className="fixed flex justify-center items-center bg-white bottom-0 left-0 w-full h-screen">
          <motion.div
            variants={navMotion}
            animate="visible"
            initial="hidden"
            className="flex flex-col gap-24 text-lg"
          >
            <motion.a variants={itemMotion} href="#">
              Navigation Link
            </motion.a>
            <motion.a variants={itemMotion} href="#">
              Navigation Link
            </motion.a>
            <motion.a variants={itemMotion} href="#">
              Navigation Link
            </motion.a>
          </motion.div>
        </div>
      )}
    </nav>
  );
}
