
import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Rain } from 'react-rainfall';

function YelagiriMain(props) {

    const {isInView , sectionRef, key } = props;
 
    return (
        <>
            <section className="flex justify-center pt-20 items-center bg-center bg-cover   bg-no-repeat md:rounded-br-[15rem] rounded-br-[8rem] 3xl:h-[70vh] py-10  " style={{ backgroundImage: `url(${'/assets/images/Third/yelagirihero.png'})` }}>
                <div className='max-w-[78rem] mx-auto px-5 '>
                    <div className='grid lg:grid-cols-5 grid-cols-1 gap-5 items-center' >
                        <div className='col-span-3'>
                            <nav className="font-light mb-6">
                                <Link to='/' className="text-blue-400 hover:underline">
                                    Home / {' '}
                                </Link>
                                <a href="#" className="text-blue-400 hover:underline">
                                    Portfolio / {' '}
                                </a>
                                <a href="#" className="text-[#02AC4E] hover:underline uppercase">
                                    YELAGIRI GOLD HILL RESORT
                                </a>
                            </nav>
                            <h1 className="text-2xl md:text-[50px] text-white font-semibold mb-6">YELAGIRI GOLD HILL RESORT</h1>
                            <div className="md:space-y-4 space-y-2 text-lg md:text-xl text-white lg:text-lg ">
                                <div className='space-y-2'>
                                    <p className="text-[#02AC4E]">Category:</p>
                                    <p className="">Premium Resort and Holiday Destination</p>
                                </div>
                                <div className='space-y-2'>
                                    <p className="text-[#02AC4E]">Description:</p>
                                    <p className="">Gold Hill Resort offers a serene escape nestled amidst picturesque surroundings, perfect for relaxation and rejuvenation.</p>
                                </div>
                                <div className='space-y-2'>
                                    <p className="text-[#02AC4E]">Services:</p>
                                    <p className="">Luxurious accommodations, fine dining, event hosting, and recreational activities for an unforgettable experience.</p>
                                </div>
                                <div className='space-y-2'>
                                    <p className="text-[#02AC4E]">Team:</p>
                                    <p className="">8 specialists</p>
                                </div>
                                <div className='space-y-2'>
                                    <p className="text-[#02AC4E]">Country:</p>
                                    <p className="">India</p>
                                </div>

                            </div>
                        </div>
                        <div className='col-span-2 relative h-full w-full'> 
                            <img className='movess lg:w-[80%] lg:absolute bottom-0 left-10 pt-10 ' src='/assets/images/Third/HillResort.png'  alt="" />
                        
                            <div className='absolute  right-10 lg:top-0 -top-10 '>
                                <div className='relative z-30 md:w-24 w-20'>
                                    <Swiper
                                        slidesPerView={1}
                                        loop={true}
                                        modules={[Pagination, Autoplay]}
                                        autoplay={{
                                            delay: 2000,
                                            disableOnInteraction: false,
                                        }}
                                        breakpoints={{
                                            640: { slidesPerView: 1 },
                                            768: { slidesPerView: 1 },
                                            1024: { slidesPerView: 1 },
                                        }} className='relative border-2 rounded-2xl'  >

                                        <SwiperSlide >
                                            <div className="bg-[#FFF6D3] z-20  text-center   cursor-pointer">
                                                <img className=" " src='/assets/images/Third/swipeimg1.png' />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="bg-[#FFF6D3] z-20 text-center cursor-pointer">
                                                <img className=" " src='/assets/images/Third/swipeimg1.png' />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="bg-[#FFF6D3] z-20 text-center cursor-pointer">
                                                <img className=" " src='/assets/images/Third/swipeimg1.png' />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>

                                <div className=' absolute lg:right-8 -bottom-3 translate-y-full z-10 w-20 md:w-24'>
                                    <Swiper

                                        slidesPerView={1}
                                        loop={true}
                                        modules={[Pagination, Autoplay]}
                                        autoplay={{
                                            delay: 2000,
                                            disableOnInteraction: false,
                                        }}
                                        breakpoints={{
                                            640: { slidesPerView: 1 },
                                            768: { slidesPerView: 1 },
                                            1024: { slidesPerView: 1 },
                                        }} className='border-2 rounded-2xl' >

                                        <SwiperSlide  >
                                            <div className="bg-[#FFF6D3]   shadow-md   text-center   cursor-pointer">
                                                <img className="scale-105" src='/assets/images/Third/swipeimg3.png' />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide  >
                                            <div className="bg-[#FFF6D3]      text-center  cursor-pointer">
                                                <img className="scale-105" src='/assets/images/Third/swipeimg3.png' />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide  >
                                            <div className="bg-[#FFF6D3]    text-center   cursor-pointer">
                                                <img className="scale-105" src='/assets/images/Third/swipeimg3.png' />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className=' absolute -translate-y-1/2 left-10 z-20  w-24 md:w-32'>
                                    <Swiper
                                        slidesPerView={1}
                                        loop={true}
                                        modules={[Pagination, Autoplay]}
                                        autoplay={{ delay: 2000, disableOnInteraction: false, reverseDirection: true }}
                                        breakpoints={{
                                            640: { slidesPerView: 1 },
                                            768: { slidesPerView: 1 },
                                            1024: { slidesPerView: 1 },
                                        }} className='border-2 rounded-2xl' >

                                        <SwiperSlide  >
                                            <div className="bg-[#FFF6D3]       text-center   cursor-pointer">
                                                <img className=" " src='/assets/images/Third/swipeimg2.png' />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide  >
                                            <div className="bg-[#FFF6D3]       text-center   cursor-pointer">
                                                <img className=" " src='/assets/images/Third/swipeimg2.png' />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide  >
                                            <div className="bg-[#FFF6D3]       text-center   cursor-pointer">
                                                <img className=" " src='/assets/images/Third/swipeimg2.png' />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section ref={sectionRef} className='md:my-20 my-5 max-w-[78rem] mx-auto'>
                <div className='grid md:grid-cols-2  items-center  md:gap-10 gap-5'>
                    <div className='flex flex-col px-2   justify-between md:gap-10 gap-3'>
                        <div className="bg-[url('/assets/images/Third/gray.png')] bg-center bg-cover space-y-5 px-3 md:px-5 p-5 lg:p-10 rounded-[50px]  ">
                            <p className="text-[#02AC4E] md:text-3xl lg:text-5xl font-semibold">ABOUT THE PROJECT</p>
                            <p className="text-justify text-lg leading-relaxed">The  <span className='text-[#02AC4E]'> Yelagiri Gold Hill Resort </span> project is a premium website designed to showcase the elegance
                                and luxury of this holiday destination. Built using modern technologies like Next.js and Tailwind CSS,
                                the website ensures a seamless, fast, and visually appealing user experience.</p>
                            <p className="text-justify  text-lg leading-relaxed">Our 8-member team collaborated to create an intuitive and responsive design,
                                highlighting the resort’s stunning amenities and picturesque location. Special attention
                                was given to performance optimization and mobile-friendliness to cater to diverse user
                                needs.</p>
                            <p className=" text-justify  text-lg leading-relaxed">This project reflects our commitment to delivering cutting-edge  web solutions that elevate brand identity and enhance customer  engagement.</p>
                        </div>
                        <div>
                            <img className='md:px-0 px-2' src="/assets/images/Third/lap.png" alt="" />
                        </div>
                    </div>
                    <div className=' relative '>
                        <div className='  '>
                            <div className="bg-[url('/assets/images/Third/fmn.png')] bg-contain relative bg-center bg-no-repeat md:p-6 p-3 overflow-hidden  flex items-center justify-center">
                                <div className=" md:w-[310px] w-[287px] h-[648px] pt-6 relative ">
                                    <div key={key} className={`absolute flex h-[515px] mt-6 flex-col inset-0 ${isInView ? 'animate-autoscroll animate-infinite ' : ''}`} >
                                        <img src="/assets/images/Third/yelagir.jpg" alt="Scrolling content" className="w-full h-auto relative md:left-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img className='w-20 absolute top-1/2 -left-7 md:block hidden ' src="/assets/images/Third/whitestar.png" alt="" />
                    </div>
                </div>
            </section>
           
            <section className="relative bg-[url('/assets/images/Third/cool.png')] md:my-20 my-10 bg-center bg-cover w-full bg-no-repeat">
                <div>
                    <Rain />
                </div>
                <div className="relative z-10 max-w-[60rem] mx-auto px-5 md:py-10 py-5">
                    <div className="grid md:grid-cols-4 grid-cols-1 md:gap-0  ">
                        <div className="flex flex-col justify-between col-span-1">
                            <div></div>
                            <div className="flex flex-col md:gap-10 gap-5">
                                <div className='border-2 rounded-3xl group  text-center hover:scale-105 duration-300 bg-white'>
                                    <img className="rounded-t-3xl group-hover:scale-95 overflow-hidden duration-300 w-full  " src="/assets/images/Third/room1.png" alt="Room 1" />
                                    <div className="p-2">
                                        <p className="text-[#02AC4E]  md:text-xl">Modern</p>
                                        <p className='md:text-sm text-xs'>1 Bed In Room</p>
                                        <p>----------- </p>
                                        <p className='md:text-sm text-xs'>3 Peoples in the Room</p>
                                    </div>
                                </div>
                                <a href='https://www.goldhillresort.com/' target='_blank'>
                                    <div className='p-2 text-center rounded-3xl text-white bg-[#02AC4E]'>
                                        <p className="">www.goldhillresort.com</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-span-2 relative md:top-28">
                            <img className="mx-auto lg:w-[70%] my-5 lg:my-0" src="/assets/images/Third/coolinside.png" alt="Cool Inside" />
                        </div>
                        <div className="flex flex-col justify-between gap-5 col-span-1">
                            <div className="border-2 rounded-3xl text-center group  hover:scale-105 duration-300 bg-white">
                                <img className="rounded-t-3xl  group-hover:scale-95 overflow-hidden duration-300 w-full" src="/assets/images/Third/room2.png" alt="Room 2" />
                                <div className='p-2'>
                                    <p className="text-[#02AC4E] md:text-xl">Retro</p>
                                    <p className='md:text-sm text-xs'>1 Bed In Room</p>
                                    <p>--------- </p>
                                    <p className='md:text-sm text-xs'>3 Peoples in the Room</p>
                                </div>
                            </div>
                            <div className="border-2 rounded-3xl text-center group   hover:scale-105 duration-300 bg-white">
                                <img className="rounded-t-3xl  group-hover:scale-95 overflow-hidden duration-300 w-full" src="/assets/images/Third/room3.png" alt="Room 3" />
                                <div className='p-2'>
                                    <p className="text-[#02AC4E] md:text-xl">Classic</p>
                                    <p className='md:text-sm text-xs'>1 Bed In Room</p>
                                    <p>-------- </p>
                                    <p className='md:text-sm text-xs'>3 Peoples in the Room</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mx-auto max-w-full   md:my-20  my-10 md:mt-48 flex justify-center items-center  px-5'>
                <div className='relative'>
                    <img className='w-[800px] ' src="/assets/images/Third/Twoheader.png" alt="" />
                    <div className='w-40 '>
                        <div className="absolute top-0 right-0  md:w-2/6 w-3/6 text-center   py-2 bg-[#02AC4E] rounded-3xl md:text-xl  text-white text-xs">Comfortable rooms</div>
                        <img className='absolute md:top-10 top-6 lg:right-52 md:right-64 right-32  w-5 z-10    ' src="/assets/images/Third/downarrow.png" alt="" />
                        <img className='absolute md:top-24 top-16 right-5 w-5 z-10  ' src="/assets/images/Third/downarrow.png" alt="" />
                        <div className="absolute md:top-14  top-10 right-0 md:w-2/6 w-3/6  text-center py-2 bg-[#02AC4E] rounded-3xl text-white  md:text-xl  text-xs">Private resorts</div>
                        <div className="absolute md:top-28  top-20 right-0  md:w-2/6 w-3/6 text-center py-2 bg-[#02AC4E] rounded-3xl text-white  md:text-xl  text-xs">Catering & dining </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#161a21] md:py-20 py-10 w-full bg-no-repeat">
                <div className='px-5'>
                    <div className='max-w-[70rem] mx-auto  bg-[#464a4f]  border-2 rounded-[40px] p-5 lg:p-10  ' >
                        <div className='flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-5 text-white'>
                            <div>
                                <p className="md:text-[24px] font-semibold leading-relaxed tracking-wide uppercase "> "Rediscover luxury and tranquility at Gold Hill Resort! <br className='hidden 2xl:block' />  Your perfect gateway for relaxation, celebrations, <br className='hidden 2xl:block' /> 
                                    and unforgettable experiences awaits."</p>
                            </div>
                            <div className='relative'>
                                <div className=''>
                                    <button className='rounded-3xl  md:text-base mx-auto text-xs bg-[#00B85F] p-1 px-4'>
                                        <div className='relative'>
                                            <p className="whitespace-nowrap">Contact Us</p>
                                            <img className='absolute top-0 md:-left-2   w-2 -left-3' src="/assets/images/seventh/white-flower2.png" alt="" />
                                            <img className='absolute bottom-0     w-2 md:-right-2 -right-3' src="/assets/images/seventh/white-flower.png" alt="" />
                                        </div>
                                    </button>
                                </div>
                                <img className= 'hidden lg:block  -translate-x-1/2 bottom-5 absolute md:h-auto h-10' src="/assets/images/Third/footerarc.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default YelagiriMain
