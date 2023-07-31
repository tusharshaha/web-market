import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';

SwiperCore.use([Pagination, Navigation, Autoplay]);

const Companies: React.FC = () => {
  const logos = new Array(7).fill(0)

  return (
    <div className='cus-container my-20 py-20 border-y'>
      <Swiper
        slidesPerView={6}
        spaceBetween={120}
        slidesPerGroup={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        className="mySwiper">
        {
          logos.map((ele, i) => <SwiperSlide key={i}>
            <Image className='w-[90px] h-[90px] grayscale hover:grayscale-0 transition duration-500' src={`/logos/${i + 1}.webp`} height={100} width={100} alt='' />
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default Companies;