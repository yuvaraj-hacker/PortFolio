import { Divider } from '@nextui-org/react'
import {  followingDotCursor } from 'cursor-effects';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Vivid() {

    
    return (
        <>
            <section className='bg-white'>
                <section className="flex justify-center items-center bg-center bg-cover   bg-no-repeat md:rounded-br-[15rem] rounded-br-[8rem] 3xl:h-[70vh] py-10  " style={{ backgroundImage: `url(${'/assets/images/Sixth/vivids.png'})` }}>
                    <div className='max-w-[90rem] mx-auto px-5 '>
                        <div className='grid lg:grid-cols-2 grid-cols-1 md:gap-5 items-center' >
                            <div className=' '>
                                <nav className="text-sm md:mb-6 mb-3">
                                    <Link to='/' className=" text-white hover:underline">
                                        Home /
                                    </Link>{" "}
                                    /{" "}
                                    <a href="#" className=" text-white hover:underline">
                                        Portfolio /
                                    </a>{" "}
                                    /{" "}
                                    <a href="#" className="text-[#FF0000] hover:underline font-semibold">
                                        VIVID ENGINEERING CONSULTANTS
                                    </a>
                                </nav>
                                <h1 className="text-2xl md:text-5xl text-white font-bold md:mb-6 mb-3">VIVID ENGINEERING CONSULTANTS</h1>
                                <div className="md:space-y-4 space-y-1 text-lg md:text-xl text-white">
                                    <div className='space-y-2'>
                                        <p className="md:text-2xl  text-[#FF0000]">Category:</p>
                                        <p className=" md:text-base text-sm">Engineering Consultancy Services</p>
                                    </div>
                                    <div className='space-y-2'>
                                        <p className="md:text-2xl  text-[#FF0000]">Description:</p>
                                        <p className=" md:text-base text-sm">VIVID Engineering Consultant offers innovative and
                                            comprehensive engineering, architectural, and design
                                            solutions adhering to top industry standards.</p>
                                    </div>
                                    <div className='space-y-2'>
                                        <p className="md:text-2xl  text-[#FF0000]">Services:</p>
                                        <p className=" md:text-base text-sm">Civil and mechanical engineering, architectural and
                                            interior design, and shipping container solutions.</p>
                                    </div>
                                    <div className='space-y-2'>
                                        <p className="md:text-2xl  text-[#FF0000]">Team:</p>
                                        <p className=" md:text-base text-sm">5 specialists</p>
                                    </div>
                                    <div className='space-y-2'>
                                        <p className="md:text-2xl  text-[#FF0000]">Country:</p>
                                        <p className=" md:text-base text-sm">United State</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' mx-auto'>
                                <div
                                    className='flex  relative lg:top-52  '>
                                    <img className='w-4/5       ml-auto ' src='/assets/images/Sixth/vividphone.png' alt="" />

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[url('/assets/images/Sixth/backimage.png')] bg-cover bg-center w-full ">
                    <div className=' lg:pt-52 pt-10 md:pb-20 pb-10 max-w-[80rem] mx-auto px-5  md:space-y-10 space-y-5 '>
                        <div >
                            <p className="text-[#FF0000] md:text-3xl text-base font-bold">ABOUT THE PROJECT</p>
                        </div>
                        <div className='grid lg:grid-cols-2   gap-10'>
                            <div className='space-y-5 mx-auto'>
                                <div className=" w-fit   z-10    ">
                                    <div className='bg-[#FFF5F5] rounded-3xl md:pt-10 pt-5 pr-5 pl-5 md:pr-10 md:pl-10'>
                                        <img data-aos="fade-up" data-aos-delay="600" className="md:w-[400px]" src="/assets/images/Sixth/fold.png" alt="Gradient Example" />
                                    </div>
                                </div>
                            </div>
                            <div className=' flex justify-between flex-col  gap-5   '>

                                <div className='text-justify md:text-base md:space-y-5 space-y-3 text-sm  '>
                                    <p className="">The <span className='text-[#FF0000]'> Vivid Engineering Consultants (VEC)</span> website redesign project aimed to create a modern, responsive,
                                        and user-friendly platform that showcases the firm’s expertise and services. Leveraging cutting-edge web technologies
                                        such as <span className='text-[#FF0000]'> Tailwind CSS, PHP, HTML, CSS, and JavaScript, </span> we developed a seamless interface that reflects VEC's professionalism
                                        and dedication to excellence.</p>
                                    <p className="">Our primary focus was on enhancing user experience through intuitive navigation
                                        and visually appealing design. The site is optimized for performance and accessibility, ensuring
                                        it caters to a diverse audience. With dynamic elements and clean layouts, the platform effectively
                                        highlights VEC's core services, team expertise, and rich history.</p>
                                    <p className="">Collaborating as a team of five developers, we ensured every detail was meticulously executed to align with the
                                        client’s vision. This project exemplifies our commitment to crafting bespoke digital solutions that elevate brands
                                        and meet their unique business goals.</p>

                                </div>
                                <div>
                                    <a href='https://www.vividenggconsultants.com/' target='_blank'>
                                        <div className='  py-1 bg-[#FF0000] w-fit md:text-base text-xs  text-white rounded-3xl px-4'>
                                            www.vividenggconsultants.com
                                        </div>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                </section>

                <section className="bg-[url('/assets/images/Sixth/images.png')] bg-center bg-cover    bg-no-repeat" >
                    <div className='max-w-[60rem] mx-auto py-10 '>
                        <div className='grid grid-cols-4'>
                            <div className='flex md:justify-evenly justify-between ml-auto relative left-10 z-10  md:mt-20 flex-col'>
                                <img   className='w-36' src="/assets/images/Sixth/includes.png" alt="" />
                                <img   className='w-36' src="/assets/images/Sixth/dss.png" alt="" />
                            </div>
                            <div className='col-span-2   '>
                                <img className=' w-full  relative  top-28  ' src="/assets/images/Sixth/folds.png" alt="" />
                            </div>
                            <div className='flex md:justify-evenly justify-between    relative right-10  md:mt-20 flex-col'>
                                <img   className='w-36' src="/assets/images/Sixth/dss2.png" alt="" />
                                <img   className='w-36' src="/assets/images/Sixth/dss3.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <article>
                    <div className='mt-20'>
                        <div className='bg-white py-5 2xl:py-10 2xl:pb-14 max-w-[78rem] mx-auto px-5 2xl:px-0' >
                            <div className='flex flex-col gap-5 2xl:gap-12 mx-auto overflow-hidden 2xl:overflow-visible'>
                                <div className='flex justify-center gap-5 2xl:gap-12 flex-wrap sm:flex-nowrap' >
                                    <div className="sm:w-auto w-[calc(50%-10px)] "><img data-aos="fade-right" data-aos-delay="500" data-aos-anchor-placement="center-bottom" src="/assets/images/Sixth/vivid1.png" alt="" /></div>
                                    <div className="sm:w-auto w-[calc(50%-10px)] place-items-end"><img data-aos="fade-right" data-aos-delay="200" data-aos-anchor-placement="center-bottom" src="/assets/images/Sixth/vivid2.png" alt="" /></div>
                                    <div className="sm:w-auto w-full"><img data-aos="fade-left" data-aos-delay="800" data-aos-anchor-placement="center-bottom" src="/assets/images/Sixth/vivid3.png" alt="" /></div>
                                </div>
                                <div className='flex justify-center gap-5 2xl:gap-12 flex-wrap sm:flex-nowrap' >
                                    <div className="sm:w-auto w-full"><img data-aos="fade-right" data-aos-delay="200" data-aos-anchor-placement="center-bottom" src="/assets/images/Sixth/vivid4.png" alt="" /></div>
                                    <div className="sm:w-auto w-[calc(50%-10px)] "><img data-aos="fade-left" data-aos-delay="500" data-aos-anchor-placement="center-bottom" src="/assets/images/Sixth/vivid5.png" alt="" /></div>
                                    <div className="sm:w-auto w-[calc(50%-10px)] place-items-end"><img data-aos="fade-left" data-aos-delay="800" data-aos-anchor-placement="center-bottom" src="/assets/images/Sixth/vivid6.png" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>


                <section className="bg-[#0F0F0F]   md:py-10 py-5 w-full bg-no-repeat">
                    <div className='px-5'>
                        <div className='max-w-[70rem] mx-auto text-center ' >
                            <div className='  justify-center items-center   gap-5 text-white'>
                                <p className="md:text-3xl text-sm font-bold uppercase">Transform your vision into reality with <span className='text-[#FF0000]'>Vivid Engineering
                                    Consultants'</span>  innovative and reliable engineering solutions!</p>
                                <div className='flex justify-center items-center  gap-4'>
                                    <div className=' text-center md:mt-7 mt-4'>
                                        <button className='rounded-3xl text-center mx-auto  md:text-base text-xs bg-[#FE0000] p-1 px-4'>
                                            <div className='relative'>
                                                <p className="text-white md:text-base text-sm"> Contact Us</p>
                                                <img className='absolute top-0 -left-2 w-2' src="/assets/images/seventh/white-flower2.png" alt="" />
                                                <img className='absolute bottom-0 -right-2 w-2' src="/assets/images/seventh/white-flower.png" alt="" />
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

export default Vivid
