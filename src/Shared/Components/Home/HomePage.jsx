import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Mousewheel } from 'swiper/modules';
import Kiranaa from '../Kiraana/Kiranaa';
import Jobezzy from '../Jobezzy/Jobezzy';
import GoldResort from '../GoldHill/GoldResort';

export default function HomePage() {
    return (
        <div className='  mt-[95px]' style={{ height: `calc(100vh - 95px)` }}>
            <Swiper direction={'vertical'} pagination={{ clickable: true,  }} mousewheel={true} modules={[Pagination, Mousewheel]} className="mySwiper h-full"  >
                <SwiperSlide>
                    <div className="h-full flex items-center justify-center  bg-[#201E2E] ">
                        <Kiranaa />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-full flex items-center justify-center   bg-[#201E2E]  ">
                        <Jobezzy />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-full flex items-center justify-center   bg-[#201E2E]  ">
                        <GoldResort />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
