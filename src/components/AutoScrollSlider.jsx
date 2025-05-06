
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
//   '/assets/news/29.png',
//   '/assets/news/30.png',
//   '/assets/news/31.png',
//   '/assets/news/32.jpg',
// ];

// // Styles for the slider
// // const sliderStyle = {
// //   overflow: 'hidden', // Hide overflow to only show images within the container
// //   width: '100%', // Full width of the parent container
// //   whiteSpace: 'nowrap', // Ensure the images are in a single row
// //   boxSizing: 'border-box',
// //   padding: '10px 0',
// //   backgroundColor: '#f5f5f5',
// // };

// const sliderStyle = {
//     overflowX: 'hidden', // okay for clean scrolling, but...
//     width: '100%',
//     whiteSpace: 'nowrap',
//     boxSizing: 'border-box',
//     padding: '10px 0',
//     backgroundColor: '#f5f5f5',
//   };
  

// // const slideTrackStyle = {
// //   display: 'inline-block',
// //   whiteSpace: 'nowrap',
// //   animation: 'scroll 20s linear infinite', // 25s scroll time, adjust as needed
// // };

// const slideTrackStyle = {
//     display: 'inline-block',
//     whiteSpace: 'nowrap',
//     animation: 'scroll 55s linear infinite',
//     minWidth: '300%', // or enough to fit all images
//   };
  

// const slideStyle = {
//   height: '200px', // Set the height of the images
//   width: 'auto', // Width will be based on the image aspect ratio
//   marginRight: '20px', // Add space between images
//   display: 'inline-block', // Ensure images are displayed in a row
//   borderRadius: '12px', // Optional styling for rounded corners
//   boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Optional shadow for visual effect
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
// `;

// const AutoScrollSlider = () => {
//   return (
//     <>
//       <style>{keyframes}</style>
//       <div style={sliderStyle}>
//         <div style={slideTrackStyle}>
//           {images.concat(images).map((src, index) => (
//             <img key={index} src={src} alt={`slide-${index}`} style={slideStyle} />
//           ))}
//         </div>
//       </div>
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
  '/assets/news/32.jpg',
];

// Styles for the slider
const sliderStyle = {
  overflowX: 'auto', // Allow horizontal scrolling
  width: '100%',
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  padding: '10px 0',
  backgroundColor: '#f5f5f5',
};

// Track style for scrolling
const slideTrackStyle = {
  display: 'inline-block',
  whiteSpace: 'nowrap',
  animation: 'scroll 55s linear infinite',
  minWidth: '300%',
};

// Style for each image
const slideStyle = {
  height: '200px',
  width: 'auto',
  marginRight: '20px',
  display: 'inline-block',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease', // Smooth zoom-in transition
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

/* Hover zoom effect */
.image-slide {
  transition: transform 0.3s ease; /* Smooth transition for scaling */
}

.image-slide:hover {
  transform: scale(1.1); /* Zoom-in effect on hover */
}
`;

const AutoScrollSlider = () => {
  return (
    <>
      <style>{keyframes}</style>
      <div style={sliderStyle}>
        <div style={slideTrackStyle}>
          {images.concat(images).map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`slide-${index}`}
              className="image-slide" // Apply CSS class
              style={slideStyle}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AutoScrollSlider;

