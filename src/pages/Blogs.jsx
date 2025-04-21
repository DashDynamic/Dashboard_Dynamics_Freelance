// import React, { useRef } from 'react';
// import {motion, useScroll, useTransform} from "framer-motion";


// export default function Blogs() {

//     const contentRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: contentRef,
//     offset: ["start end", "end start"], 
//   });


//   const leftY = useTransform(scrollYProgress, [0, 0.7], ["15%", "0%"]);
//   const leftOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 1]);
//   const rightY = useTransform(scrollYProgress, [0, 0.3, 0.7], ["45%", "20%", "0%"]);
//   const rightOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 1]);



//   return (
//     <div id='Blogs'> 
//         <div className="top">
//             <h1>FUTERISTIC WIRELESS TECHNOLOGY TO SUPPORT ECO-CONCIOUS TRANSPORTATION.</h1>
//             <img className='Home_pg_img' src="../assets/blog/blog_pg_img.png" alt="" />
//             <div className='home_pg_div' />
//         </div>
//         <div ref={contentRef} className="content">
//             <div className="bg">
//                 {/* <div className="some"></div> */}
//                 <svg width="246" height="1819" viewBox="0 0 246 1819" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path opacity="0.3" d="M54.3071 210.639H54.4821V210.464V123.101H211.983H212.158V122.926V94.743V94.568H211.983H54.4821V29.3577H218.122H218.297V29.1827V1V0.825H218.122H23.386H23.211V1V210.464V210.639H23.386H54.3071ZM54.9004 500.862L54.8957 500.86C45.8164 497.263 41.2302 487.373 41.2302 471.046V322.507V322.332H41.0552H9.75974H9.58474V322.507V471.046C9.58474 485.434 11.0954 497.11 14.1236 506.069C17.1521 515.028 21.7031 521.28 27.7907 524.797L27.7911 524.797C33.866 528.281 45.199 530.881 61.7572 532.613C78.3244 534.345 100.149 535.211 127.23 535.211C154.436 535.211 176.43 534.295 193.209 532.463C209.981 530.631 221.569 527.882 227.942 524.199C233.708 520.881 238.015 514.775 240.88 505.917C243.746 497.059 245.175 485.433 245.175 471.046V322.507V322.332H245H213.705H213.53V322.507V471.046C213.53 487.375 209.042 497.265 200.162 500.86L200.158 500.862C195.696 502.793 187.394 504.249 175.226 505.221C163.067 506.193 147.068 506.679 127.23 506.679C107.617 506.679 91.7806 506.193 79.7207 505.221C67.6535 504.249 59.3882 502.793 54.9004 500.862ZM21.4394 643.839H21.2644V644.014V672.197V672.372H21.4394H115.375V853.478V853.653H115.55H146.846H147.021V853.478V672.372H240.732H240.907V672.197V644.014V643.839H240.732H21.4394ZM54.9004 1143.88L54.8957 1143.87C45.8164 1140.28 41.2302 1130.39 41.2302 1114.06V965.522V965.347H41.0552H9.75974H9.58474V965.522V1114.06C9.58474 1128.45 11.0954 1140.12 14.1236 1149.08C17.1521 1158.04 21.7031 1164.29 27.7907 1167.81L27.8782 1167.66L27.7911 1167.81C33.866 1171.3 45.199 1173.9 61.7572 1175.63C78.3244 1177.36 100.149 1178.23 127.23 1178.23C154.436 1178.23 176.43 1177.31 193.209 1175.48C209.981 1173.65 221.569 1170.9 227.942 1167.21C233.708 1163.89 238.015 1157.79 240.88 1148.93C243.746 1140.07 245.175 1128.45 245.175 1114.06V965.522V965.347H245H213.705H213.53V965.522V1114.06C213.53 1130.39 209.042 1140.28 200.162 1143.87L200.158 1143.88C195.696 1145.81 187.394 1147.26 175.226 1148.24C163.067 1149.21 147.068 1149.69 127.23 1149.69C107.617 1149.69 91.7806 1149.21 79.7207 1148.24C67.6535 1147.26 59.3882 1145.81 54.9004 1143.88ZM230.538 1305.01L230.537 1305.01C220.865 1292.9 207.11 1286.85 189.297 1286.85H1H0.825V1287.03V1496.49V1496.67H1H32.2955H32.4705V1496.49V1421.02H179.789C189.192 1421.02 197.242 1423.25 203.946 1427.71C210.446 1432.42 213.679 1438.2 213.679 1445.06V1496.49V1496.67H213.854H244.775H244.95V1496.49V1445.06C244.95 1434.81 241.893 1426.19 235.773 1419.23C231.531 1414.4 225.695 1410.46 218.272 1407.38C226.685 1403.7 232.829 1398.83 236.687 1392.75C242.204 1384.14 244.95 1371.14 244.95 1353.79C244.95 1333.57 240.152 1317.31 230.538 1305.01ZM176.719 1392.18H32.4705V1315.39H176.719C188.186 1315.39 196.526 1317.33 201.771 1321.18C209.691 1327.06 213.679 1337.91 213.679 1353.79C213.679 1369.71 209.79 1380.46 202.071 1386.09L202.07 1386.09C196.624 1390.14 188.184 1392.18 176.719 1392.18ZM20.8404 1608.36H20.6654V1608.54V1818V1818.18H20.8404H221.716H221.891V1818V1789.82V1789.64H221.716H52.3109V1726H215.876H216.051V1725.83V1697.64V1697.47H215.876H52.3109V1636.89H221.716H221.891V1636.72V1608.54V1608.36H221.716H20.8404Z" fill="url(#paint0_linear_1_1592)" stroke="#E4E8ED" stroke-width="0.35"/>
//                     <defs>
//                     <linearGradient id="paint0_linear_1_1592" x1="133.07" y1="-36.0248" x2="133.07" y2="2529.91" gradientUnits="userSpaceOnUse">
//                     <stop stop-color="#BCCDDE"/>
//                     <stop offset="1" stop-color="#E4E8ED" stop-opacity="0.34"/>
//                     </linearGradient>
//                     </defs>
//                 </svg>  
//             </div>
//             <motion.div className="left"
//                 style={{y: leftY, scale: leftOpacity}}
//             >
//                 <h1>The Future of Autonomous Electric Vehicles with Wireless Charging</h1>
//                 <br />
//                 <hr />
//                 <p>Autonomous electric vehicles (A-EVs) are revolutionizing the automotive industry by combining self-driving technology and clean, electric power. Recent advancements in A-EV development aim to improve safety, reduce emissions, and enhance mobility. Wireless charging technology complements this innovation, offering seamless and convenient charging solutions.
//                     <br />
//                         By integrating autonomous driving with wireless charging, A-EVs can autonomously navigate to charging stations, align with charging pads, and initiate charging without human intervention. This simplifies the charging process and enhances the user experience. 
//                         <br />
//                         Wireless charging allows continuous charging without human intervention. For example, autonomous electric taxis can wirelessly charge during short waiting periods, optimizing uptime. Strategically positioned wireless charging infrastructure maximizes resource utilization. 
//                         <br />
//                         The integration of autonomous driving and wireless charging supports sustainability goals. A-EVs powered by clean electricity reduce emissions. Additionally, wireless charging infrastructure can use renewable energy sources, further lowering the carbon footprint.</p>
//                 <img src="../assets/blog/blog_pg_img_2.png" alt="" />
//                 <p>The combination of autonomous electric vehicles and wireless charging holds immense potential for transportation. These innovations offer simplified charging, enhanced user experiences, continuous charging, and efficient infrastructure use. As A-EVs become more prevalent, wireless charging will create a sustainable and convenient ecosystem for electric transportation. With ongoing advancements and investments, a fully autonomous electric vehicle fleet with wireless charging capabilities is on the horizon, bringing us closer to a greener and more efficient transportation future</p>
//             </motion.div>
//             <motion.div className="right"
//                 style={{y: rightY, scale: rightOpacity}}
//             >
//                 <div className="tile">
//                     <img src="../assets/blog/blog_pg_img_3.png" alt="" />
//                     <h1>The Rise of Electric Vehicles: Navigating the Road to an Electric Future</h1>
//                     <br />
//                     <hr />
//                     <p>The global shift towards electric vehicles (EVs) is gathering momentum, driven by environmental concerns, government incentives, and technological advancements. As the popularity of EVs grows, it is crucial to address the challenges faced by EV owners and develop a reliable charging infrastructure to support their widespread use. 
//                         <br />To fully embrace the electric revolution, a comprehensive charging infrastructure is essential. While home charging is convenient for many, it is not feasible for everyone. Therefore, a robust public charging network is necessary in urban areas, public parking lots, workplaces, and major highways. By providing accessible charging options, range anxiety can be alleviated, encouraging more people to switch to EVs.</p>
//                     <div className="btn">

//                     <button>Read more</button>
//                     </div>
//                 </div>
//                     <br />
//                     <br />
//                     <br />
//                 <div className="tile">
//                     <h1>The Advantages of Dash Dynamic's Wireless Charging Technology for Electric Vehicles</h1>
//                     <br />
//                     <hr />
//                     <p>Wireless charging technology by Dash Dynamic has revolutionized the world of electric vehicles (EVs) by offering a convenient, efficient, and sustainable charging solution. The advantages of Dash Dynamic's innovative wireless charging technology are as follows:
//                         <br /> Reduced Carbon Footprint: Dash Dynamic's wireless charging simplifies EV construction and maintenance, leading to a reduced carbon footprint. This technology eliminates clutter and utilizes smaller batteries, minimizing waste and contributing to a more sustainable future.</p>
//                         <div className="btn">
//                     <button>Read more</button>
//                         </div>
//                 </div>
//             </motion.div>
//         </div>
//     </div>
//   )
// }
// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform } from "framer-motion";
// import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon


// export default function Blogs() {
//     const contentRef = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: contentRef,
//         offset: ["start end", "end start"], 
//     });

//     const leftY = useTransform(scrollYProgress, [0, 0.7], ["15%", "0%"]);
//     const leftOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 1]);
//     const rightY = useTransform(scrollYProgress, [0, 0.3, 0.7], ["45%", "20%", "0%"]);
//     const rightOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 1]);

//     return (
//         <div id='Blogs'> 
//             <div ref={contentRef} className="content">


//                 <motion.div className="left"
//                     style={{y: leftY, opacity: leftOpacity}}
//                 >
//                     <h1 className="blog-title">
//                         Wireless EVs Leading the Way to a Pollution-Free Transportation
//                     </h1>

//                                     {/* Author Section */}
//                 <div className="author-info">
//                     <p className="date">Monday, Jan 22, 2024</p>
//                     <div className="author">
//                         <a href="https://www.linkedin.com/in/ajeetprabhakar" target="_blank" rel="noopener noreferrer">
//                             <FaLinkedin className="linkedin-icon" />
//                             <span>By <strong>Ajeet Prabhakar</strong>, Dash Dynamic</span>
//                         </a>
//                     </div>
//                 </div>
//                     <hr />
//                     <p>
//                         Autonomous electric vehicles (A-EVs) are revolutionizing the automotive industry by combining self-driving technology and clean, electric power. Recent advancements in A-EV development aim to improve safety, reduce emissions, and enhance mobility. Wireless charging technology complements this innovation, offering seamless and convenient charging solutions.
//                         <br /><br />
//                         By integrating autonomous driving with wireless charging, A-EVs can autonomously navigate to charging stations, align with charging pads, and initiate charging without human intervention. This simplifies the charging process and enhances the user experience. 
//                         <br /><br />
//                         Wireless charging allows continuous charging without human intervention. For example, autonomous electric taxis can wirelessly charge during short waiting periods, optimizing uptime. Strategically positioned wireless charging infrastructure maximizes resource utilization. 
//                         <br /><br />
//                         The integration of autonomous driving and wireless charging supports sustainability goals. A-EVs powered by clean electricity reduce emissions. Additionally, wireless charging infrastructure can use renewable energy sources, further lowering the carbon footprint.
//                     </p>
//                     <img src="../assets/blog/blog_pg_img_2.png" alt="Autonomous electric vehicle charging" />
//                     <p>
//                         The combination of autonomous electric vehicles and wireless charging holds immense potential for transportation. These innovations offer simplified charging, enhanced user experiences, continuous charging, and efficient infrastructure use. As A-EVs become more prevalent, wireless charging will create a sustainable and convenient ecosystem for electric transportation. With ongoing advancements and investments, a fully autonomous electric vehicle fleet with wireless charging capabilities is on the horizon, bringing us closer to a greener and more efficient transportation future.
//                     </p>
//                 </motion.div>
//                 <motion.div className="centre"
//                     style={{y: rightY, opacity: rightOpacity}}
//                 >
//                     <br />
//                     <br />
//                     <br />
//                 </motion.div>
//             </div>
//         </div>
//     );
// }
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
const blogPosts = [
  {
    id: 1,
    title: "Wireless EVs leading the way to a pollution-free transportation",
    date: "Monday, Jan 22, 2024",
    author: "Ajeet Prabhakar",
    company: "Dash Dynamic",
    category: "Wireless Charging",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Our Evolving EV Landscape in India: Growth or Transformation?",
    date: "Tuesday, Jan 16, 2024",
    author: "Ajeet Prabhakar",
    company: "Dash Dynamic",
    category: "Market Insights",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Wireless EVs leading the way to a pollution-free transportation",
    date: "Monday, Jan 8, 2024",
    author: "Ajeet Prabhakar",
    company: "Dash Dynamic",
    category: "Wireless Charging",
    readTime: "8 min read"
  },
  {
    id: 4,
    title: "Wireless EVs leading the way to a pollution-free transportation",
    date: "Monday, Jan 1, 2024",
    author: "Ajeet Prabhakar",
    company: "Dash Dynamic",
  
    category: "Wireless Charging",
    readTime: "8 min read"
  },
  {
    id: 5,
    title: "Wireless EVs leading the way to a pollution-free transportation",
    date: "Monday, Dec 25, 2023",
    author: "Ajeet Prabhakar",
    company: "Dash Dynamic",
    category: "Wireless Charging",
    readTime: "8 min read"
  },
  {
    id: 6,
    title: "The Future of Urban Mobility",
    date: "Monday, Dec 18, 2023",
    author: "Ajeet Prabhakar",
    company: "Dash Dynamic",
    category: "Urban Planning",
    readTime: "7 min read"
  }
];

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;
  
  // Get current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogPosts.slice(indexOfFirstBlog, indexOfLastBlog);
  
  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  return (
    <div id="Blogs">
      <div className="content">
        <div className="left">
          <h1>Dash Dynamic Blog</h1>
          
          {currentBlogs.map(blog => (
            <div key={blog.id} className="blog-card">
              <div className="blog-date">{blog.date}</div>
              <h3 className="blog-title">
                    <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                </h3>
              <div className="blog-meta">
                <span className="blog-category">{blog.category}</span>
                <span className="blog-separator">•</span>
                <span className="blog-read-time">{blog.readTime}</span>
              </div>
              <div className="blog-author">
                By <span className="author-name">{blog.author}</span>, {blog.company}
              </div>
              <Link to={`/blog/${blog.id}`} className="read-more-link">
                  Read more...
              </Link>
            </div>
          ))}
          
          <div className="pagination">
            {Array.from({ length: Math.ceil(blogPosts.length / blogsPerPage) }, (_, i) => (
              <button
                key={i + 1}
                className={`pagination-button ${currentPage === i + 1 ? 'active' : ''}`}
                onClick={() => paginate(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <div></div>
            
            {currentPage < Math.ceil(blogPosts.length / blogsPerPage) && (
              <button 
                className="pagination-button next" 
                onClick={() => paginate(currentPage + 1)}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;