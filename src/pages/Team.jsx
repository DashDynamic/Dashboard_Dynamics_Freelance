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
                        <a href="https://www.linkedin.com/in/robin-singh-b9952028/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
                        {/* <h1>A highly successful electrical engineer with 7 years of entrepreneurial experience, founder of Tron Fire Protection Pvt Ltd, known for innovative solutions in transformer fire safety, and COVID initiatives.
</h1> */}
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
                        <a href="https://www.linkedin.com/in/shashank-sawai-8a0511125/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
                        
                        {/* <h1>An M.Tech professional with 7 years of experience, excelling in electrical & telecommunications project management.</h1> */}
                    </motion.div>                                
                </div>
                <div className="grid scnd web">
                <motion.div className="member3 member"
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
                        <a href="https://www.linkedin.com/in/bkpanigrahi/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
                        {/* <h1>A highly esteemed professor with 40 years of teaching experience at IIT Delhi, specializing in Power Electronics and Power Systems, and currently researching EV Charging Infrastructure & Grid Impact</h1> */}
                    </motion.div>  
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
                    <a href="https://www.linkedin.com/in/erikazulay/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
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
                    <a href="https://www.linkedin.com/in/sanjeevikumarpadmanaban/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
                    </motion.div>
                </div>
                <div className="grid scnd mob">
                <motion.div className="member3 member"
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
                        }}/>
                         <a href="https://www.linkedin.com/in/bkpanigrahi/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#007BB5"}}><path d="M24.003,9C20,9,18.89,10.312,18,12V9h-7v23h7V19c0-2,0-4,3.5-4s3.5,2,3.5,4v13h7V19C32,13,31,9,24.003,9z"/></svg></a>
          
                    </motion.div>  
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
                    <a href="https://www.linkedin.com/in/erikazulay/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
          
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
                    }}/>
                    <a href="https://www.linkedin.com/in/sanjeevikumarpadmanaban/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
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
                    }}/>
                    <a href="https://www.linkedin.com/in/dr-kiran-maroti-pandav-smieee-ab619a66/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
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
                    }}/>
                    <a href="https://www.linkedin.com/in/ajeet-prabhakar-79a4841b1/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
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
                    <a href="https://www.linkedin.com/in/sayan-mondal-b56287174/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
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
                    <a href="https://www.linkedin.com/in/dr-kiran-maroti-pandav-smieee-ab619a66/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
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
                    <a href="https://www.linkedin.com/in/dr-kiran-maroti-pandav-smieee-ab619a66/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
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
                    <a href="https://www.linkedin.com/in/ajeet-prabhakar-79a4841b1/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
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
                    <a href="https://www.linkedin.com/in/sayan-mondal-b56287174/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
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
                    <a href="https://www.linkedin.com/in/sayan-mondal-b56287174/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
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
                    <a href="https://www.linkedin.com/in/sayan-mondal-b56287174/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
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
                    <a href="https://www.linkedin.com/in/sayan-mondal-b56287174/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
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
                    <a href="https://www.linkedin.com/in/sayan-mondal-b56287174/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
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
                    <a href="https://www.linkedin.com/in/sayan-mondal-b56287174/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
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
                    <a href="https://www.linkedin.com/in/sayan-mondal-b56287174/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
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
