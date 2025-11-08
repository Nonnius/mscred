import React from 'react'
import network from '../assets/network.jpg'
import './mscred.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {imageSlides} from '../data/Data';




const MSCredBody = () => {
  return (
    <>
      <div
        className="imgBg absolute inset-0 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${network})` }}
      >
        <div
          className="credBg flex justify-center items-center bg-cyan-800/40 rounded-md overflow-auto w-full max-w-[23rem] sm:max-w-[46rem] md:max-w-[55rem] lg:max-w-[68rem] mx-auto p-4"
        >
          <Swiper
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}

           pagination={{
              el: '.swiper-pagination', 
              clickable: true,
            }}
            navigation={true}
            breakpoints={{
                390: {slidesPerView: 1},
                412: {slidesPerView: 1},
                712: {slidesPerView: 1},
                768: {slidesPerView: 1},
                844: {slidesPerView: 1},
                915: {slidesPerView: 1},
                1024: {slidesPerView: 1},
                1440: {slidesPerView: 1},
                1500: {slidesPerView: 1},
            }}
             keyboard={{
                enabled: true
            }}
            mousewheel={{
                thresholdDelta: 70
            }}
            
            modules={[Pagination, Navigation]}
            className="msCredSwiper"
          >
            {imageSlides.map((slide, index)=>(
              <SwiperSlide key={index}>
                <h2 className="imgTitle text-white text-2xl text-center font-semibold items-center mb-2 label">
                  {slide.title}
                </h2>
                <img
                src={slide.url}
                alt={slide.alt || slide.title}
                className="credImg z-50 mx-auto w-[23rem] sm:w-[28rem] md:w-[35rem] lg:w-[40rem] xl:w-[45rem] rounded shadow-md"
                />
              </SwiperSlide>
            ))}

          </Swiper>
        </div>
      </div>
    </>
  )
}

export default MSCredBody