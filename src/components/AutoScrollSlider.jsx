

// import React from 'react';

// // List of image paths (make sure these are correctly located inside the public folder)
// const images = [
//   '/assets/news/1.png',
//   '/assets/news/2.png',
//   '/assets/news/3.png',
//   '/assets/news/4.png',
//   '/assets/news/5.png',
//   '/assets/news/6.png',
//   '/assets/news/7.png',
//   '/assets/news/8.png',
//   '/assets/news/9.png',
//   '/assets/news/10.png',
//   '/assets/news/11.png',
//   '/assets/news/12.png',
//   '/assets/news/13.png',
//   '/assets/news/14.png',
//   '/assets/news/15.png',
//   '/assets/news/16.png',
//   '/assets/news/17.png',
//   '/assets/news/18.png',
//   '/assets/news/19.png',
//   '/assets/news/20.png',
//   '/assets/news/21.png',
//   '/assets/news/22.png',
//   '/assets/news/23.png',
//   '/assets/news/24.png',
//   '/assets/news/25.png',
//   '/assets/news/26.png',
//   '/assets/news/27.png',
//   '/assets/news/28.png',
//   '/assets/news/29.jpg',
//   '/assets/news/30.jpg',
//   '/assets/news/31.jpg',
//   '/assets/news/32.jpg',
// ];

// // Styles for the slider
// const sliderStyle = {
//   overflowX: 'hidden', // Allow horizontal scrolling
//   width: '100%',
//   whiteSpace: 'nowrap',
//   boxSizing: 'border-box',
//   padding: '10px 0',
//   backgroundColor: '#f5f5f5',
//   display: 'flex',
//   justifyContent: 'flex-start', // Ensure content is left-aligned
// };

// // Track style for scrolling
// const slideTrackStyle = {
//   display: 'inline-block',
//   whiteSpace: 'nowrap',
//   animation: 'scroll 55s linear infinite', // Smooth infinite scroll
//   minWidth: '1200%', // Ensure there's enough content to allow for looping
// };

// // Style for each image
// const slideStyle = {
//   height: '200px',
//   width: 'auto',
//   marginRight: '20px',
//   display: 'inline-block',
//   borderRadius: '12px',
//   boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
//   transition: 'transform 0.3s ease', // Smooth zoom-in transition
// };

// // Keyframe animation for scrolling
// const keyframes = `
// @keyframes scroll {
//   0% {
//     transform: translateX(0);
//   }
//   100% {
//     transform: translateX(-50%);
//   }
// }

// /* Hover zoom effect */
// .image-slide {
//   transition: transform 0.3s ease; /* Smooth transition for scaling */
// }

// .image-slide:hover {
//   transform: scale(1.1); /* Zoom-in effect on hover */
// }

// /* Responsive Design */
// @media (max-width: 1024px) {
//   .image-slide {
//     height: 180px; /* Slightly smaller on tablet screens */
//   }
// }

// @media (max-width: 768px) {
//   .image-slide {
//     height: 160px; /* Smaller on smaller screens */
//   }
// }

// @media (max-width: 480px) {
//   .image-slide {
//     height: 140px; /* Even smaller for mobile devices */
//   }
// }
// `;

// const AutoScrollSlider = () => {
//   return (
//     <>
//       <style>{keyframes}</style>
//       <div style={sliderStyle}>
//         <div style={slideTrackStyle}>
//           {images.concat(images).map((src, index) => (
//             <img
//               key={index}
//               src={src}
//               alt={`slide-${index}`}
//               className="image-slide" // Apply CSS class for hover zoom effect
//               style={slideStyle}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AutoScrollSlider;
// import React from 'react';


// // List of image paths (make sure these are correctly located inside the public folder)
// const images = [
//   '/assets/news/1.png',
//   '/assets/news/2.png',
//   '/assets/news/3.png',
//   '/assets/news/4.png',
//   '/assets/news/5.png',
//   '/assets/news/6.png',
//   '/assets/news/7.png',
//   '/assets/news/8.png',
//   '/assets/news/9.png',
//   '/assets/news/10.png',
//   '/assets/news/11.png',
//   '/assets/news/12.png',
//   '/assets/news/13.png',
//   '/assets/news/14.png',
//   '/assets/news/15.png',
//   '/assets/news/16.png',
//   '/assets/news/17.png',
//   '/assets/news/18.png',
//   '/assets/news/19.png',
//   '/assets/news/20.png',
//   '/assets/news/21.png',
//   '/assets/news/22.png',
//   '/assets/news/23.png',
//   '/assets/news/24.png',
//   '/assets/news/25.png',
//   '/assets/news/26.png',
//   '/assets/news/27.png',
//   '/assets/news/28.png',
//   '/assets/news/29.jpg',
//   '/assets/news/30.jpg',
//   '/assets/news/31.jpg',
//   '/assets/news/32.jpg',
// ];

// // Styles for the slider
// const sliderStyle = {
//   overflowX: 'hidden', // Allow horizontal scrolling
//   width: '100%',
//   whiteSpace: 'nowrap',
//   boxSizing: 'border-box',
//   padding: '10px 0',
//   backgroundColor: '#f5f5f5',
//   display: 'flex',
//   justifyContent: 'flex-start', // Ensure content is left-aligned
// };

// // Track style for scrolling
// const slideTrackStyle = {
//   display: 'inline-block',
//   whiteSpace: 'nowrap',
//   animation: 'scroll 55s linear infinite', // Smooth infinite scroll
//   minWidth: '1200%', // Ensure there's enough content to allow for looping
// };

// // Style for each image
// const slideStyle = {
//   height: '200px',
//   width: 'auto',
//   marginRight: '20px',
//   display: 'inline-block',
//   borderRadius: '12px',
//   boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
//   transition: 'transform 0.3s ease', // Smooth zoom-in transition
// };

// // Keyframe animation for scrolling
// const keyframes = `
// @keyframes scroll {
//   0% {
//     transform: translateX(0);
//   }
//   100% {
//     transform: translateX(-50%);
//   }
// }

// /* Hover zoom effect */
// .image-slide {
//   transition: transform 0.3s ease; /* Smooth transition for scaling */
// }

// .image-slide:hover {
//   transform: scale(1.1); /* Zoom-in effect on hover */
// }

// /* Responsive Design */
// @media (max-width: 1024px) {
//   .image-slide {
//     height: 180px; /* Slightly smaller on tablet screens */
//   }
// }

// @media (max-width: 768px) {
//   .image-slide {
//     height: 160px; /* Smaller on smaller screens */
//   }
// }

// @media (max-width: 480px) {
//   .image-slide {
//     height: 140px; /* Even smaller for mobile devices */
//   }
// }
// `;

// const AutoScrollSlider = () => {
//   return (
//     <>
//       <style>{keyframes}</style>
//       <div style={sliderStyle}>
//         <div style={slideTrackStyle}>
//           {images.concat(images).map((src, index) => (
            
//               <a>
//                 <img
//                   src={src}
//                   alt={`slide-${index}`}
//                   className="image-slide" // Apply CSS class for hover zoom effect
//                   style={slideStyle}
//                 />
//               </a>
          
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AutoScrollSlider;
// src/components/AutoScrollSlider.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// List of image paths (make sure these are correctly located inside the public folder)
const images = [
  '/assets/news/1.png', '/assets/news/2.png', '/assets/news/3.png', '/assets/news/4.png',
  '/assets/news/5.png', '/assets/news/6.png', '/assets/news/7.png', '/assets/news/8.png',
  '/assets/news/9.png', '/assets/news/10.png', '/assets/news/11.png', '/assets/news/12.png',
  '/assets/news/13.png', '/assets/news/14.png', '/assets/news/15.png', '/assets/news/16.png',
  '/assets/news/17.png', '/assets/news/18.png', '/assets/news/19.png', '/assets/news/20.png',
  '/assets/news/21.png', '/assets/news/22.png', '/assets/news/23.png', '/assets/news/24.png',
  '/assets/news/25.png', '/assets/news/26.png', '/assets/news/27.png', '/assets/news/28.png',
  '/assets/news/29.jpg', '/assets/news/30.jpg', '/assets/news/31.jpg', '/assets/news/32.jpg',
];

const sliderStyle = {
  overflowX: 'hidden',
  width: '100%',
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  padding: '10px 0',
  backgroundColor: '#f5f5f5',
  display: 'flex',
  justifyContent: 'flex-start',
};

const slideTrackStyle = {
  display: 'inline-block',
  whiteSpace: 'nowrap',
  animation: 'scroll 55s linear infinite',
  minWidth: '1200%',
};

const slideStyle = {
  height: '200px',
  width: 'auto',
  marginRight: '20px',
  display: 'inline-block',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
};

const keyframes = `
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Hover zoom effect */
.image-slide {
  transition: transform 0.3s ease;
}

.image-slide:hover {
  transform: scale(1.1);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .image-slide { height: 180px; }
}

@media (max-width: 768px) {
  .image-slide { height: 160px; }
}

@media (max-width: 480px) {
  .image-slide { height: 140px; }
}
`;

const AutoScrollSlider = () => {
  return (
    <>
      <style>{keyframes}</style>
      <div style={sliderStyle}>
        <div style={slideTrackStyle}>
          {images.concat(images).map((src, index) => (
            <Link to="News_room" key={index}>
              <img
                src={src}
                alt={`slide-${index}`}
                className="image-slide"
                style={slideStyle}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default AutoScrollSlider;
