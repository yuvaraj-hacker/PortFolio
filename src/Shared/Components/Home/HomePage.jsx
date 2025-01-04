import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Mousewheel } from 'swiper/modules';
import Kiranaa from '../Kiraana/Kiranaa';
import Jobezzy from '../Jobezzy/Jobezzy';
import GoldResort from '../GoldHill/GoldResort';
import StarBackground from './StarBackground';
import Folsumhome from '../Folsumhome/Folsumhome';
import Vividhome from '../Commonhomecard/commoncard';
import Commoncard from '../Commonhomecard/commoncard';

export default function HomePage(props) {

    const colors = {
        imagebright: '/assets/images/Third/Quality2.png',
        first: 'Premium Resort and Holiday Destination',
        second: 'Gold Hill Resort offers a serene escape nestled amidst picturesque surroundings, perfect for relaxation and rejuvenation.',
        websitecate: 'Montessori Education',
        tech1: 'css',
        tech2: 'saas',
        from: '#ffff',
        to: '#0000',

    };
    const folsum = {
        imagebright: '/assets/images/Third/Quality2.png',
        first: 'Premium Resort and Holiday Destination',
        second: 'Gold Hill Resort offers a serene escape nestled amidst picturesque surroundings, perfect for relaxation and rejuvenation.',
        websitecate: 'booking WEB ',
        tech1: 'css',
        tech2: 'saas',
        from: '#ffff',
        to: '#0000',

    };

    const vivid = {
        imagebright: '/assets/images/Third/Quality2.png',
        first: 'Premium Resort and Holiday Destination',
        second: 'Gold Hill Resort offers a serene escape nestled amidst picturesque surroundings, perfect for relaxation and rejuvenation.',
        websitecate: 'Engineering Consultants ',
        tech1: 'css',
        tech2: 'saas',
        from: '#ffff',
        to: '#0000',

    };

    const inba = {
        imagebright: '/assets/images/Third/Quality2.png',
        first: 'Premium Resort and Holiday Destination',
        second: 'Gold Hill Resort offers a serene escape nestled amidst picturesque surroundings, perfect for relaxation and rejuvenation.',
        websitecate: 'Inba Foods ',
        tech1: 'css',
        tech2: 'saas',
        from: '#ffff',
        to: '#0000',

    };

    const sri = {
        imagebright: '/assets/images/Third/Quality2.png',
        first: 'Premium Resort and Holiday Destination',
        second: 'Gold Hill Resort offers a serene escape nestled amidst picturesque surroundings, perfect for relaxation and rejuvenation.',
        websitecate: 'Sri krishna ',
        tech1: 'css',
        tech2: 'saas',
        from: '#ffff',
        to: '#0000',

    };

    const holidays = {
        imagebright: '/assets/images/Third/Quality2.png',
        first: 'Premium Resort and Holiday Destination',
        second: 'Gold Hill Resort offers a serene escape nestled amidst picturesque surroundings, perfect for relaxation and rejuvenation.',
        websitecate: 'HCL Holidays',
        tech1: 'css',
        tech2: 'saas',
       
    };


    const { swiperHeight } = props;

    return (
        <div className=' mt-[60px] relative ' >
            <Swiper direction={'vertical'} pagination={{ clickable: true, }} effect="fade" fadeEffect={{ crossFade: true }} speed={1400} centeredSlides={true} slidesPerView={1} mousewheel={true} modules={[Pagination, Mousewheel]} style={{ height: `${swiperHeight}px` }} className="mySwiper">
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
                    <div className=" h-full flex items-center justify-center  bg-black " >
                        <div className=' '>
                            <StarBackground />
                        </div>
                        <div className='z-10'>
                            <Jobezzy />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" h-full flex items-center justify-center  bg-black  ">
                        <div className=' '>
                            <StarBackground />
                        </div>
                        <div className='z-10'>
                            <GoldResort />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="  h-full  flex items-center justify-center  bg-black ">
                        <div className=' '>
                            <StarBackground />
                        </div>
                        <div className='z-10'>
                            <Commoncard imagebright={folsum.imagebright} first={folsum.first} second={folsum.second} websitecate={folsum.websitecate} tech1={folsum.tech1} tech2={folsum.tech2} from='from-green-600' to='to-green-200' link='/folsum-pulse' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="  h-full  flex items-center justify-center  bg-black  ">
                        <div className=' '>
                            <StarBackground />
                        </div>
                        <div className='z-10'>
                            <Commoncard imagebright={colors.imagebright} first={colors.first} second={colors.second} websitecate={colors.websitecate} tech1={colors.tech1} tech2={colors.tech2} from='from-[#E63D3D]' to='to-red-200' link='/colors-montessori' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="  h-full  flex items-center justify-center  bg-black  ">
                        <div className=' '>
                            <StarBackground />
                        </div>
                        <div className='z-10'>
                            <Commoncard imagebright={vivid.imagebright} first={vivid.first} second={vivid.second} websitecate={vivid.websitecate} tech1={vivid.tech1} tech2={vivid.tech2} from='from-[#FF0000]' to='to-red-200' link='/vivid-engineering-consultants' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="  h-full  flex items-center justify-center  bg-black  ">
                        <div className=' '>
                            <StarBackground />
                        </div>
                        <div className='z-10'>
                            <Commoncard imagebright={inba.imagebright} first={inba.first} second={inba.second} websitecate={inba.websitecate} tech1={inba.tech1} tech2={inba.tech2} from='from-[#00B453]' to='to-green-200' link='/inba-foods' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="  h-full  flex items-center justify-center  bg-black  ">
                        <div className=' '>
                            <StarBackground />
                        </div>
                        <div className='z-10'>
                            <Commoncard imagebright={sri.imagebright} first={sri.first} second={sri.second} websitecate={sri.websitecate} tech1={sri.tech1} tech2={sri.tech2} from='from-[#D89C5C]' to='to-amber-100' link='/sri-krishna' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="  h-full  flex items-center justify-center  bg-black  ">
                        <div className=' '>
                            <StarBackground />
                        </div>
                        <div className='z-10'>
                            <Commoncard  imagebright={holidays.imagebright} first={holidays.first} second={holidays.second} websitecate={holidays.websitecate} tech1={holidays.tech1} tech2={holidays.tech2} from='from-[#FCCE38]' to='to-orange-100' link='/dglholidays' />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
