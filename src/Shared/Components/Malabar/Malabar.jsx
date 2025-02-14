import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeIn } from '../../Variants'

function Malabar() {
    return (
        <>
            <section className='bg-white'>
                <section className="flex justify-center items-center bg-center bg-cover   bg-no-repeat md:rounded-br-[15rem] rounded-br-[8rem] 3xl:h-[70vh] py-10  " style={{ backgroundImage: `url(${'/assets/images/Valluva/valluhero.png'})` }}>
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
                                <img className='relative lg:top-[218px]' src='/assets/images/Malabaar/rer.png' alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='md:my-20 my-10  md:space-y-10 space-y-5 overflow-hidden'>
                    <section className='max-w-[90rem]  mx-auto px-5'>
                        <p className="text-[#055B42] font-bold md:text-3xl">ABOUT THE PROJECT</p>
                    </section>

                    <section className='max-w-[70rem]  mx-auto px-5'>
                        <div className=' grid md:grid-cols-12 md:gap-10 gap-5 items-center'>
                            <div className='col-span-5'>
                                <motion.img variants={fadeIn("left", 0.1)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className=' ' src="/assets/images/Malabaar/aboutimage.png" alt="" />
                            </div>
                            <div className='col-span-1'>
                                <img className=' ' src="/assets/images/Malabaar/tristar.png" alt="" />
                            </div>
                            <div className='col-span-6 md:space-y-5 md:text-base text-sm md:p-4 p-2 bg-[#F4F4F4] overflow-hidden   md:rounded-[2.5rem] rounded-sm space-y-2'>
                                <motion.p variants={fadeIn("right", 0.1)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className="text-justify">The <span className='text-[#FF7913]'> Malabar Indian Groceries</span> website was developed to enhance the shopping experience for
                                    customers by providing a seamless and user-friendly online platform. Built with <span className='text-[#FF7913]'>PHP, HTML, CSS, Tailwind CSS,</span>  and <span className='text-[#FF7913]'>MySQL,</span>
                                    the site is optimized for performance, scalability, and responsiveness across all devices.</motion.p>
                                <motion.p variants={fadeIn("right", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className="text-justify">Designed by a team of five developers, the project focused on creating
                                    an intuitive layout that highlights the store's diverse product offerings, including fresh Indian
                                    vegetables, spices, and groceries. Tailwind CSS ensured the design was modern and visually appealing,
                                    while the backend, powered by PHP and MySQL, supports robust data management for products and orders.</motion.p>
                                <motion.p variants={fadeIn("right", 0.3)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className="text-justify">The website incorporates features like easy navigation, search functionality,
                                    and support for curbside pickup and home delivery, reflecting the client’s commitment to excellent
                                    customer service. The result is a highly functional website that aligns with the brand's mission
                                    of bringing the vibrant flavors of India to the local community.</motion.p>
                                <div className='flex justify-between'>
                                    <div className='flex items-center gap-5'>
                                        <a href='https://www.malabarindiangroceries.com/' target='_blank'>
                                            <div className='rounded-3xl bg-[#045C43] text-black w-fit py-1  px-3 lg:px-7'>
                                                <p className="lg:text-lg text-sm text-white">www.malabarindiangroceries.com</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>


                <section className=" bg-[url('/assets/images/Malabaar/backlinear.png')]   bg-center bg-cover lg:mt-[300px] w-full   mt-[200px]">
                    <Marquee speed={100} autoFill={true} direction='right' className='relative bottom-40 overflow-visible'>
                        <img className='mr-5' src="/assets/images/Malabaar/512h.png" alt="" />
                        <img className='mr-5' src="/assets/images/Malabaar/512h2.png" alt="" />
                        <img className='mr-5' src="/assets/images/Malabaar/512h3.png" alt="" />
                        <img className='mr-5' src="/assets/images/Malabaar/512h4.png" alt="" />
                        <img className='mr-5' src="/assets/images/Malabaar/512h5.png" alt="" />
                    </Marquee>
                </section>

                <article>
                    <div>
                        <div className='bg-white py-5 2xl:py-10 2xl:pb-14 max-w-[78rem] mx-auto px-5 2xl:px-0' >
                            <div className='flex flex-col gap-5 2xl:gap-12 mx-auto overflow-hidden 2xl:overflow-visible'>
                                <div className='flex justify-center gap-5 2xl:gap-12 flex-wrap sm:flex-nowrap' >
                                    <div className="sm:w-auto w-[calc(50%-10px)] "><img data-aos="fade-right" data-aos-delay="500" data-aos-anchor-placement="center-bottom" src="/assets/images/Malabaar/pro1.png" alt="" /></div>
                                    <div className="sm:w-auto w-[calc(50%-10px)] place-items-end"><img data-aos="fade-right" data-aos-delay="200" data-aos-anchor-placement="center-bottom" src="/assets/images/Malabaar/pro2.png" alt="" /></div>
                                    <div className="sm:w-auto w-full"><img data-aos="fade-left" data-aos-delay="800" data-aos-anchor-placement="center-bottom" src="/assets/images/Malabaar/pro3.png" alt="" /></div>
                                </div>
                                <div className='flex justify-center gap-5 2xl:gap-12 flex-wrap sm:flex-nowrap' >
                                    <div className="sm:w-auto w-full"><img data-aos="fade-right" data-aos-delay="200" data-aos-anchor-placement="center-bottom" src="/assets/images/Malabaar/pro4.png" alt="" /></div>
                                    <div className="sm:w-auto w-[calc(50%-10px)] "><img data-aos="fade-left" data-aos-delay="500" data-aos-anchor-placement="center-bottom" src="/assets/images/Malabaar/pro5.png" alt="" /></div>
                                    <div className="sm:w-auto w-[calc(50%-10px)] place-items-end"><img data-aos="fade-left" data-aos-delay="800" data-aos-anchor-placement="center-bottom" src="/assets/images/Malabaar/pro6.png" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <section className="bg-[#0F0F0F] md:py-10 py-5 w-full bg-no-repeat md:overflow-hidden ">
                    <div className='px-5'>
                        <div className='max-w-[70rem] mx-auto text-center' >
                            <div className='justify-center items-center gap-5 text-white'>
                                <motion.p variants={fadeIn("up", 0.2)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: false, amount: 0.2 }} className="md:text-3xl text-sm font-bold uppercase">Bring the vibrant flavors of India to your kitchen with
                                    <span className='text-[#FF7913]'> Malabar Indian Groceries</span>, your one-stop shop
                                </motion.p>
                                <div className='flex justify-center items-center gap-4'>
                                    <div className=' text-center md:mt-7 mt-5'>
                                        <motion.button variants={fadeIn("up", 0.4)} initial="hidden"
                                            whileInView="show" viewport={{ once: false, amount: 0.2 }} className='rounded-3xl text-center mx-auto  md:text-base text-xs bg-[#FF7913] p-1 px-4'>
                                            <div className='relative'>
                                                <p className="text-white md:text-base text-sm"> Contact Us</p>
                                                <img className='absolute top-0 -left-2 w-2' src="/assets/images/seventh/white-flower2.png" alt="" />
                                                <img className='absolute bottom-0 -right-2 w-2' src="/assets/images/seventh/white-flower.png" alt="" />
                                            </div>
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section>
                        <svg className='w-10' id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.13 46.08">
                        <path d="m0,41.47c3.69-.34,7.11-.82,10.38-1.89,2.05-.67,4.03-1.62,5.71-3.35-.55-.18-1.03-.38-1.53-.48-2.77-.58-5.26-1.64-7-4-.72-.98-1.33-2.03-2.03-3.1,1.23-.3,2.43-.59,3.81-.93-.91-.56-1.7-1.08-2.52-1.53-2.08-1.13-3.73-2.68-4.6-4.91-.37-.95-.52-1.98-.77-2.98-.11-.43-.19-.86-.3-1.33,1.42.02,2.71.63,4.2.28-.72-1.12-1.37-2.17-2.06-3.2-1.78-2.65-2.05-5.51-1.29-8.54.23-.91.43-1.84.69-2.95.78.63,1.4,1.05,1.94,1.56,2.42,2.28,5.16,4.11,8.01,5.83,2.36,1.43,4.89,2.38,7.49,3.17,1.99.61,4.06.96,6.33.91.02-.67.06-1.3.07-1.92.05-2.38.81-4.54,1.99-6.57,1.71-2.92,4.43-4.39,7.56-5.26,1.39-.39,2.76-.3,4.22-.14,2.64.29,4.8,1.52,6.96,2.82.49.3.86.38,1.4.19,1.21-.43,2.43-.83,3.67-1.19.49-.15,1.02-.18,1.84-.31-1.11,1.79-2.05,3.3-3,4.82,1.65.08,3.16-.84,4.97-.57-.86,1.35-1.83,2.42-2.78,3.52-.78.91-1.81,1.7-2.04,2.98-.25,1.43-.63,2.83-.75,4.31-.14,1.7-.6,3.37-.96,5.05-.14.64-.37,1.25-.58,1.87-1.35,3.9-3.27,7.44-5.93,10.64-2.96,3.55-6.42,6.42-10.55,8.47-2.84,1.4-5.83,2.42-8.95,2.97-2.6.45-5.24.39-7.87.33-2.95-.07-5.78-.69-8.6-1.52-2.27-.67-4.39-1.61-6.51-2.61-.14-.07-.26-.18-.61-.44Z" />
                    </svg>
                </section> */}
            </section>
        </>
    )
}

export default Malabar
