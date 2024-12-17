// import React from 'react'
// import Common from '../CommonSection/Common'

// function YelagiriMain() {
//     const pageData = {
//         headerImage: '/assets/images/Third/yelagirihero.png',
//         name: 'YELAGIRI GOLD HILL RESORT',
//         category: 'Premium Resort and Holiday Destination',
//         description: 'Gold Hill Resort offers a serene escape nestled amidst picturesque surroundings, perfect for relaxation and rejuvenation.',
//         services: 'Luxurious accommodations, fine dining, event hosting, and recreational activities for an unforgettable experience.',
//         team: '8 specialists',
//         country: 'India',
//         descriptionImage: '/assets/images/Third/HillResort.png',
//         descriptImage: '/assets/images/Third/HillResort.png'
//     };


//     return (
//         <>
//             <section>
//                 <Common name={pageData.name}
//                     headerImage={pageData.headerImage}
//                     descriptionImage={pageData.descriptionImage}
//                     category={pageData.category}
//                     description={pageData.description}
//                     services={pageData.services}
//                     team={pageData.team}
//                     country={pageData.country}
//                     descriptImage={pageData.descriptImage}
//                     categoryColor="text-[#02AC4E]"
//                    />

//             </section>

//             <section>
//                 <p className="md:text-3xl text-xl">ABOUT THE PROJECT</p>
//             </section>
//         </>
//     )
// }

// export default YelagiriMain




import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

function Common({ headerImage, name, category, description, services, team, country, descriptionImage, descriptImage, categoryColor = 'text-white', }) {




    return (
        <>

            <section className="flex justify-center items-center bg-center bg-cover   bg-no-repeat rounded-br-[15rem] 2xl:h-[70vh] py-10  " style={{ backgroundImage: `url(${'/assets/images/Third/yelagirihero.png'})` }}>
                <div className='max-w-[90rem] mx-auto px-5 '>
                    <div className='grid lg:grid-cols-4 grid-cols-1 gap-5 items-center' >
                        <div className='col-span-2'>
                            <nav className="text-sm mb-6">
                                <Link to='/' className="text-blue-400 hover:underline">
                                    Home /
                                </Link>{" "}
                                /{" "}
                                <a href="#" className="text-blue-400 hover:underline">
                                    Portfolio /
                                </a>{" "}
                                /{" "}
                                <a href="#" className="text-[#02AC4E] hover:underline font-semibold">
                                    YELAGIRI GOLD HILL RESORT
                                </a>
                            </nav>
                            <h1 className="text-2xl md:text-5xl text-white font-bold mb-6">YELAGIRI GOLD HILL RESORT</h1>
                            <div className="md:space-y-4 space-y-2 text-lg md:text-xl text-white">
                                <div className='space-y-2'>
                                    <p className="md:text-2xl  text-[#02AC4E]">Category:</p>
                                    <p className=" md:text-base text-sm">Premium Resort and Holiday Destination</p>
                                </div>
                                <div className='space-y-2'>
                                    <p className="md:text-2xl  text-[#02AC4E]">Description:</p>
                                    <p className=" md:text-base text-sm">Gold Hill Resort offers a serene escape nestled amidst picturesque surroundings, perfect for relaxation and rejuvenation.</p>
                                </div>
                                <div className='space-y-2'>
                                    <p className="md:text-2xl  text-[#02AC4E]">Services:</p>
                                    <p className=" md:text-base text-sm">Luxurious accommodations, fine dining, event hosting, and recreational activities for an unforgettable experience.</p>
                                </div>
                                <div className='space-y-2'>
                                    <p className="md:text-2xl  text-[#02AC4E]">Team:</p>
                                    <p className=" md:text-base text-sm">8 specialists</p>
                                </div>
                                <div className='space-y-2'>
                                    <p className="md:text-2xl  text-[#02AC4E]">Country:</p>
                                    <p className=" md:text-base text-sm">India</p>
                                </div>

                            </div>
                        </div>
                        <img className='movess' src='/assets/images/Third/HillResort.png' alt="" />
                        <div className='relative right-10 bottom-28'>
                            <div className=' z-20   md:w-24 w-20'>
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
                                    }} className='border-2 rounded-2xl'  >

                                    <SwiperSlide >
                                        <div className="bg-[#FFF6D3] z-20  text-center   cursor-pointer">
                                            <img
                                                className=" "
                                                src='/assets/images/Third/avatar.png'

                                            />

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <div className="bg-[#FFF6D3] z-20     text-center  cursor-pointer">
                                            <img
                                                className=" "
                                                src='/assets/images/Third/avatar.png'

                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <div className="bg-[#FFF6D3] z-20     text-center   cursor-pointer">
                                            <img
                                                className=" "
                                                src='/assets/images/Third/avatar.png'

                                            />
                                        </div>
                                    </SwiperSlide>


                                </Swiper>
                            </div>
                            <div className=' relative md:right-20 right-16  bottom-10 z-40   w-20 md:w-24'>
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
                                            <img className="  " src='/assets/images/Third/avatar.png' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide  >
                                        <div className="bg-[#FFF6D3]      text-center  cursor-pointer">
                                            <img className=" " src='/assets/images/Third/avatar.png' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide  >
                                        <div className="bg-[#FFF6D3]    text-center   cursor-pointer">
                                            <img className=" " src='/assets/images/Third/avatar.png' />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className=' relative bottom-40 left-10 w-24  md:w-32'>
                                <Swiper
                                    slidesPerView={1}
                                    loop={true}
                                    modules={[Pagination, Autoplay]}
                                    autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: false,
                                        reverseDirection: true
                                    }}
                                    breakpoints={{
                                        640: { slidesPerView: 1 },
                                        768: { slidesPerView: 1 },
                                        1024: { slidesPerView: 1 },
                                    }} className='border-2 rounded-2xl' >

                                    <SwiperSlide  >
                                        <div className="bg-[#FFF6D3]       text-center   cursor-pointer">
                                            <img className=" " src='/assets/images/Third/thirds.png' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide  >
                                        <div className="bg-[#FFF6D3]       text-center   cursor-pointer">
                                            <img className=" " src='/assets/images/Third/thirds.png' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide  >
                                        <div className="bg-[#FFF6D3]       text-center   cursor-pointer">
                                            <img className=" " src='/assets/images/Third/thirds.png' />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section className='my-20 max-w-[70rem] mx-auto'>
                <div className='grid md:grid-cols-2  gap-10'>
                    <div className='flex flex-col gap-10'>
                        <div className="bg-[url('/assets/images/Third/gray.png')] bg-center bg-cover space-y-5 p-5">
                            <p className="text-[#02AC4E] md:text-3xl font-bold">ABOUT THE PROJECT</p>
                            <p className="text-justify">The  <span className='text-[#02AC4E]'> Yelagiri Gold Hill Resort </span> project is a premium website designed to showcase the elegance
                                and luxury of this holiday destination. Built using modern technologies like Next.js and Tailwind CSS,
                                the website ensures a seamless, fast, and visually appealing user experience.</p>
                            <p className="text-justify">Our 8-member team collaborated to create an intuitive and responsive design,
                                highlighting the resort’s stunning amenities and picturesque location. Special attention
                                was given to performance optimization and mobile-friendliness to cater to diverse user
                                needs.</p>
                            <p className=" text-justify ">This project reflects our commitment to delivering cutting-edge
                                web solutions that elevate brand identity and enhance customer
                                engagement.</p>
                        </div>
                        <div>
                            <img src="/assets/images/Third/lap.png" alt="" />
                        </div>
                    </div>
                    <div className='  relative '>
                        <div className='bg-black flex justify-center items-center  rounded-[3.5rem] h-full'>
                            {/* <div className="bg-[url('/assets/images/Third/iphonee.png')]   bg-center bg-cover bg-no-repeat">
                                    <div class="row">
                                        <div class="col-md-4 col-md-offset-4 content">
                                            <div class="screen">
                                                <img src="/assets/images/Third/farm.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                <div />
                            </div> */}
                            <div className="bg-[url('/assets/images/Third/iphonee.png')] relative bg-center bg-cover bg-no-repeat     overflow-hidden  flex items-center justify-center">
                                <div class=" w-[300px] h-[700px]   overflow-hidden relative  ">
                                   
                                    <div class="absolute flex  flex-col inset-0">
                                        <img
                                            src="/assets/images/Third/farm.jpg"
                                            alt="Scrolling content"
                                             class="w-full h-auto animate-autoscroll"
                                        />
                                        <img
                                            src="/assets/images/Third/farm.jpg"
                                            alt="Scrolling content"
                                            class="w-full h-auto animate-autoscroll"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <img className='w-20 absolute top-1/2 -left-16 ' src="/assets/images/Third/whitestar.png" alt="" />
                    </div>
                </div>
            </section>


            {/* <section className="bg-[url('/assets/images/Third/cool.png')]  md:my-20 my-10 bg-center bg-cover w-full bg-no-repeat">
                <div className='max-w-[60rem]  mx-auto px-5 md:py-10 py-5  '>
                    <div className='grid md:grid-cols-4  '>
                        <div className='flex flex-col justify-between col-span-1'>
                            <div>
                            </div>
                            <div className='border-2 rounded-3xl text-center   bg-white'>
                                <img className='rounded-t-3xl' src="/assets/images/Third/room1.png" alt="" />
                                <div className='p-2'>
                                    <p className="text-[#02AC4E]">Modern</p>
                                    <p className="">1 Bed In Room</p>
                                    <p className="">---------------------</p>
                                    <p className="">3 Peoples in the Room</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-2 relative top-28'>
                            <img className='mx-auto' src="/assets/images/Third/coolinside.png" alt="" />
                        </div>
                        <div className='flex flex-col justify-between col-span-1'>
                            <div className='border-2 rounded-3xl text-center   bg-white'>
                                <img className='rounded-t-3xl' src="/assets/images/Third/room2.png" alt="" />
                                <p className="text-[#02AC4E]">Retro</p>
                                <p className="">1 Bed In Room</p>
                                <p className="">-------------- </p>
                                <p className="">3 Peoples in the Room</p>
                            </div>
                            <div className='border-2 rounded-3xl text-center   bg-white'>
                                <img className='rounded-t-3xl' src="public/assets/images/Third/room3.png" alt="" />
                                <p className="text-[#02AC4E]">Classic</p>
                                <p className="">1 Bed In Room</p>
                                <p className="">--------------- </p>
                                <p className="">3 Peoples in the Room</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}



            <section className="relative bg-[url('/assets/images/Third/cool.png')] md:my-20 my-10 bg-center bg-cover w-full bg-no-repeat">

                <div id="raindrop-container" className="absolute inset-0 z-0 pointer-events-none overflow-hidden"></div>

                <div className="relative z-10 max-w-[60rem] mx-auto px-5 md:py-10 py-5">
                    <div className="grid md:grid-cols-4">
                        <div className="flex flex-col justify-between col-span-1">
                            <div></div>
                            <div className="border-2 rounded-3xl text-center bg-white">
                                <img
                                    className="rounded-t-3xl"
                                    src="/assets/images/Third/room1.png"
                                    alt="Room 1"
                                />
                                <div className="p-2">
                                    <p className="text-[#02AC4E]">Modern</p>
                                    <p>1 Bed In Room</p>
                                    <p>---------------------</p>
                                    <p>3 Peoples in the Room</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 relative top-28">
                            <img
                                className="mx-auto"
                                src="/assets/images/Third/coolinside.png"
                                alt="Cool Inside"
                            />
                        </div>
                        <div className="flex flex-col justify-between col-span-1">
                            <div className="border-2 rounded-3xl text-center bg-white">
                                <img
                                    className="rounded-t-3xl"
                                    src="/assets/images/Third/room2.png"
                                    alt="Room 2"
                                />
                                <p className="text-[#02AC4E]">Retro</p>
                                <p>1 Bed In Room</p>
                                <p>--------------</p>
                                <p>3 Peoples in the Room</p>
                            </div>
                            <div className="border-2 rounded-3xl text-center bg-white">
                                <img
                                    className="rounded-t-3xl"
                                    src="/assets/images/Third/room3.png"
                                    alt="Room 3"
                                />
                                <p className="text-[#02AC4E]">Classic</p>
                                <p>1 Bed In Room</p>
                                <p>---------------</p>
                                <p>3 Peoples in the Room</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='mx-auto max-w-full  flex justify-center items-center  px-5'>
                <img className='' src="/assets/images/Third/Twoheader.png" alt="" />
            </section>



        </>
    )
}

export default Common
