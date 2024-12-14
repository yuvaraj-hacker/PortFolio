import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Mousewheel } from 'swiper/modules';
import Kiranaa from '../Kiraana/Kiranaa';
import Jobezzy from '../Jobezzy/Jobezzy';
import GoldResort from '../GoldHill/GoldResort';
import StarBackground from './StarBackground';

export default function HomePage(props) {
    const {swiperHeight} = props;
  
    return (
        <div className='  mt-[60px] ' >
            <Swiper direction={'vertical'} pagination={{ clickable: true, }}  effect="fade" fadeEffect={{ crossFade: true }} speed={1400}   centeredSlides={true} slidesPerView={1} mousewheel={true} modules={[Pagination, Mousewheel]} style={{ height: `${swiperHeight}px` }} className="mySwiper">
                <SwiperSlide >
                    <div className="  h-full flex justify-center items-center  bg-black"  >
                        <div className=' '>
                            <StarBackground />
                        </div>
                        <div className='z-10'>
                            <Kiranaa />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" h-full flex items-center justify-center  bg-black  "  >
                        <div className=' '>
                            <StarBackground />
                        </div>
                        <div className='z-10'>
                            <Jobezzy />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="  h-full  flex items-center justify-center  bg-black  ">
                        <div className=' '>
                            <StarBackground />
                        </div>
                        <div className='z-10'>
                            <GoldResort />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
