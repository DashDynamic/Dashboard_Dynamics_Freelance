import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { isMobile } from "react-device-detect";

export default function UseCase() {
  let [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  //LANDING PG ANIMATION
  const opacity = useTransform(scrollYProgress, [0, 0.95], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.95], [1, 0.9]);

  return (
    <div id="UseCase">
      <div className="userBase">
        {!mobile && (
          <h1>From problem-solving to game-changing, always in action</h1>
        )}

        <div className="useCaseGrid">
          <div>
            <a href="" className="a1">
              <motion.img
                src="../assets/Home/home_usecase_1.png"
                className="g1"
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                }}
              />
              <p>Residential</p>
            </a>
            <a href="" className="a2">
              <motion.img
                src="../assets/Home/home_usecase_2.png"
                className="g2"
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                }}
              />
              <p>Multidevice</p>
            </a>
            <a href="/ev_manufacturer" className="a3">
              <motion.img
                src="../assets/Home/home_usecase_3.png"
                className="g3"
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                }}
              />
              <p>Manufacturer</p>
            </a>
          </div>
          <div>
            <a href="" className="a4">
              <motion.img
                src="../assets/Home/home_usecase_4.png"
                className="g4"
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                }}
              />
              <p>Drone</p>
            </a>
            <a href="/Charge" className="a5">
              <motion.img
                src="../assets/UseCase/grid5.png"
                className="g5"
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                }}
              />
              <p>Charge point operator</p>
            </a>
            <a href="/Fleets" className="a6">
              <motion.img
                src="../assets/Home/home_usecase_6.png"
                className="g6"
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                }}
              />
              <p>Fleets</p>
            </a>
          </div>
        </div>
      </div>
      <h1 className="downHeading">
        From fueling commercial fleets to supporting charge point operators,
        Dash’s wireless charging {!mobile && <br />} technology serves its
        purpose in multiple zones.
      </h1>
    </div>
  );
}
