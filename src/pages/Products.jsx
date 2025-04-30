import React from 'react';
import {motion} from "framer-motion";
import ProductLanding from '../components/ProductLanding';

const productVariant = {
  hidden: {
    opacity: 0, scale: 1, y: "40%"
  },
  visible: {
    opacity: 1, scale: 1, y: "0%",
  },
  
}

export default function Products() {

  return (
    <div id="product">
      <ProductLanding/>

        <div className="sec_1">
        <div className="head">
          <h1 className='subHeading'>Our product is as wide as our range</h1>
          </div>
          <h1 className='ttt'>Dash Dynamic’s highly efficient and unbeatable EV Charging solutions comes up with more to explore. It provides wireless technology for drone towers, charging for laptop, and heavy duty commercial vehicles for industrial purpose. </h1>
          <img className='web' src="../assets/products/range.png" alt="tyfhhhhhh" />
          <img className='mob' src="../assets/Home/homw_prod_mobile.png" alt="tyfhhhhhh" />
        </div>

        <div className="sec_2">
          <h1>Highest safety standards as per SAE specifications, <br/>Foreign Object Detection (F.O.D) 
</h1>
<img src="../assets/products/saeLogo.png" alt="SAE" />
        </div>

        <div className="sec_3">
          <img className='web' src="../assets/products/new.png" alt="" />
          <img className='web' src="../assets/products/p2.png" alt="" />
          <img className='web' src="../assets/products/p3.png" alt="" />
          <img className='web' src="../assets/products/p4.png" alt="" />
          <img className='web' src="../assets/products/p5.png" alt="" />
          <img className='web' src="../assets/products/p6.png" alt="" />
          <img className='web' src="../assets/products/p7.png" alt="" />


          {/* //Mobile */}
          <img className='mob' src="../assets/products/mobile.png" alt="" />
          <img className='mob' src="../assets/products/mp2.png" alt="" />
          <img className='mob' src="../assets/products/mp3.png" alt="" />
          <img className='mob' src="../assets/products/mp4.png" alt="" />
          <img className='mob' src="../assets/products/mp5.png" alt="" />
          <img className='mob' src="../assets/products/mp6.png" alt="" />
          <img className='mob' src="../assets/products/mp7.png" alt="" />
        </div>

    </div>
  );
}
