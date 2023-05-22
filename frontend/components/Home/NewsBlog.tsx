import React from 'react';
import blog1 from "public/images/blogs/blog-1.jpg";
import avatar from "public/images/blogs/avatar.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/legacy/image';

const NewsBlog: React.FC = () => {
  const news = [
    { img: blog1, cat: "App Development", title: "Improving your web performance with web service", des: "Many desktop publishing packages & will uncover many web sites.", avatar: avatar, authName: "Jani Moylanen", date: "2 days ago" },
    { img: blog1, cat: "App Development", title: "Improving your web performance with web service", des: "Many desktop publishing packages & will uncover many web sites.", avatar: avatar, authName: "Jani Moylanen", date: "2 days ago" },
    { img: blog1, cat: "App Development", title: "Improving your web performance with web service", des: "Many desktop publishing packages & will uncover many web sites.", avatar: avatar, authName: "Jani Moylanen", date: "2 days ago" },
    { img: blog1, cat: "App Development", title: "Improving your web performance with web service", des: "Many desktop publishing packages & will uncover many web sites.", avatar: avatar, authName: "Jani Moylanen", date: "2 days ago" }
  ]
  return (
    <div className='cus-container my-28'>
      <div className='text-center mb-16'>
        <h2 className=''>Our Latest News & Blog</h2>
        <p className='text-slate-500'>Stay Informed and Explore Our Latest Insights and Articles on Web Development</p>
      </div>
      <div>
        <Swiper
          slidesPerView={3}
          loop={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {
            news.map((ele, i) => <SwiperSlide key={i}>
              <div className="cus-card overflow-hidden mb-16">
                <div className='relative'>
                  <Image src={ele.img} layout='responsive' height={60} width={100} alt='blog image' />
                  <span className='abosolute left-5 bottom-0 bg-slate-500 rounded-full text-white'>{ele.cat}</span>
                </div>
                <div className='px-4 py-8'>

                </div>
              </div>
            </SwiperSlide>)
          }
        </Swiper>
      </div>
    </div >
  );
};

export default NewsBlog;