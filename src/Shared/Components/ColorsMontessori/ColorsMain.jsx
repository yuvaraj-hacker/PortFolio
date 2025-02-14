import React from 'react'
import Common from '../CommonSection/Common';
import "aos/dist/aos.css";

function ColorsMain(props) {


    const { pageData } = props;

    return (
        <>
            <section className='bg-white'>
                <section className=' '>
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
                <section className='md:my-20 my-5 max-w-[90rem] mx-auto px-5  '>
                    <div className='grid lg:grid-cols-2 md:gap-10 gap-5'>
                        <div className='md:space-y-5 space-y-3'>
                            <div>
                                <p className="text-[#E63D3D] md:text-3xl text-base font-bold">ABOUT THE PROJECT</p>
                            </div>
                            <div className='text-justify md:text-base text-sm space-y-4'>
                                <p className="">The <span className='text-[#E63D3D]'>Colors Montessori</span> project is a thoughtfully designed website showcasing the preschool's
                                    commitment to holistic, child-centered education. Our 5-member team developed this platform to create a
                                    seamless and engaging online experience for parents and educators alike.</p>
                                <p className="">Using   <span className='text-[#E63D3D]'>React</span> for the front end, we crafted a responsive and visually appealing interface,
                                    ensuring a user-friendly experience across all devices. The backend, powered by <span className='text-[#E63D3D]'>PHP</span>, was designed
                                    to handle data efficiently while maintaining robust performance and security.</p>
                                <p className="">Our primary focus was to highlight the school's Montessori-based philosophy,
                                    programs, and vibrant learning environment. The website includes sections for curriculum details,
                                    admissions, events, and parent resources, presented in a clear and intuitive layout.</p>
                                <p className="">This project demonstrates our expertise in delivering modern, efficient,
                                    and customized web solutions that reflect the unique identity and values of our clients.
                                    <span className='text-[#E63D3D]'> Colors Montessori's</span> online presence is now a testament to its dedication to nurturing young minds.</p>
                            </div>
                            <div>

                                <div className='  py-1 bg-[#052E86] w-fit md:text-base text-sm  text-white rounded-3xl px-4'>
                                    <a href='https://www.colorsmontessori.com/' target='_blank'>
                                        www.colorsmontessori.com
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className='flex  relative'>
                            <div className='bg-[#052E86] w-1/2 h-2/3 absolute bottom-0 left-1/4 mx-auto rounded-3xl'>
                            </div>
                            <div className=" w-fit mx-auto z-10    ">
                                <img className="" src="/assets/images/Fifth/colorsproject.png" alt="Gradient Example" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='md:my-20  my-10 max-w-[80rem] mx-auto px-5'>
                    <div className='grid grid-cols-3 gap-10'>
                        <div>
                            <img src="/assets/images/Fifth/colorsgallery1.png" alt="" />
                        </div>
                        <div>
                            <img src="/assets/images/Fifth/colorsgallery3.png" alt="" />
                        </div>
                        <div>
                            <img src="/assets/images/Fifth/colorsgallery2.png" alt="" />
                        </div>
                    </div>
                </section>

                <article>
                    <div>
                        <div className='bg-white py-5 2xl:py-10 2xl:pb-14 max-w-[78rem] mx-auto px-5 2xl:px-0' >
                            <div className='flex flex-col gap-5 2xl:gap-12 mx-auto overflow-hidden 2xl:overflow-visible'>
                                <div className='flex justify-center gap-5 2xl:gap-12 flex-wrap sm:flex-nowrap' >
                                    <div className="sm:w-auto w-[calc(50%-10px)] "><img data-aos="fade-right" data-aos-delay="500" data-aos-anchor-placement="center-bottom" src="/assets/images/Fifth/col1.png" alt="" /></div>
                                    <div className="sm:w-auto w-[calc(50%-10px)] place-items-end"><img data-aos="fade-right" data-aos-delay="200" data-aos-anchor-placement="center-bottom" src="/assets/images/Fifth/col2.png" alt="" /></div>
                                    <div className="sm:w-auto w-full"><img data-aos="fade-left" data-aos-delay="800" data-aos-anchor-placement="center-bottom" src="/assets/images/Fifth/col3.png" alt="" /></div>
                                </div>
                                <div className='flex justify-center gap-5 2xl:gap-12 flex-wrap sm:flex-nowrap' >
                                    <div className="sm:w-auto w-full"><img data-aos="fade-right" data-aos-delay="200" data-aos-anchor-placement="center-bottom" src="/assets/images/Fifth/col4.png" alt="" /></div>
                                    <div className="sm:w-auto w-[calc(50%-10px)] "><img data-aos="fade-left" data-aos-delay="500" data-aos-anchor-placement="center-bottom" src="/assets/images/Fifth/col5.png" alt="" /></div>
                                    <div className="sm:w-auto w-[calc(50%-10px)] place-items-end"><img data-aos="fade-left" data-aos-delay="800" data-aos-anchor-placement="center-bottom" src="/assets/images/Fifth/col6.png" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <section className="bg-[#0F1C38] md:py-10 py-5 w-full bg-no-repeat">
                    <div className='px-5'>
                        <div className='max-w-[70rem] mx-auto text-center     ' >
                            <div className='  justify-center items-center   gap-5 text-white'>
                                <p className="md:text-3xl text-sm font-bold uppercase">"Unlock your child's potential with <span className='text-[#FFCB02]'>Colors Montessori's </span>
                                    innovative and holistic learning programs!"</p>
                                <div className='flex justify-center items-center gap-4'>
                                    <div className=' text-center md:mt-7 mt-5'>
                                        <button className='rounded-3xl text-center mx-auto  md:text-base text-xs bg-[#FEC000] p-1 px-4'>
                                            <div className='relative'>
                                                <p className="text-[#195259] md:text-base text-sm"> Contact Us</p>
                                                <img className='absolute top-0 -left-2 w-2' src="/assets/images/Fifth/colortop.png" alt="" />
                                                <img className='absolute bottom-0 -right-2 w-2' src="/assets/images/Fifth/colorbottom.png" alt="" />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default ColorsMain
