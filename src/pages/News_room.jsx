import React, { useState } from 'react';

const NewsGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // const newsImages = [
  //   { id: 1, src: '/assets/news/1.png', alt: 'News image 1', caption: 'Startup Samvad at Research & Innovation Park, IIT Delhi' },
  //   { id: 2, src: '/assets/news/2.png', alt: 'News image 2', caption: 'Winner of the Grand Challenge Series in the E-Mobility Charging Services sector' },
  //   { id: 3, src: '/assets/news/3.png', alt: 'News image 3', caption: 'Startup Mahakumbh Expo 2025' },
  //   { id: 4, src: '/assets/news/4.png', alt: 'News image 4', caption: 'Convergence India Expo and 10th Smart Cities India Expo at Bharat Mandapam, New Delhi!' },
  //   { id: 5, src: '/assets/news/5.png', alt: 'News image 5', caption: 'Bharat Mobility Global Expo 2025' },
  //   { id: 6, src: '/assets/news/6.png', alt: 'News image 6', caption: 'Graham Bell Award 2025' },
  //   { id: 7, src: '/assets/news/7.png', alt: 'News image 7', caption: 'Hyundai Corporation, representing both Korea and India at Dash for collaboration.' },
  //   { id: 8, src: '/assets/news/8.png', alt: 'News image 8', caption: 'DMRC Visits Our Office!' },
  //   { id: 9, src: '/assets/news/9.png', alt: 'News image 9', caption: 'Happy Engineers Day from Dash Dynamic Pvt Ltd!' },
  //   { id: 10, src: '/assets/news/10.png', alt: 'News image 10', caption: 'Honored to host the Vice Chancellor and Deputy Vice Chancellor of the The University Of Zambia (UNZA)' },
  //   { id: 11, src: '/assets/news/11.png', alt: 'News image 11', caption: 'Visit from Ashhok Kapoor, Minister of the Economic Council of India and Co-Founder & Managing Director of EzUrja Group.' },
  //   { id: 12, src: '/assets/news/12.png', alt: 'News image 12', caption: 'Dash Dynamic Showcased Innovative EV Wireless Charging Technology at Tata Motors.' },
  //   { id: 13, src: '/assets/news/13.png', alt: 'News image 13', caption: 'Present our technology at the Power Gen India event 2024, at Yash Bhoomi, IICC Dwarka.' },
  //   { id: 14, src: '/assets/news/14.png', alt: 'News image 14', caption: 'Dash Dynamic Showcased Innovative EV Wireless Charging Technology at Tata Motors Event in Pune' },
  //   { id: 15, src: '/assets/news/15.png', alt: 'News image 15', caption: 'Showcase our cutting-edge wireless charging technology at the Vikshit Bharat exhibition, organized by the PHD Chamber of Commerce.' },
  //   { id: 16, src: '/assets/news/16.png', alt: 'News image 16', caption: 'Showcase our cutting-edge technology at the Annual Day of DST NIDHI, R7I Park, IIT Delhi.' },
  //   { id: 17, src: '/assets/news/17.png', alt: 'News image 17', caption: 'IAS Officers Explore Innovation at Dash Dynamic Pvt. Ltd.' },
  //   { id: 18, src: '/assets/news/18.png', alt: 'News image 18', caption: 'Dash Dynamic has been awarded the prestigious Best R&D Award at The INDIA EV SHOWs 4th edition, held in Chennai and organized by Citroen.' },
  //   { id: 19, src: '/assets/news/19.png', alt: 'News image 19', caption: 'German Defense Minister Boris Pistorius' },
  //   { id: 20, src: '/assets/news/20.png', alt: 'News image 20', caption: 'Presenting to British members of Parliament.' },
  //   { id: 21, src: '/assets/news/21.png', alt: 'News image 21', caption: 'Visit by Russian delegates.' },
  //   { id: 22, src: '/assets/news/22.png', alt: 'News image 22', caption: 'Visitors from Department science and technology members.' },
  //   { id: 23, src: '/assets/news/23.png', alt: 'News image 23', caption: 'Convergence Expo at Pragati maidan 2023' },
  //   { id: 24, src: '/assets/news/24.png', alt: 'News image 24', caption: 'Demonstrate our tech to Mr. James Cleverly, British Foreign Secretary, Commonwealth and Development Affairs' },
  //   { id: 25, src: '/assets/news/25.png', alt: 'News image 25', caption: 'Pitching at Taj, Dubai 2024.' },
  //   { id: 26, src: '/assets/news/26.png', alt: 'News image 26', caption: 'Showcasing our wireless charging technology at Atmanir Bharbharat Expo 2024.' },
  //   { id: 27, src: '/assets/news/27.png', alt: 'News image 27', caption: 'Visit by British members of Parliament' },
  //   { id: 28, src: '/assets/news/28.png', alt: 'News image 28', caption: 'Visit by British members of Parliament' },

  //   { id: 29, src: '/assets/news/29.jpg', alt: 'News image 29', caption: 'Showing tech to international students.' },
  //   { id: 30, src: '/assets/news/30.jpg', alt: 'News image 30', caption: 'Visit by British members of Parliament' },
  //   { id: 31, src: '/assets/news/31.jpg', alt: 'News image 31', caption: 'Showing to H.E. Abdulla Bin Touq Al Marri, Minister of Economy, United Arab Emirates' },
  //   { id: 32, src: '/assets/news/32.jpg', alt: 'News image 32', caption: 'Pitching at LetsIgnite2023, Bangalore.' },
  //   { id: 33, src: '/assets/news/33.jpg', alt: 'News image 33', caption: 'Presenting tech to Lindsey Ford, Deputy Ass. Secretary of Defense on Southeast Asia.' },
  //   { id: 34, src: '/assets/news/34.jpg', alt: 'News image 34', caption: 'Showcasing our work to the esteemed delegate, Mrs Raquel Pena de Antuna (Vice President of the Dominican Republic)' },
  // ];

const newsImages = [
    { id: 1, src: '/assets/news/1.png', alt: 'News image 1', caption: 'Startup Samvad at Research & Innovation Park, IIT Delhi', link: 'https://www.linkedin.com/posts/dash-dynamic-llp_startupsamvad-iitdelhi-fitt-activity-7323582384249982976-RJc2?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADaE9QEBD8hmjUjlJzfUP0wSXEm9VNkAfJ8' },
    { id: 2, src: '/assets/news/2.png', alt: 'News image 2', caption: 'Winner of the Grand Challenge Series in the E-Mobility Charging Services sector', link: 'https://www.linkedin.com/posts/dash-dynamic-llp_dashdynamic-grandchallengeseries-emobility-activity-7314995257249579009-QlnA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADaE9QEBD8hmjUjlJzfUP0wSXEm9VNkAfJ8' },
    { id: 3, src: '/assets/news/3.png', alt: 'News image 3', caption: 'Startup Mahakumbh Expo 2025', link: 'https://www.linkedin.com/posts/dash-dynamic-llp_startupmahakumbh-innovation-entrepreneurship-activity-7314912306054799361-44Yh?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADaE9QEBD8hmjUjlJzfUP0wSXEm9VNkAfJ8' },
    { id: 4, src: '/assets/news/4.png', alt: 'News image 4', caption: 'Convergence India Expo and 10th Smart Cities India Expo at Bharat Mandapam, New Delhi!', link: 'https://www.linkedin.com/posts/dash-dynamic-llp_dashdynamic-innovationinev-evrevolution-activity-7310640475802071040-lNDY?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADaE9QEBD8hmjUjlJzfUP0wSXEm9VNkAfJ8' },
    { id: 5, src: '/assets/news/5.png', alt: 'News image 5', caption: 'Bharat Mobility Global Expo 2025', link: 'https://www.linkedin.com/posts/dash-dynamic-llp_bharatmobilityexpo-globalmobility-futureoftransport-activity-7288247229818052611-1Gzw?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADaE9QEBD8hmjUjlJzfUP0wSXEm9VNkAfJ8' },
    { id: 6, src: '/assets/news/6.png', alt: 'News image 6', caption: 'Graham Bell Award 2025', link: 'https://www.linkedin.com/posts/dash-dynamic-llp_congratulations-to-dash-dynamic-pvt-ltd-finalist-activity-7299032372237254656-ahO4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADaE9QEBD8hmjUjlJzfUP0wSXEm9VNkAfJ8' },
    { id: 7, src: '/assets/news/7.png', alt: 'News image 7', caption: 'Hyundai Corporation, representing both Korea and India at Dash for collaboration.', link: 'https://www.linkedin.com/posts/dash-dynamic-llp_evcharging-wirelesscharging-electricvehicles-activity-7271052285747560448-m3d2?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADaE9QEBD8hmjUjlJzfUP0wSXEm9VNkAfJ8' },
    { id: 8, src: '/assets/news/8.png', alt: 'News image 8', caption: 'DMRC Visits Our Office!', link: 'https://www.linkedin.com/posts/dash-dynamic-llp_urbanmobility-innovation-dmrc-activity-7267854928100888576-KDoS?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADaE9QEBD8hmjUjlJzfUP0wSXEm9VNkAfJ8' },
    { id: 9, src: '/assets/news/9.png', alt: 'News image 9', caption: 'Happy Engineers Day from Dash Dynamic Pvt Ltd!', link: 'https://www.linkedin.com/posts/dash-dynamic-llp_happy-engineers-day-from-dash-dynamic-pvt-activity-7240984050054656000-TzjK?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADaE9QEBD8hmjUjlJzfUP0wSXEm9VNkAfJ8' },
    { id: 10, src: '/assets/news/10.png', alt: 'News image 10', caption: 'Honored to host the Vice Chancellor and Deputy Vice Chancellor of the The University Of Zambia (UNZA)', link: 'https://www.linkedin.com/posts/dash-dynamic-llp_innovation-technology-highereducation-activity-7266785007292018688-zjuR?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADaE9QEBD8hmjUjlJzfUP0wSXEm9VNkAfJ8' },
    { id: 11, src: '/assets/news/11.png', alt: 'News image 11', caption: 'Visit from Ashhok Kapoor, Co-Founder & Managing Director of EzUrja Group.', link: 'https://www.linkedin.com/posts/dash-dynamic-llp_industryleadership-dashdynamic-ezurjagroup-activity-7254760381288480769-pk-M?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADaE9QEBD8hmjUjlJzfUP0wSXEm9VNkAfJ8' },
    { id: 12, src: '/assets/news/12.png', alt: 'News image 12', caption: 'Dash Dynamic Showcased Innovative EV Wireless Charging Technology at Tata Motors.', link: 'https://www.linkedin.com/posts/dash-dynamic-llp_dashdynamic-evcharging-wirelesscharging-activity-7246836703875776512-7ckl?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADaE9QEBD8hmjUjlJzfUP0wSXEm9VNkAfJ8' },
    { id: 13, src: '/assets/news/13.png', alt: 'News image 13', caption: 'Present our technology at the Power Gen India event 2024, at Yash Bhoomi, IICC Dwarka.', link: 'https://www.linkedin.com/posts/dash-dynamic-llp_powergenindia-startupindia-innovation-activity-7238066637277405185-XM4A?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADaE9QEBD8hmjUjlJzfUP0wSXEm9VNkAfJ8' },
    { id: 14, src: '/assets/news/14.png', alt: 'News image 14', caption: 'Dash Dynamic Showcased Innovative EV Wireless Charging Technology at Tata Motors Event in Pune', link: '/post/14' },
    { id: 15, src: '/assets/news/15.png', alt: 'News image 15', caption: 'Showcase our cutting-edge wireless charging technology at the Vikshit Bharat exhibition, organized by the PHD Chamber of Commerce.', link: 'https://www.linkedin.com/posts/dash-dynamic-llp_electricvehicles-wirelesscharging-innovation-activity-7244604281973043200-fZKu?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADaE9QEBD8hmjUjlJzfUP0wSXEm9VNkAfJ8' },
    { id: 16, src: '/assets/news/16.png', alt: 'News image 16', caption: 'Showcase our cutting-edge technology at the Annual Day of DST NIDHI, R7I Park, IIT Delhi.', link: 'https://www.linkedin.com/posts/dash-dynamic-llp_innovation-techshowcase-wirelesscharging-activity-7238063430379659264-sKrh?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADaE9QEBD8hmjUjlJzfUP0wSXEm9VNkAfJ8' },
    { id: 17, src: '/assets/news/17.png', alt: 'News image 17', caption: 'IAS Officers Explore Innovation at Dash Dynamic Pvt. Ltd.', link: 'https://www.linkedin.com/posts/dash-dynamic-llp_uttarpradesh-chhattisgarh-assam-activity-7209183752399331328-sH1k?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADaE9QEBD8hmjUjlJzfUP0wSXEm9VNkAfJ8' },
    { id: 18, src: '/assets/news/18.png', alt: 'News image 18', caption: 'Dash Dynamic has been awarded the prestigious Best R&D Award at The INDIA EV SHOWs 4th edition, held in Chennai and organized by Citroen.', link: 'https://www.linkedin.com/posts/dash-dynamic-llp_indiaevshow-bestrdaward-dynamiccharging-activity-7215252478735343616-i1M2?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADaE9QEBD8hmjUjlJzfUP0wSXEm9VNkAfJ8' },
    { id: 19, src: '/assets/news/19.png', alt: 'News image 19', caption: 'German Defense Minister Boris Pistorius', link: '/post/19' },
    { id: 20, src: '/assets/news/20.png', alt: 'News image 20', caption: 'Presenting to British members of Parliament.', link: '/post/20' },
    { id: 21, src: '/assets/news/21.png', alt: 'News image 21', caption: 'Visit by Russian delegates.', link: '/post/21' },
    { id: 22, src: '/assets/news/22.png', alt: 'News image 22', caption: 'Visitors from Department science and technology members.', link: '/post/22' },
    { id: 23, src: '/assets/news/23.png', alt: 'News image 23', caption: 'Convergence Expo at Pragati maidan 2023', link: '/post/23' },
    { id: 24, src: '/assets/news/24.png', alt: 'News image 24', caption: 'Demonstrate our tech to Mr. James Cleverly, British Foreign Secretary, Commonwealth and Development Affairs', link: '/post/24' },
    { id: 25, src: '/assets/news/25.png', alt: 'News image 25', caption: 'Pitching at Taj, Dubai 2024.', link: '/post/25' },
    { id: 26, src: '/assets/news/26.png', alt: 'News image 26', caption: 'Showcasing our wireless charging technology at Atmanir Bharbharat Expo 2024.', link: '/post/26' },
    { id: 27, src: '/assets/news/27.png', alt: 'News image 27', caption: 'Visit by British members of Parliament', link: '/post/27' },
    { id: 28, src: '/assets/news/28.png', alt: 'News image 28', caption: 'Visit by British members of Parliament', link: '/post/28' },
    { id: 29, src: '/assets/news/29.jpg', alt: 'News image 29', caption: 'Showing tech to international students.', link: '/post/29' },
    { id: 30, src: '/assets/news/30.jpg', alt: 'News image 30', caption: 'Visit by British members of Parliament', link: '/post/30' },
    { id: 31, src: '/assets/news/31.jpg', alt: 'News image 31', caption: 'Showing to H.E. Abdulla Bin Touq Al Marri, Minister of Economy, United Arab Emirates', link: '/post/31' },
    { id: 32, src: '/assets/news/32.jpg', alt: 'News image 32', caption: 'Pitching at LetsIgnite2023, Bangalore.', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7173210005744046080/' },
    { id: 33, src: '/assets/news/33.jpg', alt: 'News image 33', caption: 'Presenting tech to Lindsey Ford, Deputy Ass. Secretary of Defense on Southeast Asia.', link: '/post/33' },
    { id: 34, src: '/assets/news/34.jpg', alt: 'News image 34', caption: 'Showcasing our work to the esteemed delegate, Mrs Raquel Pena de Antuna (Vice President of the Dominican Republic)', link: '/post/34' },
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
    // <div className="w-full">
    //   {/* Header */}
    //   <div
    //     className="w-full bg-cover bg-center flex items-center justify-center relative"
    //     style={{
    //       backgroundImage: "url('/assets/news/bg.png')",
    //       backgroundPosition: "210px 110px",
    //       backgroundSize: "1440px 250px",
    //       paddingTop: "12rem",
    //       paddingBottom: "8rem",
    //     }}
    //   >
    //     <div
    //       className="absolute overflow-auto text-white font-bold text-5xl"
    //       style={{
    //         left: "771px",
    //         top: "199px",
    //         width: "498.56px",
    //         height: "80.83px",
    //         lineHeight: "1.2",
    //       }}
    //     >
    //       News Gallery
    //     </div>
    //   </div>

          <div className="w-full overflow-hidden">
    {/* Header */}
    <div
      className="w-full bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: "url('assets/news/bg.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Centered Content */}
      <div
        className="relative z-10 text-white text-center w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16"
        style={{ paddingTop: "12rem", paddingBottom: "8rem" }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          News Gallery
        </h1>
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
