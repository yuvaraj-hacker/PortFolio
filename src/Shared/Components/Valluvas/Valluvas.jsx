import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

function Valluvas() {
    return (
        <>
            <section className="bg-white ">
                <section className="flex justify-center items-center bg-center bg-cover   bg-no-repeat rounded-br-[15rem] 3xl:h-[70vh] py-10  " style={{ backgroundImage: `url(${'/assets/images/Valluva/valluhero.png'})` }}>
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
                                    <a href="#" className="text-[#F4E316] hover:underline uppercase font-semibold">
                                        Valluva's
                                    </a>
                                </nav>
                                <h1 className="text-2xl md:text-5xl text-white font-bold uppercase mb-6"> Valluva's</h1>
                                <div className="md:space-y-4 space-y-2 text-lg md:text-xl text-white">
                                    <div className='space-y-2'>
                                        <p className="md:text-2xl  text-[#F4E316]">Category:</p>
                                        <p className=" md:text-base text-sm">Distance Education Center</p>
                                    </div>
                                    <div className='space-y-2'>
                                        <p className="md:text-2xl  text-[#F4E316]">Description:</p>
                                        <p className=" md:text-base text-sm">Valluva's Study Center provides quality distance education
                                            and job-oriented courses in partnership with top universities</p>
                                    </div>
                                    <div className='space-y-2'>
                                        <p className="md:text-2xl  text-[#F4E316]">Services:</p>
                                        <p className=" md:text-base text-sm">Distance learning programs, admission assistance, student
                                            support, job-oriented courses, and examination facilitation.</p>
                                    </div>
                                    <div className='space-y-2'>
                                        <p className="md:text-2xl  text-[#F4E316]">Team:</p>
                                        <p className=" md:text-base text-sm">5 specialists</p>
                                    </div>
                                    <div className='space-y-2'>
                                        <p className="md:text-2xl  text-[#F4E316]">Country:</p>
                                        <p className=" md:text-base text-sm">India</p>
                                    </div>

                                </div>
                            </div>
                            <div className=' mx-auto'>
                                <img className='  relative md:top-[218px]' src='/assets/images/Valluva/crt.png' alt="" />
                            </div>
                        </div>
                    </div>
                </section>




                <section className="bg-[url('/assets/images/Valluva/real.png')] bg-center bg-cover bg-repeat     w-full  md:pt-60 pt-10 md:pb-20 pb-10 ">
                    <div className='max-w-[70rem] mx-auto md:space-y-10 space-y-5'>
                        <p className="md:text-3xl text-lg font-bold text-[#025450] px-5">ABOUT THE PROJECT</p>
                        <div className='grid lg:grid-cols-3 items-center lg:gap-0 gap-5 mx-5'>
                            <div className='bg-[#025450] rounded-tl-[2.5rem] rounded-bl-[2.5rem] lg:rounded-br-[0rem] rounded-br-[2.5rem] lg:rounded-tr-[0rem] rounded-tr-[2.5rem] p-[25px] space-y-8   relative lg:left-5 '>
                                <div className=''>
                                    <p className="text-justify xl:text-lg  lg:text-base text-xs text-white  ">The <span className='text-[#F4E316]'>Valluva’s</span>  Education website was developed to provide a streamlined platform for distance
                                        education seekers. Utilizing <span className='text-[#F4E316]'>Express.js, ReactJS,</span>  and  <span className='text-[#F4E316]'>Tailwind CSS, </span> the site ensures a responsive, fast,
                                        and user-friendly experience. Designed by a team of five, it features intuitive navigation, robust performance,
                                        and elegant styling to reflect Valluva’s mission. The project emphasizes scalability, offering a hassle-free interface
                                        for services like admissions, exam preparation, and certifications, aligning perfectly with Valluva’s goal of empowering learners.</p>
                                </div>
                                <div className='py-1 px-5 bg-[#F4E316] w-fit rounded-3xl mx-auto  text-[#025450]'>
                                    <a href="https://www.valluvas.com/" target='_blank'>
                                        www.valluvas.com
                                    </a>
                                </div>
                            </div>
                            <img className='mx-auto' src="/assets/images/Valluva/center-phone.png" alt="" />
                            <div className='bg-[#025450] rounded-tr-[2.5rem] rounded-br-[2.5rem] lg:rounded-tl-[0rem] rounded-tl-[2.5rem] lg:rounded-bl-[0rem] rounded-bl-[2.5rem]  relative lg:right-5 '>
                                <img className='lg:pt-[170px] mx-auto' src="/assets/images/Valluva/valluvagirl.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>


                <section className="bg-[#025450]  rounded-[3.5rem] flex justify-center items-center">
                    <div className='px-5 mx-auto'>
                        <div className='  md:py-20 py-10'>
                            <img className='w-[1000px]' src="/assets/images/Valluva/vall.png" alt="" />
                        </div>
                    </div>
                </section>

                <section className="md:py-20 py-10 bg-[url('/assets/images/Valluva/real.png')] bg-center bg-cover bg-repeat     w-full">
                    <img className='mx-auto px-5 ' src="/assets/images/Valluva/groupp.png" alt="" />
                </section>


                <img src="/assets/images/Valluva/student.png" alt="" />
                <section className="bg-[#212529]   md:py-10 py-5 w-full bg-no-repeat">
                    <div className='px-5'>
                        <div className='max-w-[70rem] mx-auto text-center ' >
                            <div className='  justify-center items-center   gap-5 text-white'>
                                <p className="md:text-3xl text-sm font-bold uppercase">Empower your future with <span className='text-[#F4E316]'>Valluva's</span> , where quality education and
                                    end-to-end academic solutions meet your goals!</p>
                                <div className='flex justify-center items-center  gap-4'>
                                    <div className=' text-center md:mt-7 mt-4'>
                                        <button className='rounded-3xl text-center mx-auto  md:text-base text-xs bg-[#F4E316] p-1 px-4'>
                                            <div className='relative'>
                                                <p className="text-[#025450] md:text-base font-bold text-sm"> Contact Us</p>
                                                <img className='absolute top-0 -left-2 w-2' src="/assets/images/Valluva/topvalluva.png" alt="" />
                                                <img className='absolute bottom-0 -right-2 w-2' src="/assets/images/Valluva/bottomvalluva.png" alt="" />
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

export default Valluvas
