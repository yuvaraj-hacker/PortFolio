import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";


function FolsumMain() {

    return (
        <>

            <section className="flex justify-center items-center bg-center bg-cover   bg-no-repeat rounded-br-[15rem] 3xl:h-[70vh] py-10  " style={{ backgroundImage: `url(${'/assets/images/Third/yelagirihero.png'})` }}>
                <div className='max-w-[90rem] mx-auto px-5 '>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 items-center' >
                        <div className=' '>
                            <nav className="text-sm mb-6">
                                <Link to='/' className="text-blue-400 hover:underline">
                                    Home /
                                </Link>{" "}
                                /{" "}
                                <a href="#" className="text-blue-400 hover:underline">
                                    Portfolio /
                                </a>{" "}
                                /{" "}
                                <a href="#" className="text-[#FC9D4A] hover:underline font-semibold">
                                    FOLSOM PULSE
                                </a>
                            </nav>
                            <h1 className="text-2xl md:text-5xl text-white font-bold mb-6">FOLSOM PULSE</h1>
                            <div className="md:space-y-4 space-y-2 text-lg md:text-xl text-white">
                                <div className='space-y-2'>
                                    <p className="md:text-2xl  text-[#FC9D4A]">Category:</p>
                                    <p className=" md:text-base text-sm">Community and Lifestyle Platform</p>
                                </div>
                                <div className='space-y-2'>
                                    <p className="md:text-2xl  text-[#FC9D4A]">Description:</p>
                                    <p className=" md:text-base text-sm">Folsom Pulse connects residents with local events, services,
                                        and news for a vibrant community experience.</p>
                                </div>
                                <div className='space-y-2'>
                                    <p className="md:text-2xl  text-[#FC9D4A]">Services:</p>
                                    <p className=" md:text-base text-sm">Event updates, community news, service directories, and a
                                        platform for local engagement.</p>
                                </div>
                                <div className='space-y-2'>
                                    <p className="md:text-2xl  text-[#FC9D4A]">Team:</p>
                                    <p className=" md:text-base text-sm">8 specialists</p>
                                </div>
                                <div className='space-y-2'>
                                    <p className="md:text-2xl  text-[#FC9D4A]">Country:</p>
                                    <p className=" md:text-base text-sm">United State</p>
                                </div>

                            </div>
                        </div>
                        <div className=' mx-auto'>
                            <div
                                className='flex relative  lg:top-52'>
                                <img data-aos="fade-right" data-aos-delay="600" className=' ' src='/assets/images/Fourth/folsummain.png' alt="" />
                                <img data-aos="fade-left" data-aos-delay="300" className=' absolute xl:-right-1/3 lg:-right-12 md:-right-1/4   xl:w-auto w-52  top-48 sm:block hidden  xl:top-44' src='/assets/images/Fourth/folsummain2.png' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='max-w-[90rem] md:mt-[400px] mt-16 md:mb-[200px] mb-10 mx-auto px-5'>
                <p className="text-[#FC9D4A] font-bold md:text-4xl">ABOUT THE PROJECT</p>
            </div>
            <section className='space-y-5'>
                <div className='max-w-[90rem] mx-auto px-5'>
                    <div className='grid lg:grid-cols-4 gap-10 items-center'>
                        <div className='relative col-span-2 space-y-3 '>
                            <img className='mx-auto rounded-3xl' src="/assets/images/Fourth/imag.png" alt="" />
                            <svg className="sparkling-star absolute -top-10  right-28 " width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 25.5C8.41019 25.5 25.1417 20.5072 25.4943 0.64151C25.4931 0.422791 25.495 0.208835 25.5 0C25.5 0.215541 25.4981 0.429373 25.4943 0.64151C25.544 9.32507 30.6274 25.5 51 25.5H0Z" fill="#FC9D4A" />
                                <path d="M0 25.5C8.41019 25.5 25.1417 30.4928 25.4943 50.3585C25.4931 50.5772 25.495 50.7912 25.5 51C25.5 50.7845 25.4981 50.5706 25.4943 50.3585C25.544 41.6749 30.6274 25.5 51 25.5H0Z" fill="#FC9D4A" />
                            </svg>
                            <svg className="sparkling-star absolute bottom-8  left-28 " width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 25.5C8.41019 25.5 25.1417 20.5072 25.4943 0.64151C25.4931 0.422791 25.495 0.208835 25.5 0C25.5 0.215541 25.4981 0.429373 25.4943 0.64151C25.544 9.32507 30.6274 25.5 51 25.5H0Z" fill="#FC9D4A" />
                                <path d="M0 25.5C8.41019 25.5 25.1417 30.4928 25.4943 50.3585C25.4931 50.5772 25.495 50.7912 25.5 51C25.5 50.7845 25.4981 50.5706 25.4943 50.3585C25.544 41.6749 30.6274 25.5 51 25.5H0Z" fill="#FC9D4A" />
                            </svg>
                            <div>
                                <a href='https://www.folsompulse.com/' target='_blank'>
                                    <div className='p-2 px-4 bg-[#236C76] w-fit rounded-3xl text-white'>
                                        www.folsompulse.com
                                    </div>
                                </a>
                            </div>
                            <img data-aos="flip-up" className='absolute -top-1/3 -left-0 w-60  lg:block hidden  ' src="/assets/images/Fourth/sec2.png" alt="" />
                            <img data-aos="flip-up" className='absolute -bottom-1/3  -right-0 lg:block hidden  w-60' src="/assets/images/Fourth/sec3.png" alt="" />
                        </div>
                        <div className='md:space-y-5 col-span-2 md:text-base text-sm space-y-3 text-justify'>
                            <p> <span className='text-[#FC9D4A]'>Folsom Pulse</span> is a dynamic community and lifestyle platform designed to connect residents with local events,
                                services, and news, fostering a vibrant and engaged community. Our 8-member team collaborated to develop
                                this user-centric platform using modern web technologies, including  <span className='text-[#FC9D4A]'> Next.js, Tailwind CSS,  </span> and  <span className='text-[#FC9D4A]'> AWS,</span>
                                ensuring scalability, performance, and a seamless experience for all users.
                            </p>
                            <p>
                                The primary objective of this project was to create an intuitive and visually
                                appealing platform that makes navigating community resources effortless. Leveraging <span className='text-[#FC9D4A]'> Next.js,</span> we built a fast and responsive interface, while  <span className='text-[#FC9D4A]'> Tailwind CSS</span> enabled us to design a clean and
                                modern aesthetic. <span className='text-[#FC9D4A]'> AWS </span> powered the back end, ensuring reliable data management and robust cloud
                                infrastructure to handle user traffic and data securely.
                            </p>
                            <p>Key features include real-time updates, an event calendar, service directories,
                                and tools for local businesses to engage with their audience. We focused on mobile
                                responsiveness and accessibility, making the platform inclusive and easy to use
                                across devices.</p>
                            <p>
                                <span className='text-[#FC9D4A]'> Folsom Pulse </span> reflects our commitment to creating a technology-driven solution that enhances
                                community engagement and supports local growth. This project showcases our ability to combine
                                innovation and practicality to build platforms that bring meaningful impact to their users.</p>
                            <div className='flex justify-between gap-10'>
                                <a href='https://play.google.com/store/apps/details?id=com.folsompulse&hl=en_IN' target='_blank'>
                                    <div className='flex items-center py-2 md:px-6 rounded-[3.5rem] border-[#FC9D4A] md:border gap-2'>
                                        <img className='w-10' src="/assets/images/Fourth/google-play.png" alt="" />
                                        <div className='flex flex-col   '>
                                            <p className="text-xs font-semibold">Get it on   </p>
                                            <p className="font-bold md:text-xl text-sm">Google Play</p>
                                        </div>
                                    </div>
                                </a>
                                <a href='https://apps.apple.com/us/app/folsom-pulse/id6475587121' target='_blank'>
                                    <div className='flex items-center py-2 md:px-6 rounded-[3.5rem] border-[#FC9D4A] md:border gap-2'>
                                        <img className='w-10' src="/assets/images/Logo/AppleLogo.png" alt="" />
                                        <div className='flex flex-col'>
                                            <p className="text-xs font-semibold">Download on the </p>
                                            <p className="font-bold md:text-xl text-sm">App Store</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className=" bg-[url('/assets/images/Fourth/vsc.png')] rounded-b-[3.5rem] bg-center bg-cover lg:mt-[400px] w-full   mt-24">
                <Marquee speed={100} autoFill={true} pauseOnHover={true} direction='right' className='relative bottom-20 overflow-visible'>
                    <img className='mr-5' src="/assets/images/Fourth/new1.png" alt="" />
                    <img className='mr-5' src="/assets/images/Fourth/new2.png" alt="" />
                    <img className='mr-5' src="/assets/images/Fourth/new3.png" alt="" />
                    <img className='mr-5' src="/assets/images/Fourth/new4.png" alt="" />
                    <img className='mr-5' src="/assets/images/Fourth/new5.png" alt="" />
                </Marquee>
            </section>

            <section className='flex justify-center items-center  mt-20'>
                <img className='w-[800px]  ' src="/assets/images/Fourth/groups.png" alt="" />
            </section>

            <section className="bg-[url('/assets/images/Fourth/folsumfoot.png')] bg-center bg-cover md:py-20 py-10 w-full bg-no-repeat">
                <div className='px-5'>
                    <div className='max-w-[70rem] mx-auto text-center       ' >
                        <div className='  justify-center items-center   gap-5 text-white'>
                            <p className="md:text-3xl text-sm font-bold uppercase">"Stay connected with Folsom Pulse—your gateway to local events, services, and news!"</p>
                            <div className='flex justify-center items-center gap-4'>
                                <div className=' text-center md:mt-7'>
                                    <button className='rounded-3xl text-center mx-auto  md:text-base text-xs bg-[#FEC000] p-1 px-4'>
                                        <div className='relative'>
                                            <p className="text-[#195259] md:text-base text-sm"> Contact Us</p>
                                            <img className='absolute top-0 -left-2 w-2' src="/assets/images/JobezzyMain/jobarrow1.png" alt="" />
                                            <img className='absolute bottom-0 -right-2 w-2' src="/assets/images/JobezzyMain/jobarrow2.png" alt="" />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>



    )
}

export default FolsumMain
