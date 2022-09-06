import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import './Slider.css';

function Slider() {
  return (
    <div className="container">
      <Swiper
        modules={ [Navigation, Pagination, Scrollbar, A11y] }
        spaceBetween={ 50 }
        slidesPerView={ 1 }
        navigation={ { clickable: true } }
        pagination={ { clickable: true } }
        scrollbar={ { draggable: true } }
        loop
        onSwiper={ (swiper) => console.log(swiper) }
        onSlideChange={ () => console.log('slide change') }
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
          <img src="https://i.im.ge/2022/09/06/OZlvBT.bnr.png" alt="bnr" width="400px" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
