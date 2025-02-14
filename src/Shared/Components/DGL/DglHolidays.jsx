import React  from 'react'
import Common from '../CommonSection/Common'
import { motion } from 'framer-motion'
import { fadeIn } from '../../Variants'

function DglHolidays(props) {
    const {pageData} = props;
    
    return (
        <>
            <section className='bg-white'>
                <section className=' '>
                    <Common name={pageData.name} headerImage={pageData.headerImage} descriptionImage={pageData.descriptionImage} category={pageData.category} description={pageData.description} services={pageData.services} team={pageData.team} country={pageData.country} categoryColor="text-[#FCCE38]" />
                </section>

                <section className=" md:my-20 my-10 ">
                    <div className=' max-w-[80rem] mx-auto px-5  md:space-y-10 space-y-5 '>
                        <div>
                            <p className="text-[#40A44C] md:text-4xl text-xl text-center font-bold">ABOUT THE PROJECT</p>
                        </div>
                        <div className='grid lg:grid-cols-1  items-center     md:space-y-5 space-y-3'>
                            <div className='space-y-5 mx-auto  '>
                                <div className=" w-fit ">
                                    <img data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className=" " src="/assets/images/nine/groupss.png" alt="Gradient Example" />
                                </div>
                            </div>
                            <div className=' flex flex-col gap-5 '>
                                <div className='text-justify md:text-base md:space-y-5 space-y-3 text-sm  '>
                                    <motion.p variants={fadeIn("up", 0.1)}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: false, amount: 0.2 }} className="">The <span className='text-[#40A44C]'>DGL Holidays</span>  website was designed and developed to provide a seamless
                                        platform for showcasing premium travel and tourism services. Leveraging modern web
                                        technologies such as <span className='text-[#40A44C]'> Bootstrap, HTML, CSS, </span> and  <span className='text-[#40A44C]'> PHP, </span> our team of five developers collaborated
                                        to create a user-friendly and visually appealing website that reflects the company’s dedication
                                        to delivering exceptional travel experiences.</motion.p>
                                    <motion.p variants={fadeIn("up", 0.2)}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: false, amount: 0.2 }} className="">The site features a clean, responsive design that adapts effortlessly across devices,
                                        ensuring accessibility for all users. Key functionalities include detailed service descriptions
                                        , easy navigation, and a vibrant interface to engage potential customers. We also integrated robust
                                        back-end features to support efficient management of travel packages and inquiries.</motion.p>
                                    <motion.p variants={fadeIn("up", 0.3)}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: false, amount: 0.2 }} className="">This project is a testament to our team’s expertise in combining aesthetics with functionality.
                                        By aligning the website's design with DGL Holidays’ commitment to customer satisfaction and excellence,
                                        we have created a digital presence that enhances the company's ability to connect with travel enthusiasts
                                        worldwide.</motion.p>
                                </div>
                            </div>

                            <div className='text-center bg-[#008EE1] p-2 w-fit mx-auto rounded-3xl text-white px-4 cursor-pointer'>
                                <a href="http://www.dglholidays.com/" target='_blank'>
                                    <p className=""> www.dglholidays.com   </p>
                                </a>
                            </div>

                        </div>
                    </div>

                </section>
                <section className="bg-[url('/assets/images/nine/abbb.png')] 2xl:h-[500px] 2xl:mt-96 xl:mt-80 lg:mt-72  md:mt-60  mt-28   ">
                    <div>
                        <img className='mx-auto relative 2xl:bottom-80 xl:bottom-72 lg:bottom-60 md:bottom-40 bottom-16 px-5' src="/assets/images/nine/holi.png" alt="" />
                    </div>
                </section>

                <article>
                    <div className='bg-[#F7F7F7]'>
                        <div className=' py-5 2xl:py-10 2xl:pb-14 max-w-[78rem] mx-auto px-5 2xl:px-0' >
                            <div className='flex flex-col gap-5 2xl:gap-12 mx-auto overflow-hidden 2xl:overflow-visible'>
                                <div className='flex justify-center gap-5 2xl:gap-12 flex-wrap sm:flex-nowrap' >
                                    <div className="sm:w-auto w-[calc(50%-10px)] "><img data-aos="fade-right" data-aos-delay="500" data-aos-anchor-placement="center-bottom" src="/assets/images/nine/dgl1.png" alt="" /></div>
                                    <div className="sm:w-auto w-[calc(50%-10px)] place-items-end"><img data-aos="fade-right" data-aos-delay="200" data-aos-anchor-placement="center-bottom" src="/assets/images/nine/dgl2.png" alt="" /></div>
                                    <div className="sm:w-auto w-full"><img data-aos="fade-left" data-aos-delay="800" data-aos-anchor-placement="center-bottom" src="/assets/images/nine/dgl3.png" alt="" /></div>
                                </div>
                                <div className='flex justify-center gap-5 2xl:gap-12 flex-wrap sm:flex-nowrap' >
                                    <div className="sm:w-auto w-full"><img data-aos="fade-right" data-aos-delay="200" data-aos-anchor-placement="center-bottom" src="/assets/images/nine/dgl4.png" alt="" /></div>
                                    <div className="sm:w-auto w-[calc(50%-10px)] "><img data-aos="fade-left" data-aos-delay="500" data-aos-anchor-placement="center-bottom" src="/assets/images/nine/dgl5.png" alt="" /></div>
                                    <div className="sm:w-auto w-[calc(50%-10px)] place-items-end"><img data-aos="fade-left" data-aos-delay="800" data-aos-anchor-placement="center-bottom" src="/assets/images/nine/dgl6.png" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>


                <img className=' ' src="/assets/images/nine/Footerr.png" alt="" />
                <section className="bg-[#0F0F0F] md:py-10 py-5 w-full bg-no-repeat md:overflow-hidden ">
                    <div className='px-5'>
                        <div className='max-w-[70rem] mx-auto text-center     ' >
                            <div className='  justify-center items-center   gap-5 text-white'>
                                <motion.p variants={fadeIn("up", 0.2)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: false, amount: 0.2 }} className="md:text-3xl text-sm font-bold uppercase">"Turn your travel dreams into reality with DGL Holidays'
                                    tailored and unforgettable holiday experiences!
                                </motion.p>
                                <div className='flex justify-center items-center gap-4'>
                                    <div className=' text-center md:mt-7 mt-5'>
                                        <motion.button variants={fadeIn("up", 0.4)}
                                            initial="hidden"
                                            whileInView="show"
                                            viewport={{ once: false, amount: 0.2 }} className='rounded-3xl text-center mx-auto  md:text-base text-xs bg-[#FEC000] p-1 px-4'>
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



            </section>
        </>
    )
}

export default DglHolidays
