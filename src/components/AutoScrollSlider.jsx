// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';


// const images = [
//     '/assets/news/1.png',
//     '/assets/news/2.png',
//     '/assets/news/3.png',
//     '/assets/news/4.png',
//     '/assets/news/5.png',
//     '/assets/news/6.png',
//     '/assets/news/7.png',
//     '/assets/news/8.png',
//     '/assets/news/9.png',
//     '/assets/news/10.png',
//     '/assets/news/11.png',
//     '/assets/news/12.png',
//     '/assets/news/13.png',
//     '/assets/news/14.png',
//     '/assets/news/15.png',
//     '/assets/news/16.png',
//     '/assets/news/17.png',
//     '/assets/news/18.png',
//     '/assets/news/19.png',
//     '/assets/news/20.png',
//     '/assets/news/21.png',
//     '/assets/news/22.png',
//     '/assets/news/23.png',
//     '/assets/news/24.png',
//     '/assets/news/25.png',
//     '/assets/news/26.png',
//     '/assets/news/27.png',
//     '/assets/news/28.png',
//     '/assets/news/29.jpg',
//     '/assets/news/30.jpg',
//     '/assets/news/31.jpg',
//     '/assets/news/32.jpg'
//   ];

// const sliderStyle = {
//   overflow: 'hidden',
//   width: '100%',
//   whiteSpace: 'nowrap',
//   boxSizing: 'border-box',
//   padding: '10px 0',
//   backgroundColor: '#f5f5f5',
// };

// const slideTrackStyle = {
//   display: 'inline-block',
//   whiteSpace: 'nowrap',
//   animation: 'scroll 25s linear infinite',
// };

// const slideStyle = {
//   height: '200px',
//   width: 'auto',
//   marginRight: '20px',
//   display: 'inline-block',
//   borderRadius: '12px',
//   boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
// };

// // Add keyframes directly via a <style> tag
// const keyframes = `
// @keyframes scroll {
//   0% {
//     transform: translateX(0);
//   }
//   100% {
//     transform: translateX(-50%);
//   }
// }
// `;

// const AutoScrollSlider = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Detect if the user is on mobile device
//     setIsMobile(window.innerWidth <= 768);
//   }, []);

//   return (
//     <>
//       <style>{keyframes}</style>
//       <motion.div
//         className="auto-scroll-slider"
//         style={sliderStyle}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <div style={slideTrackStyle}>
//           {images.concat(images).map((src, index) => (
//             <motion.img
//               key={index}
//               src={src}
//               alt={`slide-${index}`}
//               style={slideStyle}
//               initial={{ x: '100%' }}
//               animate={{ x: '0%' }}
//               transition={{ duration: 25, ease: 'linear' }}
//             />
//           ))}
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default AutoScrollSlider;
import React from 'react';

// List of image paths (make sure these are correctly located inside the public folder)
const images = [
  '/assets/news/1.png',
  '/assets/news/2.png',
  '/assets/news/3.png',
  '/assets/news/4.png',
  '/assets/news/5.png',
  '/assets/news/6.png',
  '/assets/news/7.png',
  '/assets/news/8.png',
  '/assets/news/9.png',
  '/assets/news/10.png',
  '/assets/news/11.png',
  '/assets/news/12.png',
  '/assets/news/13.png',
  '/assets/news/14.png',
  '/assets/news/15.png',
  '/assets/news/16.png',
  '/assets/news/17.png',
  '/assets/news/18.png',
  '/assets/news/19.png',
  '/assets/news/20.png',
  '/assets/news/21.png',
  '/assets/news/22.png',
  '/assets/news/23.png',
  '/assets/news/24.png',
  '/assets/news/25.png',
  '/assets/news/26.png',
  '/assets/news/27.png',
  '/assets/news/28.png',
  '/assets/news/29.png',
  '/assets/news/30.png',
  '/assets/news/31.png',
  '/assets/news/32.png',
];

// Styles for the slider
// const sliderStyle = {
//   overflow: 'hidden', // Hide overflow to only show images within the container
//   width: '100%', // Full width of the parent container
//   whiteSpace: 'nowrap', // Ensure the images are in a single row
//   boxSizing: 'border-box',
//   padding: '10px 0',
//   backgroundColor: '#f5f5f5',
// };

const sliderStyle = {
    overflowX: 'hidden', // okay for clean scrolling, but...
    width: '100%',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    padding: '10px 0',
    backgroundColor: '#f5f5f5',
  };
  

// const slideTrackStyle = {
//   display: 'inline-block',
//   whiteSpace: 'nowrap',
//   animation: 'scroll 20s linear infinite', // 25s scroll time, adjust as needed
// };

const slideTrackStyle = {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    animation: 'scroll 55s linear infinite',
    minWidth: '300%', // or enough to fit all images
  };
  

const slideStyle = {
  height: '200px', // Set the height of the images
  width: 'auto', // Width will be based on the image aspect ratio
  marginRight: '20px', // Add space between images
  display: 'inline-block', // Ensure images are displayed in a row
  borderRadius: '12px', // Optional styling for rounded corners
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Optional shadow for visual effect
};

// Keyframe animation for scrolling
const keyframes = `
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
`;

const AutoScrollSlider = () => {
  return (
    <>
      <style>{keyframes}</style>
      <div style={sliderStyle}>
        <div style={slideTrackStyle}>
          {images.concat(images).map((src, index) => (
            <img key={index} src={src} alt={`slide-${index}`} style={slideStyle} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AutoScrollSlider;
