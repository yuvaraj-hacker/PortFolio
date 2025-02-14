import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Mousewheel } from 'swiper/modules'; 
import StarBackground from './StarBackground';
import Commoncard from '../Commonhomecard/commoncard'; 

export default function HomePage(props) {

    const kiranaa = {
        bgImage: '/assets/images/one/cutimage.png',
        bgStyle: '!bg-left !bg-no-repeat !bg-contain',
        imagebright: '/assets/images/one/Kiranaa.png',
        imageStyle: '!-mb-5',
        first: 'Platform business model',
        second: 'A convenient platform to buy fresh vegetables, fruits, flowers and essentials online.',
        websitecate: 'E-commerce Web App',
        techList: ['MongoDB', 'Express.js', 'ReactJS', 'Tailwind CSS', 'AWS'],
        from: 'from-green-600',
        to: 'to-green-200',
        link:'/kiranaa-bazaar'
    };
    
    const jobezzy = {
        bgImage: '/assets/images/Second/jobezzy.png',
        imagebright: '/assets/images/Second/Quality1.png',
        first: 'Job Posting and Recruitment Platform',
        second: 'A streamlined platform connecting job seekers with employers for diverse opportunities.',
        websitecate: 'MOBILE WEB App',
        techList: ['React Native', 'Express.js', 'Tailwind CSS'],
        from: 'from-[#ffc105]',
        to: 'to-[#fff]',
        link:'/jobezzy'
    };

    const goldhillresort = {
        bgImage: '/assets/images/Third/GoldHill.png',
        imagebright: '/assets/images/Third/Quality2.png',
        first: 'Premium Resort and Holiday Destination',
        second: 'Gold Hill Resort offers a serene escape nestled amidst picturesque surroundings, perfect for relaxation and rejuvenation.',
        websitecate: 'booking WEB App',
        techList: ['Next.js','Tailwind CSS'],
        from: 'from-[#05ab50]',
        to:'to-[#fff]',
        link:'/yelagiri-gold-hill-resort'
    };

    const colors = {
        imagebright: '/assets/images/Homepages/colormainimage.png',
        bgImage: '/assets/images/Homepages/colorsbgimage.png',
        first: 'Montessori Preschool and Early Education',
        second: 'Montessori-based education, interactive learning, and skill development programs for early childhood growth.',
        websitecate: 'education website',
        tech1: 'React',
        tech2: 'Tailwind css',
        from: '#ffff',
        to: '#0000',
    };
    const folsum = {
        bgImage: '/assets/images/Homepages/folbgimage.png',
        imagebright: '/assets/images/Homepages/folsumm.png',
        first: 'Community and Lifestyle Platform',
        second: 'Folsom Pulse connects residents with local events, services, and news for a vibrant community experience.',
        websitecate: 'Community App ',
        tech1: 'Flutter',
        tech2: 'Java',
        from: '#ffff',
        to: '#0000',

    };

    const vivid = {
        imagebright: '/assets/images/Homepages/vividmainimage.png',
        bgImage: '/assets/images/Homepages/vividbgimages.png',
        imageStyle: '!-mb-5 ',
        first: 'Engineering Consultancy Services',
        second: 'VIVID Engineering Consultant offers innovative and comprehensive engineering, architectural, and design solutions adhering to top industry standards.',
        websitecate: 'Engineering Consultants ',
        tech1: 'css',
        tech2: 'saas',
        tech3: 'php',
        from: '#ffff',
        to: '#0000',

    };

    const inba = {
        bgImage: '/assets/images/Homepages/inbabgimages.png',
        imagebright: '/assets/images/Homepages/foodsmainimage.png',
        first: 'Millet-based health foods',
        second: 'High-quality, preservative-free millet products promoting healthy and natural eating.',
        websitecate: 'E-commerce Web App ',
        tech1: 'Angular Js',
        tech2: 'Express Js',
        tech3: 'Mean',
        from: '#ffff',
        to: '#0000',

    };

    const sri = {
        imagebright: '/assets/images/Homepages/srimainimage.png',
        bgImage: '/assets/images/Homepages/srikrishbgimage.png',
        first: 'Indian Restaurant',
        second: 'Authentic Indian cuisine in La Rochelle, offering a delightful culinary journey with traditional dishes and warm hospitality.',
        websitecate: 'Restaurant',
        tech1: 'css',
        tech2: 'saas',
        from: '#ffff',
        to: '#0000',

    };

    const holidays = {
        bgImage: '/assets/images/Homepages/DglBackimage.png',
        imagebright: '/assets/images/Homepages/dglmainimage.png',
        first: 'Travel and Tourism Services',
        second: 'Tailored holiday packages and exceptional travel experiences.',
        websitecate: 'Holiday Booking Website',
        tech1: 'css',
        tech2: 'saas',

    };

    const valluvas = {
        bgImage: '/assets/images/Homepages/valluvasbgimage.png',
        imagebright: '/assets/images/Homepages/valluvamainimage.png',
        first: 'Distance Education Center',
        second: 'Valluvas Study Center provides quality distance education and job-oriented courses in partnership with top universities',
        websitecate: 'Distance Education ',
        tech1: 'React',
        tech2: 'Express js',
        tech3: 'Mango Db',

    };

    const malabar = {
        bgImage: '/assets/images/Homepages/malabarbgimages.png',
        imagebright: '/assets/images/Homepages/malabarmainimage.png',
        imageStyle: '!-mb-5 ',
        first: 'Indian Grocery Store',
        second: 'Your one-stop shop for authentic Indian groceries, fresh produce, and spices in Folsom.',
        websitecate: 'Indian Grocery Store',
        tech1: 'MySQL',
        tech2: 'Tailwind CSS',
        tech3: 'PHP',

    };


    const { swiperHeight } = props;

    return (
        <div className=' mt-[60px] relative ' >
            <Swiper direction={'vertical'} pagination={{ clickable: true, }} effect="fade" fadeEffect={{ crossFade: true }} speed={1400} centeredSlides={true} slidesPerView={1} mousewheel={true} modules={[Pagination, Mousewheel]} style={{ height: `${swiperHeight}px` }} className="mySwiper">

                <SwiperSlide>
                    <div className="  h-full  flex items-center justify-center  bg-black ">
                        <div className=' '>
                            <StarBackground />
                        </div>
                        <div className='z-10'>
                            <Commoncard imagebright={kiranaa.imagebright} first={kiranaa.first} second={kiranaa.second} bgImage={kiranaa.bgImage} websitecate={kiranaa.websitecate} techList={kiranaa.techList} from={kiranaa.from} to={kiranaa.to} bgStyle={kiranaa.bgStyle} imageStyle={kiranaa.imageStyle} link={kiranaa.link} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="  h-full  flex items-center justify-center  bg-black ">
                        <div className=' '>
                            <StarBackground />
                        </div>
                        <div className='z-10'>
                            <Commoncard imagebright={jobezzy.imagebright} first={jobezzy.first} second={jobezzy.second} bgImage={jobezzy.bgImage} websitecate={jobezzy.websitecate} techList={jobezzy.techList} from={jobezzy.from} to={jobezzy.to} link={jobezzy.link} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="  h-full  flex items-center justify-center  bg-black ">
                        <div className=' '>
                            <StarBackground />
                        </div>
                        <div className='z-10'>
                            <Commoncard imagebright={goldhillresort.imagebright} first={goldhillresort.first} second={goldhillresort.second} bgImage={goldhillresort.bgImage} websitecate={goldhillresort.websitecate} techList={goldhillresort.techList} from={goldhillresort.from} to={goldhillresort.to} bgStyle={goldhillresort.bgStyle} imageStyle={goldhillresort.imageStyle} link={goldhillresort.link} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="  h-full  flex items-center justify-center  bg-black ">
                        <div className=' '>
                            <StarBackground />
                        </div>
                        <div className='z-10'>
                            <Commoncard imagebright={folsum.imagebright} first={folsum.first} second={folsum.second} bgImage={folsum.bgImage} techList={['Next Js', 'Tailwind css', 'AWS']} websitecate={folsum.websitecate} tech1={folsum.tech1} tech2={folsum.tech2} from='from-green-600' to='to-green-200' link='/folsum-pulse' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="  h-full  flex items-center justify-center  bg-black  ">
                        <div className=' '>
                            <StarBackground />
                        </div>
                        <div className='z-10'>
                            <Commoncard imagebright={colors.imagebright} first={colors.first} second={colors.second} bgImage={colors.bgImage} techList={['React Js', 'PHP',]} websitecate={colors.websitecate} tech1={colors.tech1} tech2={colors.tech2} from='from-[#E63D3D]' to='to-red-200' link='/colors-montessori' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="  h-full  flex items-center justify-center  bg-black  ">
                        <div className=' '>
                            <StarBackground />
                        </div>
                        <div className='z-10'>
                            <Commoncard imagebright={vivid.imagebright} first={vivid.first} second={vivid.second} bgImage={vivid.bgImage} techList={['HTML', 'Tailwind CSS', 'PHP', 'Javascript']} websitecate={vivid.websitecate} tech1={vivid.tech1} tech2={vivid.tech2} imageStyle={vivid.imageStyle} from='from-[#FF0000]' to='to-red-200' link='/vivid-engineering-consultants' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="  h-full  flex items-center justify-center  bg-black  ">
                        <div className=' '>
                            <StarBackground />
                        </div>
                        <div className='z-10'>
                            <Commoncard imagebright={inba.imagebright} first={inba.first} second={inba.second} bgImage={inba.bgImage} techList={['MEAN stack', 'Bootstrap', 'HTML', 'CSS']} websitecate={inba.websitecate} tech1={inba.tech1} tech2={inba.tech2} from='from-[#00B453]' to='to-green-200' link='/inba-foods' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="  h-full  flex items-center justify-center  bg-black  ">
                        <div className=' '>
                            <StarBackground />
                        </div>
                        <div className='z-10'>
                            <Commoncard imagebright={sri.imagebright} first={sri.first} second={sri.second} bgImage={sri.bgImage} techList={['Bootstrap', 'HTML', 'CSS']} websitecate={sri.websitecate} tech1={sri.tech1} tech2={sri.tech2} from='from-[#D89C5C]' to='to-amber-100' link='/sri-krishna' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="  h-full  flex items-center justify-center  bg-black  ">
                        <div className=' '>
                            <StarBackground />
                        </div>
                        <div className='z-10'>
                            <Commoncard imagebright={holidays.imagebright} first={holidays.first} bgImage={holidays.bgImage} techList={['Bootstrap', 'HTML', 'CSS', 'PHP']} second={holidays.second} websitecate={holidays.websitecate} tech1={holidays.tech1} tech2={holidays.tech2} from='from-[#FCCE38]' to='to-orange-100' link='/dglholidays' />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="  h-full  flex items-center justify-center  bg-black  ">
                        <div className=' '>
                            <StarBackground />
                        </div>
                        <div className='z-10'>
                            <Commoncard imagebright={valluvas.imagebright} first={valluvas.first} bgImage={valluvas.bgImage} techList={['Express.js', 'ReactJS', 'Tailwind CSS', 'MongoDB']} second={valluvas.second} websitecate={valluvas.websitecate} tech1={valluvas.tech1} tech2={valluvas.tech2} tech3={valluvas.tech3} from='from-[#FCCE38]' to='to-orange-100' link='/valluvas' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="  h-full  flex items-center justify-center  bg-black  ">
                        <div className=' '>
                            <StarBackground />
                        </div>
                        <div className='z-10'>
                            <Commoncard imagebright={malabar.imagebright} first={malabar.first} bgImage={malabar.bgImage} imageStyle={malabar.imageStyle} techList={['MySQL', 'Tailwind CSS', 'PHP']} second={malabar.second} websitecate={malabar.websitecate} tech1={malabar.tech1} tech2={malabar.tech2} tech3={malabar.tech3} from='from-[#FCCE38]' to='to-orange-100' link='/malabar' />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
