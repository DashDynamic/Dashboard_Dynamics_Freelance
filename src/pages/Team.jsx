import React from 'react';
import {motion} from "framer-motion";
import TeamLanding from "../components/TeamLanding"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const tiles3Variant = {
  hiddenY: {
    opacity: 0.75, y: "15%"
  },
  visibleY: {
    opacity: 1, y: "0%",
  },
  hiddenL: {
    opacity: 0.75, x: "-10%"
  },
  visibleL: {
    opacity: 1, x: "0%",
  },
  hiddenR: {
    opacity: 0.75, x: "10%"
  },
  visibleR: {
    opacity: 1, x: "0%",
  }
}

export default function Team(){

 

  return ( 
    <div id='Team'>
        <TeamLanding/>
        <div className="teamMembers">
        <div className="head">
          <h1 className='subHeading'>OUR TEAM</h1>
          </div>
            <div className="teamGrid">
                <div className="grid fst">
                <motion.div className="member2 member"
                variants={tiles3Variant}
                initial="hiddenY"
                whileInView="visibleY"
                viewport={{ once: true }}
                transition= {{
                    type: "spring",
                    stiffness: 50,
                  }}>
                        <motion.img src="../assets/Board_members/Robin.png" alt="Robin Singh"
                        initial={{
                          scale: 1
                      }}
                        whileTap={{
                          scale: 0.95
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 60,
                        }}/>
                                    <a
                href="https://www.linkedin.com/in/robin-singh-b9952028/"
                className="linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="24"
                  height="24"
                  fill="#1B80E4"
                >
                  <rect x="17.397" y="166.28" width="106.716" height="328.97" />
                  <path d="M414.789,170.138c-1.133-0.355-2.207-0.743-3.396-1.078c-1.438-0.327-2.865-0.6-4.328-0.833 c-5.662-1.139-11.875-1.946-19.148-1.946c-62.211,0-101.678,45.372-114.674,62.894V166.28H166.526v328.97h106.716V315.813 c0,0,80.643-112.628,114.674-29.911V495.25h106.688V273.257C494.604,223.549,460.629,182.13,414.789,170.138z" />
                  <path d="M121.789,69.085c0,28.909-23.373,52.337-52.195,52.337c-28.824,0-52.196-23.429-52.196-52.337 c0-28.903,23.372-52.335,52.196-52.335C98.416,16.75,121.789,40.182,121.789,69.085z" />
                </svg>
              </a>

        
                    </motion.div>
                    <motion.div className="member1 member"
                    variants={tiles3Variant}
                    initial="hiddenY"
                    whileInView="visibleY"
                    viewport={{ once: true }}
                    transition= {{
                        type: "spring",
                        stiffness: 50,
                      }}>
                        <motion.img src="../assets/Board_members/Shashank.png" alt="Shashank Sawai"
                            initial={{
                              scale: 1
                            }}
                              whileTap={{
                                scale: 0.95
                              }}
                              transition={{
                                type: "spring",
                                stiffness: 60,
                              }}
                        />
                                <a
          href="https://www.linkedin.com/in/shashank-sawai-8a0511125/"
          className="linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="24"
            height="24"
            fill="#1B80E4"
          >
            <rect x="17.397" y="166.28" width="106.716" height="328.97" />
            <path d="M414.789,170.138c-1.133-0.355-2.207-0.743-3.396-1.078c-1.438-0.327-2.865-0.6-4.328-0.833 c-5.662-1.139-11.875-1.946-19.148-1.946c-62.211,0-101.678,45.372-114.674,62.894V166.28H166.526v328.97h106.716V315.813 c0,0,80.643-112.628,114.674-29.911V495.25h106.688V273.257C494.604,223.549,460.629,182.13,414.789,170.138z" />
            <path d="M121.789,69.085c0,28.909-23.373,52.337-52.195,52.337c-28.824,0-52.196-23.429-52.196-52.337 c0-28.903,23.372-52.335,52.196-52.335C98.416,16.75,121.789,40.182,121.789,69.085z" />
          </svg>
        </a>

                        
                      
                    </motion.div>                                
                </div>
                <div className="grid scnd web">
               {/*  <motion.div className="member3 member"
                variants={tiles3Variant}
                initial="hiddenL"
                whileInView="visibleL"
                viewport={{ once: true }}
                transition= {{
                    type: "spring",
                    stiffness: 50,
                  }}>
                        <motion.img src="../assets/Board_members/Pani.png" alt="B K Panigrahi"
                        initial={{
                          scale: 1
                        }}
                        whileTap={{
                          scale: 0.95
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 60,
                        }}/>
                                        <a
                  href="https://www.linkedin.com/in/bkpanigrahi/"
                  className="linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="24"
                    height="24"
                    fill="#1B80E4"
                  >
                    <rect x="17.397" y="166.28" width="106.716" height="328.97" />
                    <path d="M414.789,170.138c-1.133-0.355-2.207-0.743-3.396-1.078c-1.438-0.327-2.865-0.6-4.328-0.833 
                            c-5.662-1.139-11.875-1.946-19.148-1.946c-62.211,0-101.678,45.372-114.674,62.894V166.28H166.526v328.97h106.716V315.813 
                            c0,0,80.643-112.628,114.674-29.911V495.25h106.688V273.257C494.604,223.549,460.629,182.13,414.789,170.138z" />
                    <path d="M121.789,69.085c0,28.909-23.373,52.337-52.195,52.337c-28.824,0-52.196-23.429-52.196-52.337 
                            c0-28.903,23.372-52.335,52.196-52.335C98.416,16.75,121.789,40.182,121.789,69.085z" />
                  </svg>
                </a>

                      
                    </motion.div>   */}
                <motion.div className="member6 member"
                variants={tiles3Variant}
                initial="hiddenY"
                whileInView="visibleY"
                viewport={{ once: true }}
                transition= {{
                    type: "spring",
                    stiffness: 50,
                  }}>
                    <motion.img src="../assets/Board_members/Erik.png" alt="Eric Azulay"
                    initial={{
                      scale: 1
                  }}
                    whileTap={{
                      scale: 0.95
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 60,
                    }}
                    />
                                      <a
                    href="https://www.linkedin.com/in/erikazulay/"
                    className="linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 512 512"
                      fill="#1B80E4"
                    >
                      <g>
                        <g>
                          <rect x="17.397" y="166.28" width="106.716" height="328.97" />
                          <path d="M414.789,170.138c-1.133-0.355-2.207-0.743-3.396-1.078c-1.438-0.327-2.865-0.6-4.328-0.833
                                  c-5.662-1.139-11.875-1.946-19.148-1.946c-62.211,0-101.678,45.372-114.674,62.894V166.28H166.526v328.97h106.716V315.813
                                  c0,0,80.643-112.628,114.674-29.911V495.25h106.688V273.257C494.604,223.549,460.629,182.13,414.789,170.138z" />
                          <path d="M121.789,69.085c0,28.909-23.373,52.337-52.195,52.337c-28.824,0-52.196-23.429-52.196-52.337
                                  c0-28.903,23.372-52.335,52.196-52.335C98.416,16.75,121.789,40.182,121.789,69.085z" />
                        </g>
                      </g>
                    </svg>
                  </a>

                    </motion.div>  

                    <motion.div className="member8 member"
                    variants={tiles3Variant}
                    initial="hiddenR"
                    whileInView="visibleR"
                    viewport={{ once: true }}
                    transition= {{
                        type: "spring",
                        stiffness: 50,
                      }}>
                    <motion.img src="../assets/Board_members/Sanjeev.png" alt="Sanjeevikumar Padmanaban"
                    initial={{
                      scale: 1
                  }}
                    whileTap={{
                      scale: 0.95
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 60,
                    }}/>
                                      <a
                    href="https://www.linkedin.com/in/sanjeevikumarpadmanaban/"
                    className="linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 512 512"
                      fill="#1B80E4"
                    >
                      <g>
                        <g>
                          <rect x="17.397" y="166.28" width="106.716" height="328.97" />
                          <path d="M414.789,170.138c-1.133-0.355-2.207-0.743-3.396-1.078c-1.438-0.327-2.865-0.6-4.328-0.833
                                  c-5.662-1.139-11.875-1.946-19.148-1.946c-62.211,0-101.678,45.372-114.674,62.894V166.28H166.526v328.97h106.716V315.813
                                  c0,0,80.643-112.628,114.674-29.911V495.25h106.688V273.257C494.604,223.549,460.629,182.13,414.789,170.138z" />
                          <path d="M121.789,69.085c0,28.909-23.373,52.337-52.195,52.337c-28.824,0-52.196-23.429-52.196-52.337
                                  c0-28.903,23.372-52.335,52.196-52.335C98.416,16.75,121.789,40.182,121.789,69.085z" />
                        </g>
                      </g>
                    </svg>
                  </a>

              
              
              
           
                    </motion.div>
                </div>
                <div className="grid scnd mob">
                {/* <motion.div className="member3 member"
                variants={tiles3Variant}
                initial="hiddenL"
                whileInView="visibleL"
                viewport={{ once: true }}
                transition= {{
                    type: "spring",
                    stiffness: 50,
                  }}>
                        <motion.img src="../assets/Board_members/Pani.png" alt="B K Panigrahi"
                        initial={{
                          scale: 10
                        }}
                        whileTap={{
                          scale: 0.95
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 60,
                }} />
              
                                        <a
                    href="https://www.linkedin.com/in/bkpanigrahi/"
                    className="linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 512 512"
                      fill="#1B80E4"
                    >
                      <g>
                        <g>
                          <rect x="17.397" y="166.28" width="106.716" height="328.97" />
                          <path d="M414.789,170.138c-1.133-0.355-2.207-0.743-3.396-1.078c-1.438-0.327-2.865-0.6-4.328-0.833
                                  c-5.662-1.139-11.875-1.946-19.148-1.946c-62.211,0-101.678,45.372-114.674,62.894V166.28H166.526v328.97h106.716V315.813
                                  c0,0,80.643-112.628,114.674-29.911V495.25h106.688V273.257C494.604,223.549,460.629,182.13,414.789,170.138z" />
                          <path d="M121.789,69.085c0,28.909-23.373,52.337-52.195,52.337c-28.824,0-52.196-23.429-52.196-52.337
                                  c0-28.903,23.372-52.335,52.196-52.335C98.416,16.75,121.789,40.182,121.789,69.085z" />
                        </g>
                      </g>
                    </svg>
                  </a>
                                          
          
                    </motion.div>   */}
                <motion.div className="member6 member"
                variants={tiles3Variant}
                initial="hiddenY"
                whileInView="visibleY"
                viewport={{ once: true }}
                transition= {{
                    type: "spring",
                    stiffness: 50,
                  }}>
                    <motion.img src="../assets/Board_members/Erik.png" alt="Eric Azulay"
                    initial={{
                      scale: 1
                  }}
                    whileTap={{
                      scale: 0.95
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 60,
                    }}
              />
              
                                                  <a
                  href="https://www.linkedin.com/in/erikazulay/"
                  className="linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 512 512"
                    fill="#1B80E4"
                  >
                    <g>
                      <g>
                        <rect x="17.397" y="166.28" width="106.716" height="328.97" />
                        <path d="M414.789,170.138c-1.133-0.355-2.207-0.743-3.396-1.078c-1.438-0.327-2.865-0.6-4.328-0.833
                                c-5.662-1.139-11.875-1.946-19.148-1.946c-62.211,0-101.678,45.372-114.674,62.894V166.28H166.526v328.97h106.716V315.813
                                c0,0,80.643-112.628,114.674-29.911V495.25h106.688V273.257C494.604,223.549,460.629,182.13,414.789,170.138z" />
                        <path d="M121.789,69.085c0,28.909-23.373,52.337-52.195,52.337c-28.824,0-52.196-23.429-52.196-52.337
                                c0-28.903,23.372-52.335,52.196-52.335C98.416,16.75,121.789,40.182,121.789,69.085z" />
                      </g>
                    </g>
                  </svg>
                </a>
                  
                    </motion.div> 
                                
                </div>
                <div className="grid thd mob">

                    <motion.div className="member8 member"
                    variants={tiles3Variant}
                    initial="hiddenR"
                    whileInView="visibleR"
                    viewport={{ once: true }}
                    transition= {{
                        type: "spring",
                        stiffness: 50,
                      }}>
                    <motion.img src="../assets/Board_members/Sanjeev.png" alt="Sanjeevikumar Padmanaban"
                    initial={{
                      scale: 1
                  }}
                    whileTap={{
                      scale: 0.95
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 60,
                }} />
                                <a
                    href="
                                      https://www.linkedin.com/in/sanjeevikumarpadmanaban/"
                    className="linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 512 512"
                      fill="#1B80E4"
                    >
                      <g>
                        <g>
                          <rect x="17.397" y="166.28" width="106.716" height="328.97" />
                          <path d="M414.789,170.138c-1.133-0.355-2.207-0.743-3.396-1.078c-1.438-0.327-2.865-0.6-4.328-0.833
                                  c-5.662-1.139-11.875-1.946-19.148-1.946c-62.211,0-101.678,45.372-114.674,62.894V166.28H166.526v328.97h106.716V315.813
                                  c0,0,80.643-112.628,114.674-29.911V495.25h106.688V273.257C494.604,223.549,460.629,182.13,414.789,170.138z" />
                          <path d="M121.789,69.085c0,28.909-23.373,52.337-52.195,52.337c-28.824,0-52.196-23.429-52.196-52.337
                                  c0-28.903,23.372-52.335,52.196-52.335C98.416,16.75,121.789,40.182,121.789,69.085z" />
                        </g>
                      </g>
                    </svg>
                  </a>
              
                    {/* <h1>Sanjeevikumar Padmanaban, an accomplished electrical engineer, IEEE member, and fellow of Indian and UK institutions, specializes in Power Electronics, Drives, and renewable energy. With 250+ research papers, he's received Best Paper Awards and serves on editorial boards, contributing significantly to his field.</h1> */}
                    </motion.div>

                    <motion.div className="member8 member"
                variants={tiles3Variant}
                initial="hiddenL"
                whileInView="visibleL"
                viewport={{ once: true }}
                transition= {{
                    type: "spring",
                    stiffness: 50,
                  }}>
                    <motion.img src="../assets/Board_members/Kiran.png" alt="Kiran Pandav"
                    initial={{
                      scale: 1
                  }}
                    whileTap={{
                      scale: 0.95
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 60,
                }} />
                                      <a
                  href="https://www.linkedin.com/in/dr-kiran-maroti-pandav-smieee-ab619a66/"
                  className="linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 512 512"
                    fill="#1B80E4"
                  >
                    <g>
                      <g>
                        <rect x="17.397" y="166.28" width="106.716" height="328.97" />
                        <path d="M414.789,170.138c-1.133-0.355-2.207-0.743-3.396-1.078c-1.438-0.327-2.865-0.6-4.328-0.833
                                c-5.662-1.139-11.875-1.946-19.148-1.946c-62.211,0-101.678,45.372-114.674,62.894V166.28H166.526v328.97h106.716V315.813
                                c0,0,80.643-112.628,114.674-29.911V495.25h106.688V273.257C494.604,223.549,460.629,182.13,414.789,170.138z" />
                        <path d="M121.789,69.085c0,28.909-23.373,52.337-52.195,52.337c-28.824,0-52.196-23.429-52.196-52.337
                                c0-28.903,23.372-52.335,52.196-52.335C98.416,16.75,121.789,40.182,121.789,69.085z" />
                      </g>
                    </g>
                  </svg>
                </a>
                  
                    {/* <h1>An accomplished power electronics specialist engineer with 8 years of experience, adept at designing and developing diverse power electronic converters, and integrating renewable sources into EV power management systems.</h1> */}
                    </motion.div>                                     
                </div>
                <div className="grid frth mob">
                <motion.div className="member4 member"
                variants={tiles3Variant}
                initial="hiddenY"
                whileInView="visibleY"
                viewport={{ once: true }}
                transition= {{
                    type: "spring",
                    stiffness: 50,
                  }}>
                    <motion.img src="../assets/Board_members/Ajeet.png" alt="Ajeet Prabhakar"
                    initial={{
                      scale: 1
                  }}
                    whileTap={{
                      scale: 0.95
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 60,
                }} />
             
                                <a
                                  href="https://www.linkedin.com/in/ajeet-prabhakar-79a4841b1/"
                                  className="linkedin"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 512 512"
                                    fill="#1B80E4"
                                  >
                                    <g>
                                      <g>
                                        <rect x="17.397" y="166.28" width="106.716" height="328.97" />
                                        <path d="M414.789,170.138c-1.133-0.355-2.207-0.743-3.396-1.078c-1.438-0.327-2.865-0.6-4.328-0.833
                                                c-5.662-1.139-11.875-1.946-19.148-1.946c-62.211,0-101.678,45.372-114.674,62.894V166.28H166.526v328.97h106.716V315.813
                                                c0,0,80.643-112.628,114.674-29.911V495.25h106.688V273.257C494.604,223.549,460.629,182.13,414.789,170.138z" />
                                        <path d="M121.789,69.085c0,28.909-23.373,52.337-52.195,52.337c-28.824,0-52.196-23.429-52.196-52.337
                                                c0-28.903,23.372-52.335,52.196-52.335C98.416,16.75,121.789,40.182,121.789,69.085z" />
                                      </g>
                                    </g>
                                  </svg>
                                </a>

                    {/* <h1>With 5 years of experience, a skilled product designer passionate about UI/UX, graphic design, and animation, crafting visually captivating user interfaces.</h1> */}
                    </motion.div>
                    <motion.div className="member7 member"
                    variants={tiles3Variant}
                    initial="hiddenR"
                    whileInView="visibleR"
                    viewport={{ once: true }}
                    transition= {{
                        type: "spring",
                        stiffness: 50,
                      }}>
                    <motion.img src="../assets/Board_members/Sayan.png" alt="Sayan Mandal"
                    initial={{
                      scale: 1
                  }}
                    whileTap={{
                      scale: 0.95
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 60,
                    }}/>
                                    <a
                    href="https://www.linkedin.com/in/sayan-mondal-b56287174/"
                    className="linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 512 512"
                      fill="#1B80E4"
                    >
                      <g>
                        <g>
                          <rect x="17.397" y="166.28" width="106.716" height="328.97" />
                          <path d="M414.789,170.138c-1.133-0.355-2.207-0.743-3.396-1.078c-1.438-0.327-2.865-0.6-4.328-0.833
                                  c-5.662-1.139-11.875-1.946-19.148-1.946c-62.211,0-101.678,45.372-114.674,62.894V166.28H166.526v328.97h106.716V315.813
                                  c0,0,80.643-112.628,114.674-29.911V495.25h106.688V273.257C494.604,223.549,460.629,182.13,414.789,170.138z" />
                          <path d="M121.789,69.085c0,28.909-23.373,52.337-52.195,52.337c-28.824,0-52.196-23.429-52.196-52.337
                                  c0-28.903,23.372-52.335,52.196-52.335C98.416,16.75,121.789,40.182,121.789,69.085z" />
                        </g>
                      </g>
                    </svg>
                  </a>

                    {/* <h1>Dedicated R&D engineer with 5 years of industrial experience, proficient in circuit design, signal processing, and control algorithms, committed to collaborative problem-solving for innovative solutions.</h1> */}
                    </motion.div>                           
                </div>
                <div className="grid thd web">
                <motion.div className="member8 member"
                variants={tiles3Variant}
                initial="hiddenL"
                whileInView="visibleL"
                viewport={{ once: true }}
                transition= {{
                    type: "spring",
                    stiffness: 50,
                  }}>
                    <motion.img src="../assets/Board_members/Kiran.png" alt="Kiran Pandav"
                    initial={{
                      scale: 1
                  }}
                    whileTap={{
                      scale: 0.95
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 60,
                    }}/>
                                  <a
                href="https://www.linkedin.com/in/dr-kiran-maroti-pandav-smieee-ab619a66?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 512 512"
                  fill="#1B80E4"
                >
                  <g>
                    <g>
                      <rect x="17.397" y="166.28" width="106.716" height="328.97" />
                      <path d="M414.789,170.138c-1.133-0.355-2.207-0.743-3.396-1.078c-1.438-0.327-2.865-0.6-4.328-0.833
                              c-5.662-1.139-11.875-1.946-19.148-1.946c-62.211,0-101.678,45.372-114.674,62.894V166.28H166.526v328.97h106.716V315.813
                              c0,0,80.643-112.628,114.674-29.911V495.25h106.688V273.257C494.604,223.549,460.629,182.13,414.789,170.138z" />
                      <path d="M121.789,69.085c0,28.909-23.373,52.337-52.195,52.337c-28.824,0-52.196-23.429-52.196-52.337
                              c0-28.903,23.372-52.335,52.196-52.335C98.416,16.75,121.789,40.182,121.789,69.085z" />
                    </g>
                  </g>
                </svg>
              </a>

                    {/* <h1>An accomplished power electronics specialist engineer with 8 years of experience, adept at designing and developing diverse power electronic converters, and integrating renewable sources into EV power management systems.</h1> */}
            </motion.div>
             <motion.div className="member8 member"
                variants={tiles3Variant}
                initial="hiddenL"
                whileInView="visibleL"
                viewport={{ once: true }}
                transition= {{
                    type: "spring",
                    stiffness: 50,
                  }}>
                    <motion.img src="../assets/Board_members/pushpendra.png" alt="Pushpendra yadav"
                    initial={{
                      scale: 1
                  }}
                    whileTap={{
                      scale: 0.95
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 60,
                    }}/>
                                <a
                href="https://www.linkedin.com/in/pushpendra-yadav-8b09931b9/"
                className="linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 512 512"
                  fill="#1B80E4"
                >
                  <g>
                    <g>
                      <rect x="17.397" y="166.28" width="106.716" height="328.97" />
                      <path d="M414.789,170.138c-1.133-0.355-2.207-0.743-3.396-1.078c-1.438-0.327-2.865-0.6-4.328-0.833
                              c-5.662-1.139-11.875-1.946-19.148-1.946c-62.211,0-101.678,45.372-114.674,62.894V166.28H166.526v328.97h106.716V315.813
                              c0,0,80.643-112.628,114.674-29.911V495.25h106.688V273.257C494.604,223.549,460.629,182.13,414.789,170.138z" />
                      <path d="M121.789,69.085c0,28.909-23.373,52.337-52.195,52.337c-28.824,0-52.196-23.429-52.196-52.337
                              c0-28.903,23.372-52.335,52.196-52.335C98.416,16.75,121.789,40.182,121.789,69.085z" />
                    </g>
                  </g>
                </svg>
              </a>

                    {/* <h1>An accomplished power electronics specialist engineer with 8 years of experience, adept at designing and developing diverse power electronic converters, and integrating renewable sources into EV power management systems.</h1> */}
                    </motion.div>
                <motion.div className="member4 member"
                variants={tiles3Variant}
                initial="hiddenY"
                whileInView="visibleY"
                viewport={{ once: true }}
                transition= {{
                    type: "spring",
                    stiffness: 50,
                  }}>
                    <motion.img src="../assets/Board_members/Ajeet.png" alt="Ajeet Prabhakar"
                    initial={{
                      scale: 1
                  }}
                    whileTap={{
                      scale: 0.95
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 60,
                    }}/>
                                  <a
                  href="https://www.linkedin.com/in/ajeet-prabhakar-79a4841b1/"
                  className="linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 512 512"
                    fill="#1B80E4"
                  >
                    <g>
                      <g>
                        <rect x="17.397" y="166.28" width="106.716" height="328.97" />
                        <path d="M414.789,170.138c-1.133-0.355-2.207-0.743-3.396-1.078c-1.438-0.327-2.865-0.6-4.328-0.833
                                c-5.662-1.139-11.875-1.946-19.148-1.946c-62.211,0-101.678,45.372-114.674,62.894V166.28H166.526v328.97h106.716V315.813
                                c0,0,80.643-112.628,114.674-29.911V495.25h106.688V273.257C494.604,223.549,460.629,182.13,414.789,170.138z" />
                        <path d="M121.789,69.085c0,28.909-23.373,52.337-52.195,52.337c-28.824,0-52.196-23.429-52.196-52.337
                                c0-28.903,23.372-52.335,52.196-52.335C98.416,16.75,121.789,40.182,121.789,69.085z" />
                      </g>
                    </g>
                  </svg>
                </a>

                    {/* <h1>With 5 years of experience, a skilled product designer passionate about UI/UX, graphic design, and animation, crafting visually captivating user interfaces.</h1> */}
                    </motion.div>
                    <motion.div className="member7 member"
                    variants={tiles3Variant}
                    initial="hiddenR"
                    whileInView="visibleR"
                    viewport={{ once: true }}
                    transition= {{
                        type: "spring",
                        stiffness: 50,
                      }}>
                    <motion.img src="../assets/Board_members/Sayan.png" alt="Sayan Mandal"
                    initial={{
                      scale: 1
                  }}
                    whileTap={{
                      scale: 0.95
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 60,
                    }}/>
                                <a
                href="https://www.linkedin.com/in/sayan-mondal-b56287174/"
                className="linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 512 512"
                  fill="#1B80E4"
                >
                  <g>
                    <g>
                      <rect x="17.397" y="166.28" width="106.716" height="328.97" />
                      <path d="M414.789,170.138c-1.133-0.355-2.207-0.743-3.396-1.078c-1.438-0.327-2.865-0.6-4.328-0.833
                              c-5.662-1.139-11.875-1.946-19.148-1.946c-62.211,0-101.678,45.372-114.674,62.894V166.28H166.526v328.97h106.716V315.813
                              c0,0,80.643-112.628,114.674-29.911V495.25h106.688V273.257C494.604,223.549,460.629,182.13,414.789,170.138z" />
                      <path d="M121.789,69.085c0,28.909-23.373,52.337-52.195,52.337c-28.824,0-52.196-23.429-52.196-52.337
                              c0-28.903,23.372-52.335,52.196-52.335C98.416,16.75,121.789,40.182,121.789,69.085z" />
                    </g>
                  </g>
                </svg>
              </a>

                    {/* <h1>Dedicated R&D engineer with 5 years of industrial experience, proficient in circuit design, signal processing, and control algorithms, committed to collaborative problem-solving for innovative solutions.</h1> */}
            </motion.div>
            <motion.div className="member7 member"
                    variants={tiles3Variant}
                    initial="hiddenR"
                    whileInView="visibleR"
                    viewport={{ once: true }}
                    transition= {{
                        type: "spring",
                        stiffness: 50,
                      }}>
                    <motion.img src="../assets/Board_members/nishant.png" alt="Sayan Mandal"
                    initial={{
                      scale: 1
                  }}
                    whileTap={{
                      scale: 0.95
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 60,
                    }}/>
                                  <a
                  href="https://www.linkedin.com/in/nishant-sharma-1b00571b1/"
                  className="linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 512 512"
                    fill="#1B80E4"
                  >
                    <g>
                      <g>
                        <rect x="17.397" y="166.28" width="106.716" height="328.97" />
                        <path d="M414.789,170.138c-1.133-0.355-2.207-0.743-3.396-1.078c-1.438-0.327-2.865-0.6-4.328-0.833
                                c-5.662-1.139-11.875-1.946-19.148-1.946c-62.211,0-101.678,45.372-114.674,62.894V166.28H166.526v328.97h106.716V315.813
                                c0,0,80.643-112.628,114.674-29.911V495.25h106.688V273.257C494.604,223.549,460.629,182.13,414.789,170.138z" />
                        <path d="M121.789,69.085c0,28.909-23.373,52.337-52.195,52.337c-28.824,0-52.196-23.429-52.196-52.337
                                c0-28.903,23.372-52.335,52.196-52.335C98.416,16.75,121.789,40.182,121.789,69.085z" />
                      </g>
                    </g>
                  </svg>
                </a>

                    {/* <h1>Dedicated R&D engineer with 5 years of industrial experience, proficient in circuit design, signal processing, and control algorithms, committed to collaborative problem-solving for innovative solutions.</h1> */}
                    </motion.div><motion.div className="member7 member"
                    variants={tiles3Variant}
                    initial="hiddenR"
                    whileInView="visibleR"
                    viewport={{ once: true }}
                    transition= {{
                        type: "spring",
                        stiffness: 50,
                      }}>
                    <motion.img src="../assets/Board_members/khushi.png" alt="Sayan Mandal"
                    initial={{
                      scale: 1
                  }}
                    whileTap={{
                      scale: 0.95
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 60,
                    }}/>
                              <a
                  href="https://www.linkedin.com/in/khushi-tandon-b82960200/"
                  className="linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 512 512"
                    fill="#1B80E4"
                  >
                    <g>
                      <g>
                        <rect x="17.397" y="166.28" width="106.716" height="328.97" />
                        <path d="M414.789,170.138c-1.133-0.355-2.207-0.743-3.396-1.078c-1.438-0.327-2.865-0.6-4.328-0.833
                                c-5.662-1.139-11.875-1.946-19.148-1.946c-62.211,0-101.678,45.372-114.674,62.894V166.28H166.526v328.97h106.716V315.813
                                c0,0,80.643-112.628,114.674-29.911V495.25h106.688V273.257C494.604,223.549,460.629,182.13,414.789,170.138z" />
                        <path d="M121.789,69.085c0,28.909-23.373,52.337-52.195,52.337c-28.824,0-52.196-23.429-52.196-52.337
                                c0-28.903,23.372-52.335,52.196-52.335C98.416,16.75,121.789,40.182,121.789,69.085z" />
                      </g>
                    </g>
                  </svg>
                </a>

                    {/* <h1>Dedicated R&D engineer with 5 years of industrial experience, proficient in circuit design, signal processing, and control algorithms, committed to collaborative problem-solving for innovative solutions.</h1> */}
                    </motion.div>
                    <motion.div className="member7 member"
                    variants={tiles3Variant}
                    initial="hiddenR"
                    whileInView="visibleR"
                    viewport={{ once: true }}
                    transition= {{
                        type: "spring",
                        stiffness: 50,
                      }}>
                    <motion.img src="../assets/Board_members/ajay.png" alt="Sayan Mandal"
                    initial={{
                      scale: 1
                  }}
                    whileTap={{
                      scale: 0.95
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 60,
                    }}/>
                                <a
                href="http://www.linkedin.com/in/ajay-jadhav711"
                className="linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 512 512"
                  fill="#1B80E4"
                >
                  <g>
                    <g>
                      <rect x="17.397" y="166.28" width="106.716" height="328.97" />
                      <path d="M414.789,170.138c-1.133-0.355-2.207-0.743-3.396-1.078c-1.438-0.327-2.865-0.6-4.328-0.833
                              c-5.662-1.139-11.875-1.946-19.148-1.946c-62.211,0-101.678,45.372-114.674,62.894V166.28H166.526v328.97h106.716V315.813
                              c0,0,80.643-112.628,114.674-29.911V495.25h106.688V273.257C494.604,223.549,460.629,182.13,414.789,170.138z" />
                      <path d="M121.789,69.085c0,28.909-23.373,52.337-52.195,52.337c-28.824,0-52.196-23.429-52.196-52.337
                              c0-28.903,23.372-52.335,52.196-52.335C98.416,16.75,121.789,40.182,121.789,69.085z" />
                    </g>
                  </g>
                </svg>
              </a>

                    {/* <h1>Dedicated R&D engineer with 5 years of industrial experience, proficient in circuit design, signal processing, and control algorithms, committed to collaborative problem-solving for innovative solutions.</h1> */}
            </motion.div>
            <motion.div className="member7 member"
                    variants={tiles3Variant}
                    initial="hiddenR"
                    whileInView="visibleR"
                    viewport={{ once: true }}
                    transition= {{
                        type: "spring",
                        stiffness: 50,
                      }}>
                    <motion.img src="../assets/Board_members/adarsh.png" alt="Sayan Mandal"
                    initial={{
                      scale: 1
                  }}
                    whileTap={{
                      scale: 0.95
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 60,
                    }}/>
                              <a
              href="https://www.linkedin.com/in/adarsh-pandey-583080218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 512 512"
                fill="#1B80E4"
              >
                <g>
                  <g>
                    <rect x="17.397" y="166.28" width="106.716" height="328.97" />
                    <path d="M414.789,170.138c-1.133-0.355-2.207-0.743-3.396-1.078c-1.438-0.327-2.865-0.6-4.328-0.833
                            c-5.662-1.139-11.875-1.946-19.148-1.946c-62.211,0-101.678,45.372-114.674,62.894V166.28H166.526v328.97h106.716V315.813
                            c0,0,80.643-112.628,114.674-29.911V495.25h106.688V273.257C494.604,223.549,460.629,182.13,414.789,170.138z" />
                    <path d="M121.789,69.085c0,28.909-23.373,52.337-52.195,52.337c-28.824,0-52.196-23.429-52.196-52.337
                            c0-28.903,23.372-52.335,52.196-52.335C98.416,16.75,121.789,40.182,121.789,69.085z" />
                  </g>
                </g>
              </svg>
            </a>

                    {/* <h1>Dedicated R&D engineer with 5 years of industrial experience, proficient in circuit design, signal processing, and control algorithms, committed to collaborative problem-solving for innovative solutions.</h1> */}
            </motion.div>
            
            <motion.div className="member7 member"
                    variants={tiles3Variant}
                    initial="hiddenR"
                    whileInView="visibleR"
                    viewport={{ once: true }}
                    transition= {{
                        type: "spring",
                        stiffness: 50,
                      }}>
                    <motion.img src="../assets/Board_members/renu.png" alt="Sayan Mandal"
                    initial={{
                      scale: 1
                  }}
                    whileTap={{
                      scale: 0.95
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 60,
                    }}/>
                              <a
              href="https://www.linkedin.com/in/renu-kumari-43ba29247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 512 512"
                fill="#1B80E4"
              >
                <g>
                  <g>
                    <rect x="17.397" y="166.28" width="106.716" height="328.97" />
                    <path d="M414.789,170.138c-1.133-0.355-2.207-0.743-3.396-1.078c-1.438-0.327-2.865-0.6-4.328-0.833
                            c-5.662-1.139-11.875-1.946-19.148-1.946c-62.211,0-101.678,45.372-114.674,62.894V166.28H166.526v328.97h106.716V315.813
                            c0,0,80.643-112.628,114.674-29.911V495.25h106.688V273.257C494.604,223.549,460.629,182.13,414.789,170.138z" />
                    <path d="M121.789,69.085c0,28.909-23.373,52.337-52.195,52.337c-28.824,0-52.196-23.429-52.196-52.337
                            c0-28.903,23.372-52.335,52.196-52.335C98.416,16.75,121.789,40.182,121.789,69.085z" />
                  </g>
                </g>
              </svg>
            </a>

                    {/* <h1>Dedicated R&D engineer with 5 years of industrial experience, proficient in circuit design, signal processing, and control algorithms, committed to collaborative problem-solving for innovative solutions.</h1> */}
            </motion.div>
             <motion.div className="member7 member"
                    variants={tiles3Variant}
                    initial="hiddenR"
                    whileInView="visibleR"
                    viewport={{ once: true }}
                    transition= {{
                        type: "spring",
                        stiffness: 50,
                      }}>
                    <motion.img src="../assets/Board_members/bridisha.png" alt="Sayan Mandal"
                    initial={{
                      scale: 1
                  }}
                    whileTap={{
                      scale: 0.95
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 60,
                    }}/>
                              <a
              href="https://www.linkedin.com/in/brihadish-jb"
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 512 512"
                fill="#1B80E4"
              >
                <g>
                  <g>
                    <rect x="17.397" y="166.28" width="106.716" height="328.97" />
                    <path d="M414.789,170.138c-1.133-0.355-2.207-0.743-3.396-1.078c-1.438-0.327-2.865-0.6-4.328-0.833
                            c-5.662-1.139-11.875-1.946-19.148-1.946c-62.211,0-101.678,45.372-114.674,62.894V166.28H166.526v328.97h106.716V315.813
                            c0,0,80.643-112.628,114.674-29.911V495.25h106.688V273.257C494.604,223.549,460.629,182.13,414.789,170.138z" />
                    <path d="M121.789,69.085c0,28.909-23.373,52.337-52.195,52.337c-28.824,0-52.196-23.429-52.196-52.337
                            c0-28.903,23.372-52.335,52.196-52.335C98.416,16.75,121.789,40.182,121.789,69.085z" />
                  </g>
                </g>
              </svg>
            </a>

                    {/* <h1>Dedicated R&D engineer with 5 years of industrial experience, proficient in circuit design, signal processing, and control algorithms, committed to collaborative problem-solving for innovative solutions.</h1> */}
                    </motion.div>
                </div>
            </div>
            <div className="head">
          <h1 className='subHeading smalll'>Want to be a part of the team? Contact Us!</h1>
          </div>
        </div>
    </div>
  )
}
