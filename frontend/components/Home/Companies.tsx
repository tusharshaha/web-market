import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';

SwiperCore.use([Pagination, Navigation, Autoplay]);

const Companies: React.FC = () => {
  const logos = new Array(6).fill(0)

  return (
    <div className='cus-container my-20 py-20 border-y'>
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
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
            <div className='flex items-center justify-center group'>
              <Image className='w-[90px] h-[90px] grayscale group-hover:grayscale-0 transition duration-500' src={`/logos/${i + 1}.webp`} height={100} width={100} alt='' />
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default Companies;