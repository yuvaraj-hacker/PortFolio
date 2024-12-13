import React from 'react'

function GoldResort() {
    return (
        <>
            <section className='px-5 py-20 '>
                <section className="max-w-[90rem]   mx-auto  bg-[url('/assets/images/Third/GoldHill.png')] bg-center bg-cover border-2 rounded-t-3xl rounded-bl-3xl  w-full ">
                    <div className='grid xl:grid-cols-5  md:gap-5 md:px-14 md:pt-10'>
                        <div className='xl:col-span-3 md:p-0 p-2'>
                            <img className=' xl:h-[450px]' src="/assets/images/Third/GoldResort.png" alt="" />
                        </div>
                        <div className='xl:col-span-2 md:space-y-6 space-y-3 md:mt-10 text-left md:my-10 md:p-0 p-2 text-white'>
                            <p className="md:block hidden ">Premium Resort and Holiday Destination </p>
                            <p className="md:block hidden">Gold Hill Resort offers a serene escape nestled amidst picturesque surroundings, perfect <br />  for relaxation and rejuvenation.</p>
                            <p className="md:text-4xl text-xl font-bold">BOOKING WEB APP</p>
                            <div className='flex gap-5 font-semibold flex-wrap text-xs md:text-sm'>
                                <div className='px-3 py-1  bg-white text-black w-fit rounded-2xl'>
                                    Next.js
                                </div>
                                <div className='px-3 py-1 bg-white text-black w-fit rounded-2xl'>
                                    Tailwind CSS
                                </div>
                            </div>
                            <div className='flex w-fit p-2 rounded-t-2xl  rounded-bl-2xl px-5 ml-auto bg-gradient-to-r cursor-pointer  from-green-600 to-green-100    items-center'>
                                <p className="text-black font-bold">  Read More</p>
                                <div>
                                    <img src="/assets/images/one/Double Left.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default GoldResort
