import React, { useEffect } from 'react'
import Common from '../CommonSection/Common'
import {  followingDotCursor } from 'cursor-effects';

function JobezzyMain(props) {

    const { pageData } = props;


    return (
        <>
            <section>
                <Common name={pageData.name}
                    headerImage={pageData.headerImage}
                    descriptionImage={pageData.descriptionImage}
                    category={pageData.category}
                    description={pageData.description}
                    services={pageData.services}
                    team={pageData.team}
                    country={pageData.country}
                    categoryColor="text-[#FFC000]"
                />

            </section>
            <section className='md:my-20 my-10  md:space-y-10 space-y-5'>
            <div className=' bg-[url(/assets/images/JobezzyMain/Vector.png)] bg-cover bg-no-repeat max-w-[90rem] mx-auto '>

                <section className='max-w-[90rem] mx-auto px-5'>
                    <p className="text-[#FFC000] font-bold text-xl md:text-3xl pb-5">ABOUT THE PROJECT</p>
                </section>

                <section className='max-w-[60rem]  mx-auto px-5'>
                    
                    <div className=' grid md:grid-cols-12 md:gap-10 gap-5    items-center'>
                        <div className='col-span-5'>
                            <img className=' ' src="/assets/images/JobezzyMain/twox.png" alt="" />
                        </div>
                        <div className='hidden lg:block'>
                            <div className='absolute -translate-x-1/3 rounded-full p-3 flex justify-center items-center bg-[#FFC000] max-w-none col-span-1'>
                                <img className='w-16 animate-spin animate-duration-[4s]' src="/assets/images/JobezzyMain/Stars.png" alt="" />
                            </div>
                        </div>
                        <div className='col-span-5 md:space-y-5 md:text-base text-sm  space-y-2'>
                            <p className="text-justify"> <span className='text-[#FFC000]'>JOBEZZY</span> is a dynamic job posting and recruitment platform designed
                                to connect job seekers and employers seamlessly. This app, built with cutting-edge
                                technologies like  <span className='text-[#FFC000]'>React Native, Express.js,</span> and <span className='text-[#FFC000]'>Tailwind CSS,</span> offers a smooth and
                                intuitive user experience across devices.</p>
                            <p className="text-justify">Developed by a dedicated team of three, <span className='text-[#FFC000]'>JOBEZZY</span> focuses on bridging the gap
                                between talent and opportunity in various industries. The platform is crafted to provide
                                key features like job postings, candidate applications, employer profiles, and resume management.
                                Special attention was given to designing a user-friendly interface that ensures effortless
                                navigation and interaction for both employers and job seekers.</p>

                            <p className="text-justify">Our approach prioritized scalability and security, enabling robust
                                data handling and secure communication between users. The project was executed
                                with the goal of streamlining the recruitment process and empowering businesses
                                and individuals across India.</p>

                            <p className="text-justify"> <span className='text-[#FFC000]'>  JOBEZZY  </span> is more than just a platform—it's
                                a step toward redefining recruitment with efficiency
                                and innovation.</p>


                            <div className='flex justify-between'>
                                <div className='flex items-center gap-5'>
                                    <a href='https://www.jobezzy.in/' target='_blank'>
                                        <div className='rounded-3xl bg-[#FFC000] text-black w-fit py-1  px-3 md:px-7'>

                                            <p className="md:text-lg text-sm text-black">www.jobezzy.in</p>
                                        </div>
                                    </a>

                                </div>
                                <div className='flex items-center gap-5'>
                                    <a href='https://play.google.com/store/apps/details?id=com.jobezzy.Application&hl=en_IN' target='_blank'>
                                        <div className='rounded-3xl bg-gray-200 text-black w-fit py-1  px-3 md:px-7'>
                                            <img className='h-6' src="/assets/images/JobezzyMain/googleplay.png" alt="" />
                                        </div>
                                    </a>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>
                </div>
            </section>

            <section className="bg-[url('/assets/images/JobezzyMain/backpage.png')] bg-cover bg-center bg-no-repeat ">
                <div className='px-5'>
                    <div className='max-w-[70rem] mx-auto py-5 md:py-20'>
                        <div className='grid grid-cols-5'>
                            <div className='col-span-3'>
                                <img src="/assets/images/JobezzyMain/taqb2.png" alt="" />
                            </div>
                            <div className='col-span-2'>
                                <img src="/assets/images/JobezzyMain/layera.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='max-w-[1920px] mx-auto bg-cover bg-no-repeat bg-[url(/assets/images/JobezzyMain/Vector.png)] ' >
                <div className=" flex justify-between md:my-10 my-5 md:px-0  *:w-[17%] *:*:w-full ">
                    <div className="left-right-up-down up-down"  >
                        <img src="/assets/images/Second/img1.png" alt="Image 1" className='!w-[85%]'  />
                    </div>
                    <div className="left-right-up-down down-up"  >
                        <img src="/assets/images/Second/img2.png" alt="Image 2" />
                    </div>
                    <div className="left-right-up-down up-down"  >
                        <img src="/assets/images/Second/img3.png" alt="Image 3" />
                    </div>
                    <div className="left-right-up-down down-up"  >
                        <img src="/assets/images/Second/img4.png" alt="Image 4" />
                    </div>
                    <div className="left-right-up-down up-down place-items-end"  >
                        <img src="/assets/images/Second/img5.png" alt="Image 5"  className='!w-[85%]' />
                    </div> 
                </div>

                <div className=" flex justify-between my-20 md:px-0  *:w-[17%] *:*:w-full">
                    <div className="left-right-up-down up-down"  >
                        <img src="/assets/images/Second/img6.png"  alt="Image 1" className='!w-[85%]'  />
                    </div>
                    <div className="left-right-up-down down-up"  >
                        <img src="/assets/images/Second/img7.png" alt="Image 2" />
                    </div>
                    <div className="left-right-up-down up-down"  >
                        <img src="/assets/images/Second/img8.png" alt="Image 3" />
                    </div>
                    <div className="left-right-up-down down-up"  >
                        <img src="/assets/images/Second/img9.png" alt="Image 4" />
                    </div>
                    <div className="left-right-up-down up-down place-items-end"  >
                        <img src="/assets/images/Second/img10.png" alt="Image 5" className='!w-[85%]'  />
                    </div> 
                </div>
            </section>

            <section className="bg-[url('/assets/images/Second/footerbg.png')]   bg-center bg-cover lg:py-20 py-10 w-full bg-no-repeat relative">
                <div className='absolute bg-black/40 h-full w-full inset-0'></div>
                <div className='px-5 z-10 relative'>
                    <div className='max-w-[70rem] mx-auto text-center    border rounded-2xl p-5  ' >
                        <div className='  justify-center items-center   gap-5 text-white'>
                            <p className="md:text-3xl text-sm font-bold uppercase"> "Empower your hiring journey with our
                               <br className='2xl:block hidden'/> tech-driven solutions!"</p>
                            <div className='flex justify-center items-center gap-4'>
                                <div className=' text-center md:mt-7 mt-5'>
                                    <button className='rounded-3xl text-center mx-auto  md:text-base text-xs bg-[#FEC000] p-1 px-4'>
                                        <div className='relative'>
                                            <p className="text-[#120D0D] md:text-base text-sm"> Contact Us</p>
                                            <img className='absolute top-0 -left-2 w-2' src="/assets/images/JobezzyMain/jobarrow1.png" alt="" />
                                            <img className='absolute bottom-0 -right-2 w-2' src="/assets/images/JobezzyMain/jobarrow2.png" alt="" />
                                        </div>
                                    </button>
                                </div>
                                <img className='absolute translate-x-full md:w-36 w-14  md:h-14' src="/assets/images/JobezzyMain/Arrow-jobezzy.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default JobezzyMain
