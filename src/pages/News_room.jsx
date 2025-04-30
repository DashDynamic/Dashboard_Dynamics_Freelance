// import React, { useState, useEffect } from "react";

// export default function NewsRoom() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [unavailabe, setUnavailable] = useState(false);
//   const [Jobs, setJobs] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://dashdynamicbackend.onrender.com/news"
//         ); // Replace with your API endpoint
//         const jsonData = await response.json();
//         setJobs(jsonData);
//         setIsLoading(false);
//         console.log(jsonData);
//       } catch (error) {
//         console.log("Error:", error);
//         setUnavailable(true);
//       }
//     };

//     fetchData();
//   }, []);

//   if (unavailabe) {
//     return (
//       <div className="Loading_pg">
//         <h1>Unable to load content</h1>
//       </div>
//     ); // Display loader while fetching data
//   }

//   if (isLoading) {
//     return (
//       <div className="Loading_pg">
//         {/* <svg version="1.1" id="L5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0"
//   viewBox="0 0 160 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
//   <circle fill="#000" stroke="none" cx="60" cy="50" r="8">
//     <animateTransform
//       attributeName="transform"
//       dur="1s"
//       type="translate"
//       values="0 15 ; 0 -15; 0 15"
//       repeatCount="indefinite"
//       begin="0.1s"/>
//   </circle>
//   <circle fill="#000" stroke="none" cx="100" cy="50" r="8">
//     <animateTransform
//       attributeName="transform"
//       dur="1s"
//       type="translate"
//       values="0 10 ; 0 -10; 0 10"
//       repeatCount="indefinite"
//       begin="0.2s"/>
//   </circle>
// </svg> */}
//  {/* added title in frame by jayam */}
//         <iframe
//     src="https://giphy.com/embed/9U100arhSkONMI6zo0"
//     width="480"
//     height="360"
//     frameBorder="0"
//     class="giphy-embed"
//     allowFullScreen
//     title="Funny GIF of a Cat Jumping"
//         ></iframe>
//       </div> // Display loader while fetching data
//     );
//   }

//   return (
//     <div id="News">
//       <div className="main">
//         <h1>
//           The Rise of Electric Vehicles: Navigating the Road to an Electric
//           Future
//         </h1>
//         <div className="tiles">
//           <h1>Headlines</h1>
//           <div className="row-1">
//             <div className="b1 b">
//               <div className="bg" />
//               <img src={Jobs.team[0].urlToImage} alt="" />
//               <h1>{Jobs.team[0].title}</h1>
//             </div>
//             <div className="b2 b">
//               <div className="bg" />
//               <img src={Jobs.team[1].urlToImage} alt="" />
//               <h1>{Jobs.team[1].title}</h1>
//             </div>
//           </div>
//           <div className="row-2">
//             <div className="b1 b">
//               <div className="bg" />
//               <img src={Jobs.team[2].urlToImage} alt="" />
//               <h1>{Jobs.team[2].title}</h1>
//             </div>
//             <div className="b2 b">
//               <img src={Jobs.team[3].urlToImage} alt="" />
//               <div className="bg" />
//               <h1>{Jobs.team[3].title}</h1>
//             </div>
//             <div className="b3 b">
//               <div className="bg" />
//               <img src={Jobs.team[4].urlToImage} alt="" />
//               <h1>{Jobs.team[4].title}</h1>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="other_news">
//         <p>{Jobs.team[5].title}</p>
//         <div className="line" />
//         <p>{Jobs.team[6].title}</p>
//         <div className="line" />
//         <p>{Jobs.team[7].title}</p>
//         <div className="line" />
//         <p>{Jobs.team[8].title}</p>
//       </div>
//     </div>
//   );
// }


// import React from 'react';
// import './../style.scss';

// const News = () => {
//   const newsData = [
//     {
//       id: 1,
//       title: "Best R&D Award at The INDIA EV SHOW 2024",
//       image: "/image/image.png",
//       body: 'Our team was honored with the Best R&D Award at the India EV Show 2024 for innovative electric vehicle solutions.',// If image is in public/images/
//     },
//     {
//       id: 2,
//       title: "Battery Technology: What's Next?",
//       image: 'https://via.placeholder.com/150',
//     },
//     {
//       id: 3,
//       title: 'Government Policies Driving EV Adoption',
//       image: 'https://via.placeholder.com/150',
//     },
//     {
//       id: 4,
//       title: 'The Economics of Going Electric',
//       image: 'https://via.placeholder.com/150',
//     },
//     {
//       id: 5,
//       title: 'Top 10 EVs to Watch in 2024',
//       image: 'https://via.placeholder.com/150',
//     },
//   ];

//   return (
//     <div id="News">
//       <div className="main">
//         <h1>The Rise of Electric Vehicles: Navigating the Road to an Electric Future</h1>
//       </div>
//       <div className="tiles">
//         <h1>Headlines</h1>
//         <div className="row-1">
//           {newsData.slice(0, 2).map((news) => (
//             <div className="news-tile" key={news.id}>
//               <img src={news.image} alt={news.title} />
//               <h1>{news.title}</h1>
//               <p>{news.body}</p>
//             </div>
//           ))}
//         </div>
//         <div className="row-2">
//           {newsData.slice(2).map((news) => (
//             <div className="news-tile" key={news.id}>
//               <img src={news.image} alt={news.title} />
//               <h1>{news.title}</h1>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default News;

// import React from 'react';
// import './../style.scss';


// const News = () => {
//   const headlinesData = [
//     {
//       id: 1,
//       title: "Team Dash Dynamic Presented their live wireless charging at Bharat Mobility Global Expo 2025.",
//       image: "https://img.youtube.com/vi/9IAJVcNzjc8/maxresdefault.jpg", // YouTube video thumbnail
//       video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/9IAJVcNzjc8?si=5eDMN3gr835XGIVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
//       className: "large-headline"
//     },
//     {
//       id: 2,
//       title: "Graham Bell Award 2025.",
//       image: "/assets/news/2.jpg", // Update with your actual image path
//       className: "medium-headline"
//     },
//     {
//       id: 3,
//       title: "Exciting visit from Hyundai Corporation Team!",
//       image: "/assets/news/3.jpg", // Update with your actual image path
//       className: "small-headline"
//     },
//     {
//       id: 4,
//       title: "DMRC Visits Our Office!",
//       image: "/assets/news/4.jpg", // Update with your actual image path
//       className: "small-headline"
//     },
//     {
//       id: 5,
//       title: "Tech Talk with Robin Singh",
//       image: "/assets/news/5.jpg", // Update with your actual image path
//       className: "small-headline"
//     }
//   ];

//   const otherNewsData = [
//     {
//       id: 1,
//       title: "This year, it could be a million e-bikes fame"
//     },
//     {
//       id: 2,
//       title: "Electric cab aggregators on expansion, hiring spree"
//     },
//     {
//       id: 3,
//       title: "Audi to launch electric SUV Q8 e-tron in India in August"
//     },
//     {
//       id: 4,
//       title: "Audi to launch electric SUV Q8 e-tron in India in August"
//     }
//   ];

//   return (
//     <div id="News">
//       <div className="main">
//         <h1>The Rise of Electric Vehicles: Navigating the Road to an Electric Future</h1>
        
//         <div className="headlines-container">
//           <h2>Headlines</h2>
          
//           <div className="headlines-grid">
//             {headlinesData.map((headline) => (
//               <div key={headline.id} className={`headline-card ${headline.className}`}>
//                 <img src={headline.image} alt={headline.title} />
//                 <div className="headline-overlay"></div>
//                 <p>{headline.title}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
      
//       <div className="other-news">
//         {otherNewsData.map((news, index) => (
//           <React.Fragment key={news.id}>
//             {index > 0 && <div className="divider"></div>}
//             <p>{news.title}</p>
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default News;

//onclick video

// import React, { useState } from 'react';
// import './../style.scss';

// const News = () => {
//   const [showVideo, setShowVideo] = useState(false);

//   const headlinesData = [
//     {
//       id: 1,
//       title: "Team Dash Dynamic Presented their live wireless charging at Bharat Mobility Global Expo 2025.",
//       // image: "https://img.youtube.com/vi/9IAJVcNzjc8/maxresdefault.jpg", // YouTube video thumbnail
//       video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/9IAJVcNzjc8?si=5eDMN3gr835XGIVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
//       className: "large-headline"
//     },
//     {
//       id: 2,
//       title: "Graham Bell Award 2025.",
//       image: "/assets/news/2.jpg",
//       className: "medium-headline"
//     },
//     {
//       id: 3,
//       title: "Exciting visit from Hyundai Corporation Team!",
//       image: "/assets/news/3.jpg",
//       className: "small-headline"
//     },
//     {
//       id: 4,
//       title: "DMRC Visits Our Office!",
//       image: "/assets/news/4.jpg",
//       className: "small-headline"
//     },
//     {
//       id: 5,
//       title: "Tech Talk with Robin Singh",
//       image: "/assets/news/5.jpg",
//       className: "small-headline"
//     }
//   ];

//   const otherNewsData = [
//     {
//       id: 1,
//       title: "This year, it could be a million e-bikes fame"
//     },
//     {
//       id: 2,
//       title: "Electric cab aggregators on expansion, hiring spree"
//     },
//     {
//       id: 3,
//       title: "Audi to launch electric SUV Q8 e-tron in India in August"
//     },
//     {
//       id: 4,
//       title: "Audi to launch electric SUV Q8 e-tron in India in August"
//     }
//   ];

//   return (
//     <div id="News">
//       <div className="main">
//         <h1>The Rise of Electric Vehicles: Navigating the Road to an Electric Future</h1>

//         <div className="headlines-container">
//           <h2>Headlines</h2>

//           <div className="headlines-grid">
//             {headlinesData.map((headline) => (
//               <div key={headline.id} className={`headline-card ${headline.className}`}>
//                 {headline.id === 1 && showVideo ? (
//                   <div dangerouslySetInnerHTML={{ __html: headline.video }} />
//                 ) : (
//                   <img
//                     src={headline.image}
//                     alt={headline.title}
//                     onClick={() => headline.id === 1 && setShowVideo(true)}
//                     style={{ cursor: headline.id === 1 ? 'pointer' : 'default' }}
//                   />
//                 )}
//                 <div className="headline-overlay"></div>
//                 <p>{headline.title}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="other-news">
//         {otherNewsData.map((news, index) => (
//           <React.Fragment key={news.id}>
//             {index > 0 && <div className="divider"></div>}
//             <p>{news.title}</p>
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default News;
import React, { useState } from 'react';
import './../style.scss';

const News = () => {
  const [showVideo, setShowVideo] = useState(true);

  const headlinesData = [
    {
      id: 1,
      title: "Team Dash Dynamic Presented their live wireless charging at Bharat Mobility Global Expo 2025.",
      videoUrl: "https://www.youtube.com/embed/9IAJVcNzjc8?si=5eDMN3gr835XGIVI",
      image: "https://img.youtube.com/vi/9IAJVcNzjc8/maxresdefault.jpg", // YouTube thumbnail
      className: "large-headline"
    },
    {
      id: 2,
      title: "Graham Bell Award 2025.",
      image: "/assets/news/2.jpg",
      className: "medium-headline"
    },
    {
      id: 3,
      title: "Exciting visit from Hyundai Corporation Team!",
      image: "/assets/news/3.jpg",
      className: "small-headline"
    },
    {
      id: 4,
      title: "DMRC Visits Our Office!",
      image: "/assets/news/4.jpg",
      className: "small-headline"
    },
    {
      id: 5,
      title: "Tech Talk with Robin Singh",
      image: "/assets/news/5.jpg",
      className: "small-headline"
    }
  ];

  const otherNewsData = [
    {
      id: 1,
      title: "This year, it could be a million e-bikes fame"
    },
    {
      id: 2,
      title: "Electric cab aggregators on expansion, hiring spree"
    },
    {
      id: 3,
      title: "Audi to launch electric SUV Q8 e-tron in India in August"
    },
    {
      id: 4,
      title: "Audi to launch electric SUV Q8 e-tron in India in August"
    }
  ];

  return (
    <div id="News">
      <div className="main">
        <h1>The Rise of Electric Vehicles: Navigating the Road to an Electric Future</h1>

        <div className="headlines-container">
          <h2>Headlines</h2>

          <div className="headlines-grid">
            {headlinesData.map((headline) => (
              <div key={headline.id} className={`headline-card ${headline.className}`}>
                {headline.id === 1 && showVideo ? (
                  <iframe
                    width="100%"
                    height="315"
                    src={headline.videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <img
                    src={headline.image}
                    alt={headline.title}
                    onClick={() => headline.id === 1 && setShowVideo(true)}
                    style={{ cursor: headline.id === 1 ? 'pointer' : 'default' }}
                  />
                )}
                <div className="headline-overlay"></div>
                <p>{headline.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="other-news">
        {otherNewsData.map((news, index) => (
          <React.Fragment key={news.id}>
            {index > 0 && <div className="divider"></div>}
            <p>{news.title}</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default News;
