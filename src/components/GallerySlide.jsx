import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';

import { useState } from 'react';

const galleryItems = [
  { src: '/img/slide.jpg' },
  { src: '/img/slide2.jpg' },
  { src: '/img/slide3.jpg' },
  { src: '/img/slide4.jpg' },
  { src: '/img/slide5.jpg' },
  { src: '/img/slide6.jpg' },
  { src: '/img/slide7.jpg' },
];

export default function GallerySlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section id="gallery" className="bg-white dark:bg-gray-800 px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-8 text-center">
        Our Gallery
      </h2>

      {/* Main slider */}
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg"
      >
        {galleryItems.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-[250px] md:h-[450px] bg-gray-200 dark:bg-gray-700">
              <img
                src={item.src}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        spaceBetween={10}
        className="mt-6 max-w-3xl mx-auto"
        breakpoints={{
          480: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
        }}
      >
        {galleryItems.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-20 cursor-pointer rounded-md overflow-hidden">
              <img
                src={item.src}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
