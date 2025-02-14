import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../Variants'
import Marquee from 'react-fast-marquee'

export default function BodyRepair({ herosecinfo }) {


    return (
        <>
            <section className=' bg-white overflow-x-hidden'>

                <article className='-mt-10 lg:mt-0'>
                    <div className='w-full  text-white  '>
                        <div className='bg-[url(/assets/images/kavins/herobg.png)] min-h-[73vh] 2xl:min-h-fit 2xl:max-h-[700px] md:rounded-br-[15rem] rounded-br-[8rem] bg-cover bg-no-repeat relative pt-10 px-5 2xl:px-0'>
                            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/50 md:rounded-br-[15rem] rounded-br-[8rem] "></div>
                            <div className='max-w-[78rem] mx-auto py-14 flex flex-col lg:flex-row z-10 relative '>
                                <div className='lg:w-3/5'>
                                    <ul className='flex gap-1 font-light uppercase'>
                                        <li>HOME</li> {'/'}
                                        <li>Portfolio</li> {'/'}
                                        <li className=' text-[#f5c131]'>ALL STATE AUTO & BODY REPAIR</li>
                                    </ul>
                                    <motion.h1 variants={fadeIn("", 0.1)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className='uppercase text-3xl md:text-5xl 2xl:text-[45px] font-semibold pt-10  '>ALL STATE AUTO & BODY REPAIR</motion.h1>
                                    <motion.div variants={fadeIn("left", 0.3)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className='flex flex-col lg:text-lg'>
                                        {herosecinfo?.map((data, i) => (
                                            <div key={i} className={`${data.title == 'Description' || 'Services' ? 'lg:w-[70%] xl:w-[90%]' : '2xl:w-[90%]'} pt-4`}>
                                                <h2 className='text-[#f5c131]'>{data.title}:</h2>
                                                <p>{data.description} </p>
                                            </div>
                                        ))}
                                    </motion.div>
                                </div>
                                <motion.div variants={fadeIn("right", 0.3)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className='lg:w-2/5 relative flex items-center justify-center overflow-visible mx-auto '>
                                    <img src="/assets/images/bodyrepair/heroimage.png" alt="" className='max-w-none w-[70%] lg:w-[600px] lg:absolute right-0 top-0' />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </article>

                <article className='' >
                    <div>
                        <div className='bg-white py-10 max-w-[78rem] px-5 mx-auto '>
                            <h1 className='text-[#292665] px-5 2xl:px-0 text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-left font-semibold lg:py-5 lg:mt-20 ' >ABOUT THE PROJECT</h1>
                            <div className='bg-gradient-to-t from-[#f2f2f2] to-white relative rounded-b-3xl 2xl:mt-10 '>
                                <div className='pt-5 mx-auto px-5 2xl:px-0 relative '>
                                    <img data-aos="fade-zoom-in" data-aos-anchor-placement="center-bottom" data-aos-delay="200" src="/assets/images/bodyrepair/abtlap.png" alt="" className='relative mx-auto w-[70%] ' />
                                    <img data-aos="zoom-in" data-aos-anchor-placement="center-bottom" data-aos-delay="600"  data-aos-duration="1000" src="/assets/images/bodyrepair/abtcar.png" alt="" className='absolute bottom-[9%] inset-x-0 mx-auto w-[90%] ' /> 
                                </div>
                                <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay='300' data-aos-duration="1000" className=' lg:text-lg *:py-2 lg:*:py-4  lg:px-10 leading-relaxed py-5 px-5 lg:py-10 text-justify lg:text-center ' >
                                    <p >The ALL STATE AUTO & BODY REPAIR website was developed to provide a seamless and informative experience for customers seeking expert auto repair services. Built with HTML and Tailwind CSS, the site ensures fast performance, responsiveness, and a modern design.</p>
                                    <p >Designed by a team of five, the website highlights the company’s 10+ years of experience, offering clear navigation for services, promotions, and contact details. Tailwind CSS enhances the visual appeal while keeping the interface user-friendly.</p>
                                    <p >This project reflects All State Auto & Body Repair’s commitment to quality service, delivering a professional and efficient online presence for their customers.</p>
                                </div>
                                <div variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className='text-white bg-[#c90202] rounded-full w-fit py-2 px-5 lg:py-3 lg:px-16 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 '>
                                    <a variants={fadeIn("", 0.4)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} href="https://www.allstateautoandbodyrepair.com/" target='_blank' className=' text-lg lg:text-3xl '  >www.allstateautoandbodyrepair.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <article>
                    <div className='mt-5 lg:mt-10'>
                        <div className=" rounded-b-[3.5rem] bg-center bg-cover  w-full relative ">
                            <div className='h-2/3 w-full absolute bg-[#f2ece4] -bottom-5 lg:-bottom-14'></div>
                            <Marquee speed={70} autoFill={true} direction='right' className='relative overflow-visible 2xl:max-w-[1920px] mx-auto '>
                                <div className='grid grid-cols-4 w-full *:w-[120px] sm:*:w-[200px] lg:*:w-[250px] 2xl:*:w-[380px] *:mr-5'>
                                    <img className='' src="/assets/images/bodyrepair/abtimg1.png" alt="" />
                                    <img className='' src="/assets/images/bodyrepair/abtimg2.png" alt="" />
                                    <img className='' src="/assets/images/bodyrepair/abtimg3.png" alt="" />
                                    <img className='' src="/assets/images/bodyrepair/abtimg4.png" alt="" />
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </article>

                <article>
                    <div>
                        <div className='bg-white py-5 lg::py-10  max-w-[1920px] mx-auto my-10 mb-5 lg:pt-16 ' >
                            <img data-aos="zoom-in" data-aos-anchor-placement="top-bottom" data-aos-delay="400"  data-aos-duration="1000" className='w-[70%] mx-auto ' src="/assets/images/bodyrepair/sec4img.png" alt="" />
                        </div>
                    </div>
                </article>

                <article>
                    <div>
                        <div className='bg-[#0f0f0f] py-5 lg:py-10 '>
                            <div className='max-w-[110rem] mx-auto px-5 flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between overflow-hidden' >
                                <p data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-delay="200" data-aos-duration="800" className='uppercase text-white text-lg lg:text-3xl 2xl:text-[37px] font-bold 2xl:leading-relaxed tracking-wider ' >
                                    Restore and revitalize your vehicle with <span className='text-[#c90202] '> All State Auto</span> & <br className='hidden 2xl:block' />
                                    <span className='text-[#c90202] '>Body Repair</span> , your trusted one-stop shop for quality auto care!</p>
                                <button data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-duration="800"  data-aos-delay="400" className='bg-white rounded-full text-[#c90202] p-1 px-5 text-lg font-semibold mt-5 h-fit whitespace-nowrap relative'  >Contact Us <img src="/assets/images/bodyrepair/buttonfeather.svg" alt="" className='absolute right-2.5 bottom-1.5' /><img src="/assets/images/bodyrepair/buttonfeather.svg" alt="" className='absolute top-1.5 left-3 rotate-180' /></button>
                            </div>
                        </div>
                    </div>
                </article>

            </section>
        </>
    )
}
