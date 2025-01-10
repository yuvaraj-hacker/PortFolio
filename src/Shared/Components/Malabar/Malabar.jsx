import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

function Malabar() {
    return (
        <>
            <section className='bg-white'>
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
                                    <a href="#" className="text-[#FE7826] hover:underline uppercase font-semibold">
                                        malabar indian groceries
                                    </a>
                                </nav>
                                <h1 className="text-2xl md:text-5xl text-white font-bold uppercase mb-6">
                                    malabar indian groceries
                                    {/* <TypeAnimation
                                                sequence={['Valluvas', 1000, 'Valluvas', 1000, 'Valluvas', 1000, 'Valluvas', 1000]}
                                                wrapper="span"
                                                speed={0}
                                                cursor={false}
                                                style={{ fontSize: '70px', display: 'inline-block' }}
                                                repeat={Infinity}
                                            /> */}
                                </h1>
                                <div className="md:space-y-4 space-y-2 text-lg md:text-xl text-white">
                                    <div className='space-y-2'>
                                        <p className="md:text-2xl  text-[#FE7826]">Category:</p>
                                        <p className=" md:text-base text-sm">Distance Education Center</p>
                                    </div>
                                    <div className='space-y-2'>
                                        <p className="md:text-2xl  text-[#FE7826]">Description:</p>
                                        <p className=" md:text-base text-sm">Valluva's Study Center provides quality distance education
                                            and job-oriented courses in partnership with top universities</p>
                                    </div>
                                    <div className='space-y-2'>
                                        <p className="md:text-2xl  text-[#FE7826]">Services:</p>
                                        <p className=" md:text-base text-sm">Distance learning programs, admission assistance, student
                                            support, job-oriented courses, and examination facilitation.</p>
                                    </div>
                                    <div className='space-y-2'>
                                        <p className="md:text-2xl  text-[#FE7826]">Team:</p>
                                        <p className=" md:text-base text-sm">5 specialists</p>
                                    </div>
                                    <div className='space-y-2'>
                                        <p className="md:text-2xl  text-[#FE7826]">Country:</p>
                                        <p className=" md:text-base text-sm">India</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' mx-auto'>
                                <img className='  relative lg:top-[218px]' src='/assets/images/Malabaar/rer.png' alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='md:my-20 my-10  md:space-y-10 space-y-5'>

                    <section className='max-w-[90rem]  mx-auto px-5'>
                        <p className="text-[#055B42] font-bold md:text-3xl">ABOUT THE PROJECT</p>
                    </section>

                    <section className='max-w-[60rem]  mx-auto px-5'>
                        <div className=' grid md:grid-cols-12 md:gap-10 gap-5    items-center'>
                            <div className='col-span-5'>
                                <img className=' ' src="/assets/images/Malabaar/aboutimage.png" alt="" />
                            </div>
                            <div className='rounded-full p-3 flex justify-center items-center bg-[#FFC000] col-span-1'>
                                <img className='w-16' src="/assets/images/JobezzyMain/Stars.png" alt="" />
                            </div>
                            <div className='col-span-6 md:space-y-5 md:text-base text-sm  space-y-2'>
                                <p className="text-justify">The Malabar Indian Groceries website was developed to enhance the shopping experience for
                                    customers by providing a seamless and user-friendly online platform. Built with PHP, HTML, CSS, Tailwind CSS, and MySQL,
                                    the site is optimized for performance, scalability, and responsiveness across all devices.</p>
                                <p className="text-justify">Designed by a team of five developers, the project focused on creating
                                    an intuitive layout that highlights the store's diverse product offerings, including fresh Indian
                                    vegetables, spices, and groceries. Tailwind CSS ensured the design was modern and visually appealing,
                                    while the backend, powered by PHP and MySQL, supports robust data management for products and orders.</p>

                                <p className="text-justify">The website incorporates features like easy navigation, search functionality,
                                    and support for curbside pickup and home delivery, reflecting the client’s commitment to excellent
                                    customer service. The result is a highly functional website that aligns with the brand's mission
                                    of bringing the vibrant flavors of India to the local community.</p>


                                <div className='flex justify-between'>
                                    <div className='flex items-center gap-5'>
                                        <a href='https://www.malabarindiangroceries.com/' target='_blank'>
                                            <div className='rounded-3xl bg-[#045C43] text-black w-fit py-1  px-3 md:px-7'>
                                                <p className="md:text-lg text-sm text-white">www.malabarindiangroceries.com</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>


                <section className=" bg-[url('/assets/images/Malabaar/backlinear.png')]   bg-center bg-cover lg:mt-[400px] w-full   mt-[200px]">
                    <Marquee speed={100} autoFill={true} direction='right' className='relative bottom-40 overflow-visible'>
                        <img className='mr-5' src="/assets/images/Malabaar/512h.png" alt="" />
                        <img className='mr-5' src="/assets/images/Malabaar/512h2.png" alt="" />
                        <img className='mr-5' src="/assets/images/Malabaar/512h3.png" alt="" />
                        <img className='mr-5' src="/assets/images/Malabaar/512h4.png" alt="" />
                        <img className='mr-5' src="/assets/images/Malabaar/512h5.png" alt="" />
                    </Marquee>
                </section>

            </section>
        </>
    )
}

export default Malabar
