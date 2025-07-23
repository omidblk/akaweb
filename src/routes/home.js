import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-4  w-full px-4">
      <div className="w-full max-w-screen-2xl h-96">
        {" "}
        {/* Container for proper sizing */}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          // spaceBetween={20}  // Reduced space for better visibility
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
          breakpoints={{
            // Responsive breakpoints
            320: {
              slidesPerView: 1,
              // spaceBetween: 10
            },
            640: {
              slidesPerView: 1,
              // spaceBetween: 10
            },
            1024: {
              slidesPerView: 1,
              // spaceBetween: 10
            },
          }}
        >
          <SwiperSlide>
            <div className="xl:h-96 bg-gray-100 flex items-center gap-6 justify-center rounded-lg">
              <img className="w-1/2" src="/design/1.jpg" alt="" />
              <div className="flex flex-col items-center justify-center">
                <p>title</p>
                <p>Nostrud aliquip ut ad elit laborum nostrud adipisicing amet.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="xl:h-96 bg-gray-100 flex items-center gap-6 justify-center rounded-lg">
              <img className="w-1/2" src="/design/2.jpg" alt="" />
              <div className="flex flex-col items-center justify-center">
                <p>title</p>
                <p>Nostrud aliquip ut ad elit laborum nostrud adipisicing amet.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="xl:h-96 bg-gray-100 flex items-center gap-6 justify-center rounded-lg">
              <img className="w-1/2" src="/design/3.jpg" alt="" />
              <div className="flex flex-col items-center justify-center">
                <p>title</p>
                <p>Nostrud aliquip ut ad elit laborum nostrud adipisicing amet.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="xl:h-96 bg-gray-100 flex items-center gap-6 justify-center rounded-lg">
              <img className="w-1/2" src="/design/4.jpg" alt="" />
              <div className="flex flex-col items-center justify-center">
                <p>title</p>
                <p>Nostrud aliquip ut ad elit laborum nostrud adipisicing amet.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
