import React from 'react'
import { Link } from 'react-router-dom'


function Commoncard({imagebright , first , second, websitecate , tech1 , tech2 , from='#ffff', to='#0000' , link ='/folsum-pulse'}) {
    return (
        <>
            <section className='px-5 pr-6 '>
                <section className="max-w-[90rem] mx-auto bg-[url('/assets/images/Third/GoldHill.png')] bg-center bg-cover border-2 rounded-t-[3.5rem] rounded-bl-[3.5rem]  w-full ">
                    <div className='grid md:grid-cols-5  md:gap-5 md:pl-14  '>
                        <div className='md:col-span-3 md:p-0 p-2'>
                            <img className=' xl:h-[450px] p-5' src={imagebright} alt="" />
                        </div>
                        <div className='md:col-span-2  text-left flex flex-col justify-between'>
                            <div className=' md:space-y-6 space-y-3 md:mt-10  text-white  xl:p-5 p-2    '>
                                <p className="lg:block hidden text-sm">{first} </p>
                                <p className="lg:block hidden text-justify text-sm">{second}</p>
                                <p className="lg:text-4xl md:text-2xl text-lg font-bold">{websitecate}</p>
                                <div className='flex gap-5 font-semibold flex-wrap text-xs md:text-sm'>
                                    <div className='px-3 py-1  bg-white text-black w-fit rounded-2xl'> {tech1}  </div>
                                    <div className='px-3 py-1 bg-white text-black w-fit rounded-2xl'> {tech2} </div>
                                </div>
                            </div>
                            <div>
                                {/* <Link to='/yelagiri'>
                                    <div className='flex w-fit p-2 rounded-t-2xl  rounded-bl-2xl px-5 ml-auto bg-gradient-to-r cursor-pointer relative left-[1px] top-[2px] from-green-600 to-green-100 items-center'>
                                        <p className="text-black font-bold">  Read More</p>
                                        <div>
                                            <img src="/assets/images/one/Double Left.png" alt="" />
                                        </div>
                                    </div>
                                </Link> */}
                                <Link to={link}>
                                    <div className={`flex w-fit p-2 rounded-t-2xl rounded-bl-2xl px-5 ml-auto bg-gradient-to-r cursor-pointer relative left-[1px] top-[2px] ${from} ${to} items-center group`}>
                                        <p className="text-black font-bold group-hover:text-white transition-all duration-300 ease-in-out">Read More</p>
                                        <div>
                                            <img src="/assets/images/one/Double Left.png" alt="" className="group-hover:translate-x-2 transition-all duration-300 ease-in-out" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Commoncard