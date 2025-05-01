import React, { useState } from 'react';

const NewsGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const newsImages = [
    { id: 1, src: '/assets/news/1.png', alt: 'News image 1', caption: 'Startup Samvad at Research & Innovation Park, IIT Delhi' },
    { id: 2, src: '/assets/news/2.png', alt: 'News image 2', caption: 'Winner of the Grand Challenge Series in the E-Mobility Charging Services sector' },
    { id: 3, src: '/assets/news/3.png', alt: 'News image 3', caption: 'Startup Mahakumbh Expo 2025' },
    { id: 4, src: '/assets/news/4.png', alt: 'News image 4', caption: 'Convergence India Expo and 10th Smart Cities India Expo at Bharat Mandapam, New Delhi!' },
    { id: 5, src: '/assets/news/5.png', alt: 'News image 5', caption: 'Bharat Mobility Global Expo 2025' },
    { id: 6, src: '/assets/news/6.png', alt: 'News image 6', caption: 'Graham Bell Award 2025' },
    { id: 7, src: '/assets/news/7.png', alt: 'News image 7', caption: 'Hyundai Corporation, representing both Korea and India at Dash for collaboration.' },
    { id: 8, src: '/assets/news/8.png', alt: 'News image 8', caption: 'DMRC Visits Our Office!' },
    { id: 9, src: '/assets/news/9.png', alt: 'News image 9', caption: 'Happy Engineers Day from Dash Dynamic Pvt Ltd!' },
    { id: 10, src: '/assets/news/10.png', alt: 'News image 10', caption: 'Honored to host the Vice Chancellor and Deputy Vice Chancellor of the The University Of Zambia (UNZA)' },
    { id: 11, src: '/assets/news/11.png', alt: 'News image 11', caption: 'Visit from Ashhok Kapoor, Minister of the Economic Council of India and Co-Founder & Managing Director of EzUrja Group.' },
    { id: 12, src: '/assets/news/12.png', alt: 'News image 12', caption: 'Dash Dynamic Showcased Innovative EV Wireless Charging Technology at Tata Motors.' },
    { id: 13, src: '/assets/news/13.png', alt: 'News image 13', caption: 'Present our technology at the Power Gen India event 2024, at Yash Bhoomi, IICC Dwarka.' },
    { id: 14, src: '/assets/news/14.png', alt: 'News image 14', caption: 'Dash Dynamic Showcased Innovative EV Wireless Charging Technology at Tata Motors Event in Pune' },
    { id: 15, src: '/assets/news/15.png', alt: 'News image 15', caption: 'Showcase our cutting-edge wireless charging technology at the Vikshit Bharat exhibition, organized by the PHD Chamber of Commerce.' },
    { id: 16, src: '/assets/news/16.png', alt: 'News image 16', caption: 'Showcase our cutting-edge technology at the Annual Day of DST NIDHI, R7I Park, IIT Delhi.' },
    { id: 17, src: '/assets/news/17.png', alt: 'News image 17', caption: 'IAS Officers Explore Innovation at Dash Dynamic Pvt. Ltd.' },
    { id: 18, src: '/assets/news/18.png', alt: 'News image 18', caption: 'Dash Dynamic has been awarded the prestigious Best R&D Award at The INDIA EV SHOWs 4th edition, held in Chennai and organized by Citroen.' },
    { id: 19, src: '/assets/news/19.png', alt: 'News image 19', caption: 'German Defense Minister Boris Pistorius' },
    { id: 20, src: '/assets/news/20.png', alt: 'News image 20', caption: 'Presenting to British members of Parliament.' },
    { id: 21, src: '/assets/news/21.png', alt: 'News image 21', caption: 'Visit by Russian delegates.' },
    { id: 22, src: '/assets/news/22.png', alt: 'News image 22', caption: 'Visitors from Department science and technology members.' },
    { id: 23, src: '/assets/news/23.png', alt: 'News image 23', caption: 'Convergence Expo at Pragati maidan 2023' },
    { id: 24, src: '/assets/news/24.png', alt: 'News image 24', caption: 'Demonstrate our tech to Mr. James Cleverly, British Foreign Secretary, Commonwealth and Development Affairs' },
    { id: 25, src: '/assets/news/25.png', alt: 'News image 25', caption: 'Pitching at Taj, Dubai 2024.' },
    { id: 26, src: '/assets/news/26.png', alt: 'News image 26', caption: 'Showcasing our wireless charging technology at Atmanir Bharbharat Expo 2024.' },
    { id: 27, src: '/assets/news/27.png', alt: 'News image 27', caption: 'Visit by British members of Parliament' },
    { id: 28, src: '/assets/news/28.png', alt: 'News image 28', caption: 'Visit by British members of Parliament' },

    { id: 29, src: '/assets/news/29.jpg', alt: 'News image 29', caption: 'Showing tech to international students.' },
    { id: 30, src: '/assets/news/30.jpg', alt: 'News image 30', caption: 'Visit by British members of Parliament' },
    { id: 31, src: '/assets/news/31.jpg', alt: 'News image 31', caption: 'Showing to H.E. Abdulla Bin Touq Al Marri, Minister of Economy, United Arab Emirates' },
    { id: 32, src: '/assets/news/32.jpg', alt: 'News image 32', caption: 'Pitching at LetsIgnite2023, Bangalore.' },
    { id: 33, src: '/assets/news/33.jpg', alt: 'News image 33', caption: 'Presenting tech to Lindsey Ford, Deputy Ass. Secretary of Defense on Southeast Asia.' },
    { id: 34, src: '/assets/news/34.jpg', alt: 'News image 34', caption: 'Showcasing our work to the esteemed delegate, Mrs Raquel Pena de Antuna (Vice President of the Dominican Republic)' },
  ];

  const openLightbox = (imageId) => {
    setSelectedImage(newsImages.find(img => img.id === imageId));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const ImageCard = ({ image, className }) => (
    <div
      className={`flex flex-col overflow-hidden rounded-[20px] cursor-pointer transition-all duration-300 ${className}`}
      onClick={() => openLightbox(image.id)}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover rounded-[20px] flex-1"
      />
      {image.caption && (
        <div className="p-3 bg-white">
          <p className="text-sm text-gray-700">{image.caption}</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full">
      {/* Header */}
      <div
        className="w-full bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: "url('/assets/news/bg.png')",
          backgroundPosition: "210px 110px",
          backgroundSize: "1440px 250px",
          paddingTop: "12rem",
          paddingBottom: "8rem",
        }}
      >
        <div
          className="absolute overflow-auto text-white font-bold text-5xl"
          style={{
            left: "771px",
            top: "199px",
            width: "498.56px",
            height: "80.83px",
            lineHeight: "1.2",
          }}
        >
          News Gallery
        </div>
      </div>

      {/* Grid Rows */}
      <div className="max-w-6xl mx-auto py-8 px-4">
        {Array.from({ length: Math.ceil(newsImages.length / 2) }, (_, i) => {
          const first = newsImages[i * 2];
          const second = newsImages[i * 2 + 1];
          const isEvenRow = i % 2 === 0;

          return (
            <div key={i} className="flex flex-col md:flex-row gap-6 mb-12 items-stretch">
              {isEvenRow ? (
                <>
                  {first && <ImageCard image={first} className="w-full md:w-1/3" />} 
                  {second && <ImageCard image={second} className="w-full md:w-2/3" />} 
                </>
              ) : (
                <>
                  {first && <ImageCard image={first} className="w-full md:w-2/3" />} 
                  {second && <ImageCard image={second} className="w-full md:w-1/3" />} 
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div
            className="max-w-4xl w-full bg-white rounded-[20px] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto object-contain"
              />
              <button
                onClick={closeLightbox}
                className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center"
              >
                ✕
              </button>
            </div>
            <div className="p-4 bg-white">
              <p className="text-gray-800">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsGallery;
