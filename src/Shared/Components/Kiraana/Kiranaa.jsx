import React from 'react'
import { Link } from 'react-router-dom'

function Kiranaa() {
    return (
        <>
            <section className='px-5 pr-6'>
                <section className="max-w-[90rem] mx-auto overflow-hidden  bg-black relative border-2 rounded-t-[3.5rem] rounded-bl-[3.5rem]  w-full ">
                    <div className='grid md:grid-cols-5  grid-cols-1 md:gap-5 md:pl-14  md:pt-10'>
                        <div className='md:col-span-3 md:p-0 p-2 z-10'>
                            <img className='mx-auto xl:h-[450px] md:p-0 p-5' src="/assets/images/one/Qulaity3.png" alt="" />
                        </div>
                        <div className='md:col-span-2  z-10  text-left  flex flex-col justify-between   text-white'>
                            <div className=' md:space-y-6 space-y-3 max-w-[30rem] lg:mt-10 p-2 '>
                                <p className="lg:block hidden text-sm ">Platform business model</p>
                                <p className="lg:block hidden text-sm">A convenient platform to buy fresh vegetables, fruits, <br /> flowers and essentials online.</p>
                                <p className="lg:text-4xl md:text-2xl text-lg font-bold">E-COMMERCE WEB APP</p>
                                <div className='flex gap-3 font-semibold flex-wrap text-xs lg:text-sm'>
                                    <div className='px-3 py-1  bg-white text-black w-fit rounded-2xl'>  Mongo DB </div>
                                    <div className='px-3 py-1 bg-white text-black w-fit rounded-2xl'>   Express.js </div>
                                    <div className='px-3 py-1 bg-white text-black w-fit rounded-2xl'>  ReactJS </div>
                                    <div className='px-3 py-1 bg-white text-black w-fit rounded-2xl'>  Tailwind CSS  </div>
                                    <div className='px-3 py-1 bg-white text-black w-fit rounded-2xl'>
                                        AWS
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Link to='/kiranaa'>
                                    <div className='flex w-fit p-2 rounded-t-2xl  rounded-bl-2xl px-5 ml-auto bg-gradient-to-r cursor-pointer relative left-[1px] top-[2px] group from-green-600 to-green-100   items-center'>
                                        <p className="text-black font-bold md:text-base text-xs transition-all duration-300 ease-in-out group-hover:text-white">Read More</p>
                                        <div>   <img className='transition-all duration-300 ease-in-out group-hover:translate-x-2 ' src="/assets/images/one/Double Left.png" alt="" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='absolute top-0 z-0 '>
                        <img className='xl:h-auto md:h-[900px] h-[800px]' src="/assets/images/one/cutimage.png" alt="" />
                    </div>
                </section>
            </section>
        </>
    )
}

export default Kiranaa
