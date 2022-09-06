import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import './Slider.css';

function Slider() {
  return (
    <div className="container">
      <Swiper
        modules={ [Navigation] }
        spaceBetween={ 50 }
        slidesPerView={ 1 }
        scrollbar={ { draggable: true } }
        loop
        speed={ 800 }
        className="swiper"
      >
        <SwiperSlide className="swiper-slide">
          <img src="https://i.im.ge/2022/09/06/OZlnsc.eu-primeira-ft.png" alt="eu" width="400px" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="https://i.im.ge/2022/09/06/OZrqZh.gym.png" alt="gym" width="400px" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="https://i.im.ge/2022/09/06/OZlpY0.euepedrin.png" alt="euepedrin" width="400px" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="https://i.im.ge/2022/09/06/OZlvBT.bnr.png" alt="bn" width="400px" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
