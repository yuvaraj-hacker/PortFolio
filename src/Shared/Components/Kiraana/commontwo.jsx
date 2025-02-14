import React from 'react'
import { Link } from 'react-router-dom'

function CommonTwo({ imagebright, first, second, websitecate, tech1, bgImage, tech2, tech3, techList = [], from = '#ffff', to = '#0000', link = '/folsum-pulse' }) {
    return (
        <>
        {/* kiranaa home card */}
            <section className='px-5 pr-6'>
                <section className="max-w-[80rem] mx-auto overflow-hidden  bg-black relative border-2 rounded-t-[3.5rem] rounded-bl-[3.5rem] w-full">
                    <div className='grid md:grid-cols-5  grid-cols-1 md:gap-5 md:pl-14  md:pt-5'>
                        <div className='md:col-span-3 md:p-0 p-2 z-10'>
                            <img className='mx-auto xl:h-[420px] md:p-0 p-5' src={{ imagebright }} alt="" />
                        </div>
                        <div className='md:col-span-2  z-10  text-left  flex flex-col justify-between   text-white'>
                            <div className=' md:space-y-6 space-y-3 max-w-[30rem] lg:mt-10 p-2 '>
                                <p className="lg:block hidden text-sm ">{first}</p>
                                <p className="lg:block hidden text-sm">{second}</p>
                                <p className="lg:text-4xl md:text-2xl text-lg font-bold">{websitecate}</p>
                                <div className='flex gap-3 font-semibold flex-wrap text-xs lg:text-sm'>
                                   
                                    {techList.map((tech, index) => (
                                        <div key={index} className="px-3 py-1 bg-white text-black w-fit rounded-2xl" >
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <Link to={link}>
                                    <div className={`flex w-fit p-2 rounded-t-2xl  rounded-bl-2xl px-5 ml-auto bg-gradient-to-r cursor-pointer relative left-[1px] top-[2px] group ${from} ${to}   items-center`}>
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

export default CommonTwo
