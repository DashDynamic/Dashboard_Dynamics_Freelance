import React, { useEffect, useState } from "react";
import Landing from "../components/Landing";
import { motion } from "framer-motion";

import { isMobile } from "react-device-detect";

export default function Market() {
  let [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);
  return (
    <div id="Market">
      <Landing>
        {/* <h1>REVOLUTIONIZED INFRUSTRUCTURE FOR SEAMLESS ELECTRIC MOBILITY</h1> */}
        {/* <img src="../assets/market/landing.png"
        /> */}
      </Landing>
      <div className="body">
        <div className="div1">
          <img src="../assets/market/market_2.png" alt="" />
          <motion.p
            className="p1"
            // initial={{x: "-200%"}}
            whileInView={{ x: "25%", y: "-40%" }}
            transition={{
              type: "spring",
              stiffness: 20,
            }}
          >
            Hybrid Electric Vehicles <br /> Plug-In Hybrid Electric Vehicles{" "}
            <br /> Battery Electric Vehicles
          </motion.p>
          <motion.div
            className="p2"
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            transition={{
              type: "spring",
              stiffness: 20,
            }}
          >
            <h1>What are Electric Vehicles</h1>
            <p>
              EVs are vehicles that run on electricity and an electric motor
              instead of a standard internal combustion engine that burns
              gasoline. These electric motors are driven by electricity, stored
              in batteries.
            </p>
          </motion.div>
        </div>
        <p className="div2">
          Batteries can only be charged with direct current (DC) electric power,
          while most electricity is delivered from the power grid as alternating
          current (AC). Therefore, for charging electric vehicles, a charging
          station or electric vehicle supply equipment (EVSE) is required. We
          provide EVSE as a wireless technology in three applications.
        </p>

        <div className="tiles">
          <h1>Static Charging</h1>
          <div className="content">
            {!mobile && <img src="../assets/market/market_tile_1.png" alt="" />}

            <div className="text">
              <p>
                When the vehicle is stationary, it can be charged conveniently
                by parking it in a designated space or a garage equipped with a
                Dash Vehicle Pad. This system features a wireless charger on the
                ground and a corresponding receiver, known as the dash car pad,
                installed underneath the vehicle.
              </p>
              {mobile && (
                <img src="../assets/market/market_tile_1.png" alt="" />
              )}
              <p>
                To commence charging, aligning the receiver and transmitter is
                necessary before leaving the vehicle. Factors such as the
                distance between the transmitter and receiver, the pad sizes,
                and the power level of the AC supply impact the charging
                duration.
              </p>
            </div>
          </div>
          <h1>Semi-dynamic Charging</h1>
          <div className="content">
            <div className="text">
              <p>
                Semi-dynamic charging refers to a scenario where vehicles
                operate in a cyclic pattern, with regular intervals of starting
                and stopping along a predetermined route.
              </p>
              {mobile && (
                <img src="../assets/market/market_tile_2.png" alt="" />
              )}
              <p>
                During this process, electric vehicles (EVs) can rapidly acquire
                their initial charge, while power snacking becomes a viable
                solution to alleviate range concerns for both commercial and
                residential users.
              </p>
            </div>
            {!mobile && <img src="../assets/market/market_tile_2.png" alt="" />}
          </div>
          <h1>Dynamic Charging</h1>
          <div className="content">
            {!mobile && <img src="../assets/market/market_tile_3.png" alt="" />}
            <div className="text">
              <p>
                In this scenario, the charging process occurs while the vehicle
                is in motion. A fixed ground charger serves the purpose of
                transmitting electricity to the receiver coil located within the
                mobile vehicle, spanning a limited distance of up to 250 mm.
              </p>
              {mobile && (
                <img src="../assets/market/market_tile_3.png" alt="" />
              )}
              <p>
                As a result, the vehicle's battery can be consistently
                replenished while it is in motion, traversing roads and
                highways. We are developing a dynamic wireless EV charging
                system that has the potential to recharge moving cars, which
                could help eliminate range anxiety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
