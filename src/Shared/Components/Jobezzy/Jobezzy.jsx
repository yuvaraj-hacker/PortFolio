import React from 'react'
import { Link } from 'react-router-dom'

function Jobezzy() {
    return (
        <>
            <section className='px-5  pr-6'>
                <section className="max-w-[80rem]   mx-auto  bg-[url('/assets/images/Second/jobezzy.png')] bg-center bg-cover border-2 rounded-t-[3.5rem] rounded-bl-[3.5rem]  w-full ">
                    <div className='grid md:grid-cols-5  md:gap-5 md:pl-14  '>
                        <div className='md:col-span-3 md:p-0 p-2'>
                            <img className='   xl:h-[450px] p-5' src="/assets/images/Second/Quality1.png" alt="" />
                        </div>
                        <div className='text-left md:col-span-2    text-white flex flex-col justify-between'>
                            <div className=' md:space-y-6 space-y-3   lg:mt-10 p-2  pr-5'>
                                <p className="lg:block hidden text-sm">Job Posting and Recruitment Platform</p>
                                <p className="lg:block hidden text-sm">A streamlined platform connecting job  seekers with   employers for diverse  opportunities.</p>
                                <p className="lg:text-4xl md:text-2xl text-lg  font-bold">MOBILE  APP</p>
                                <div className='flex gap-3 font-semibold flex-wrap text-xs md:text-sm'>
                                    <div className='px-3 py-1  bg-white text-black w-fit rounded-2xl'>
                                        React Native
                                    </div>
                                    <div className='px-3 py-1 bg-white text-black w-fit rounded-2xl'>
                                        Express.js
                                    </div>
                                    <div className='px-3 py-1 bg-white text-black w-fit rounded-2xl'>
                                        Tailwind CSS
                                    </div>
                                </div>
                            </div>
                            <Link to='/jobezzy'>
                                <div className='flex w-fit p-2 rounded-t-2xl  rounded-bl-2xl px-5 ml-auto bg-gradient-to-r cursor-pointer  relative left-[1px] top-[2px] from-[#FFC000] to-[#f0d071] group    items-center'>
                                    <p className="text-black font-bold transition-all duration-300 ease-in-out group-hover:text-white">  Read More</p>
                                    <div>
                                        <img className='transition-all duration-300 ease-in-out group-hover:translate-x-2 ' src="/assets/images/one/Double Left.png" alt="" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Jobezzy
