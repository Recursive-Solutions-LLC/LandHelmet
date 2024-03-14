"use client"
import { useRef } from "react";
import "./Parallax.scss";
import {motion , useScroll, useTransform} from "framer-motion"
const Parallax = (data: any) => {
 const ref = useRef();
 const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start start", "end start"]
 });
 const yBg = useTransform(scrollYProgress,[0,1],["0%","80%"])
  return (
    <div
    ref={ref}
      className="parallax1 w-screen h-screen"
      style={{
        background:
          data.type === "services"
            ? "linear-gradient(180deg,#2f3237,#fff)"
            : "linear-gradient(180deg,#000,#111)",
      }}
    >
      <motion.h1 style={{y:yBg}}>{data.type === "services" ? "Whatr ssse DO ?" : "Whatr we DO"}</motion.h1>
      <motion.div className="cape1 w-screen h-screen z-30"></motion.div>
      <motion.div style={{x:yBg}} className="cape2 w-screen h-screen z-20"></motion.div>
      <motion.div style={{y:yBg}} className="cape3 w-screen h-screen z-20"></motion.div>
    </div>
  );
};
export default Parallax;
