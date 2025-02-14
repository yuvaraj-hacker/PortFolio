import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../Variants'

export default function KavinsAcademy({ instituteInfo }) {


    return (
        <>
            <section className=' bg-white'>

                <article className='-mt-10 lg:mt-0'>
                    <div className='w-full overflow-hidden text-white md:rounded-br-[15rem] rounded-br-[8rem] '>
                        <div className='bg-[url(/assets/images/kavins/herobg.png)] min-h-[73vh] 2xl:min-h-fit 2xl:max-h-[700px] bg-cover bg-no-repeat overflow-hidden relative pt-10 px-5 2xl:px-0'>
                            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/50"></div>
                            <div className='max-w-[78rem] mx-auto py-14 flex flex-col lg:flex-row z-10 relative '>
                                <div className='lg:w-1/2'>
                                    <ul className='flex gap-1 font-light uppercase'>
                                        <li>HOME</li> {'/'}
                                        <li>Portfolio</li> {'/'}
                                        <li className=' text-[#f5c131]'>kavin's academy</li>
                                    </ul>
                                    <motion.h1 variants={fadeIn("", 0.1)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className='uppercase text-3xl md:text-5xl 2xl:text-[50px] font-bold pt-10  '>kavin's academy</motion.h1>
                                    <motion.div variants={fadeIn("left", 0.3)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className='flex flex-col lg:text-lg'>
                                        {instituteInfo?.map((data, i) => (
                                            <div key={i} className={`${data.title == 'Description' ? 'lg:w-[65%]' : '2xl:w-[90%]'} pt-4`}>
                                                <h2 className='text-[#f5c131]'>{data.title}:</h2>
                                                <p>{data.description} </p>
                                            </div>
                                        ))}
                                    </motion.div>
                                </div>
                                <motion.div variants={fadeIn("right", 0.3)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className='lg:w-1/2 relative flex items-center justify-center overflow-visible mx-auto '>
                                    <img src="/assets/images/kavins/herophone.png" alt="" className=' max-w-none w-5/6 lg:w-[50vw] xl:w-auto lg:absolute right-0' />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </article>

                <article className='' >
                    <div>
                        <div className='bg-white py-10 max-w-[78rem] mx-auto '>
                            <motion.h1 variants={fadeIn("", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className='text-[#292665] text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-center font-semibold lg:py-5 ' >ABOUT THE PROJECT</motion.h1>
                            <div className='bg-gradient-to-t from-[#f7f7ff] to-white relative rounded-b-3xl '>
                                <motion.div variants={fadeIn("", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className='pt-5 mx-auto px-5 2xl:px-0 relative '>
                                    <img variants={fadeIn("", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} src="/assets/images/kavins/abtpc.png" alt="" className='relative mx-auto w-[45%] ' />
                                    <img variants={fadeIn("right", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} src="/assets/images/kavins/abtlap.png" alt="" className='absolute bottom-0 right-0 -translate-x-[20%] w-[40%]' />
                                    <img variants={fadeIn("left", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} src="/assets/images/kavins/abttab.png" alt="" className='absolute bottom-0 translate-x-1/2 w-[30%]  ' />
                                    <img variants={fadeIn("left", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} src="/assets/images/kavins/abtmobl.png" alt="" className='absolute bottom-0 translate-x-full w-[9%]' />
                                    {/* <img src="/assets/images/kavins/abtimg.png" alt="" className='mx-auto' /> */}
                                </motion.div>
                                <div className=' lg:text-lg *:py-2 lg:*:py-4 px-5 lg:px-20 leading-relaxed py-5 lg:py-10 text-justify lg:text-center ' >
                                    <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay='500' >The Kavin’s Academy website was developed to provide a seamless and interactive learning experience for UPSC and TNPSC aspirants. Built with <span className='text-[#e6b82e]'>Express.js, ReactJS, Tailwind CSS,</span>  and <span className='text-[#e6b82e]'>MongoDB,</span>   the platform ensures a fast, responsive, and efficient user experience.</p>
                                    <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay='500' >Designed by a team of five developers, the website features a structured layout for easy navigation, enabling students to access courses, faculty details, and study resources effortlessly. The backend, powered by <span className='text-[#e6b82e]'>Express.js</span>  and <span className='text-[#e6b82e]'>MongoDB,</span> ensures robust data management, while the <span className='text-[#e6b82e]'>ReactJS</span>  frontend delivers a modern and engaging interface. <span className='text-[#e6b82e]'>Tailwind CSS</span>  enhances the design, making it visually appealing and user-friendly.</p>
                                    <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay='500' >The project focused on creating a scalable, high-performance platform that aligns with Kavin’s Academy’s mission of providing world-class education. This website is a crucial step in making quality coaching accessible to aspirants, helping them achieve their goals in Central and State Civil Services.</p>
                                </div>
                                <div variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className='text-[#e6b82e] bg-[#292665] rounded-full w-fit py-2 px-5 lg:py-3 lg:px-16 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 '>
                                    <a variants={fadeIn("", 0.4)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} href="https://www.kavinsacademy.com/" target='_blank' className=' text-lg lg:text-3xl '  >www.kavinsacademy.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <article>
                    <div>
                        <div className='bg-white'>
                            <div className='py-20 md:py-28 lg:py-36 2xl:py-48 mx-auto bg-[url(/assets/images/kavins/curvedbg.png)] bg-no-repeat bg-contain bg-center h-full ' >
                                <div className='flex justify-between max-w-[100rem] mx-auto w-full px-3 sm:px-5 '>
                                    <img 
                                        src="/assets/images/kavins/sec3img1.png"
                                        alt=""
                                        className="w-[28%] sm:w-[22%] h-fit !-translate-y-1/4  "
                                        data-aos="zoom-in"
                                        data-aos-delay="300"
                                        data-aos-anchor-placement="center-bottom"
                                    />
                                    <img
                                        src="/assets/images/kavins/sec3img2.png"
                                        alt=""
                                        className="w-[28%] sm:w-[22%] h-fit !translate-x-0"
                                        data-aos="zoom-in"
                                        data-aos-delay="800"
                                        data-aos-anchor-placement="center-bottom"
                                    />
                                    <img
                                        src="/assets/images/kavins/sec3img3.png"
                                        alt=""
                                        className="w-[28%] sm:w-[22%] h-fit !translate-y-1/4"
                                        data-aos="zoom-in"
                                        data-aos-delay="1300"
                                        data-aos-anchor-placement="center-bottom"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <article>
                    <div>
                        <div className='bg-white py-5 2xl:py-10 2xl:pb-14 max-w-[78rem] mx-auto px-5 2xl:px-0' >
                            <div className='flex flex-col gap-5 2xl:gap-12 mx-auto overflow-hidden 2xl:overflow-visible'>
                                <div className='flex justify-center gap-5 2xl:gap-12 flex-wrap sm:flex-nowrap' >
                                    <div className="sm:w-auto w-[calc(50%-10px)] "><img data-aos="fade-right" data-aos-delay="500" data-aos-anchor-placement="center-bottom" src="public/assets/images/kavins/sec4img1.png" alt="" /></div>
                                    <div className="sm:w-auto w-[calc(50%-10px)] place-items-end"><img data-aos="fade-right" data-aos-delay="200" data-aos-anchor-placement="center-bottom" src="public/assets/images/kavins/sec4img2.png" alt="" /></div>
                                    <div className="sm:w-auto w-full"><img data-aos="fade-left" data-aos-delay="800" data-aos-anchor-placement="center-bottom" src="public/assets/images/kavins/sec4img3.png" alt="" /></div>
                                </div>
                                <div className='flex justify-center gap-5 2xl:gap-12 flex-wrap sm:flex-nowrap' >
                                    <div className="sm:w-auto w-full"><img data-aos="fade-right" data-aos-delay="200" data-aos-anchor-placement="center-bottom" src="public/assets/images/kavins/sec4img4.png" alt="" /></div>
                                    <div className="sm:w-auto w-[calc(50%-10px)] "><img data-aos="fade-left" data-aos-delay="500" data-aos-anchor-placement="center-bottom" src="public/assets/images/kavins/sec4img5.png" alt="" /></div>
                                    <div className="sm:w-auto w-[calc(50%-10px)] place-items-end"><img data-aos="fade-left" data-aos-delay="800" data-aos-anchor-placement="center-bottom" src="public/assets/images/kavins/sec4img6.png" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <article>
                    <div>
                        <div className='bg-[#212529] py-5 lg:py-10 '>
                            <div className='max-w-[110rem] mx-auto text-center px-5 ' >
                                <motion.p variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className='uppercase text-white text-lg lg:text-3xl 2xl:text-[43px] font-bold 2xl:leading-relaxed tracking-wide ' >Achieve your dreams with <span className='text-[#f5c231] ' > Kavin’s Academy</span>, where expert coaching
                                    and strategic learning pave the way for your success!</motion.p>
                                <motion.button variants={fadeIn("", 0.5)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className='bg-[#f5c231] rounded-full text-black p-1 px-5 text-lg font-semibold mt-5 '  >Contact Us</motion.button>
                            </div>
                        </div>
                    </div>
                </article>

            </section>
        </>
    )
}
