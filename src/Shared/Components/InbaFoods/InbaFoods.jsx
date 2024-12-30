import React from 'react'
import { Link } from 'react-router-dom'

function InbaFoods() {
    return (
        <>
            <section className='bg-white'>

                <section className="flex justify-center items-center bg-center bg-cover   bg-no-repeat rounded-br-[15rem] 3xl:h-[70vh] py-10  " style={{ backgroundImage: `url(${'/assets/images/seventh/inbabackground.png'})` }}>
                    <div className='max-w-[90rem] mx-auto px-5 '>
                        <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 items-center' >
                            <div className=' '>
                                <nav className="text-sm mb-6">
                                    <Link to='/' className=" text-white hover:underline">
                                        Home /
                                    </Link>{" "}
                                    /{" "}
                                    <a href="#" className=" text-white hover:underline">
                                        Portfolio /
                                    </a>{" "}
                                    /{" "}
                                    <a href="#" className="text-[#00B453] hover:underline uppercase font-semibold">
                                        Inba Foods Eat Right
                                    </a>
                                </nav>
                                <h1 className="text-2xl md:text-5xl uppercase text-white font-bold mb-6">Inba Foods Eat Right</h1>
                                <div className="md:space-y-4 space-y-2 text-lg md:text-xl text-white">
                                    <div className='space-y-2'>
                                        <p className="md:text-2xl  text-[#00B453]">Category:</p>
                                        <p className=" md:text-base text-sm">Millet-based health foods</p>
                                    </div>
                                    <div className='space-y-2'>
                                        <p className="md:text-2xl  text-[#00B453]">Description:</p>
                                        <p className=" md:text-base text-sm">High-quality, preservative-free millet products promoting healthy
                                            and natural eating.</p>
                                    </div>
                                    <div className='space-y-2'>
                                        <p className="md:text-2xl  text-[#00B453]">Services:</p>
                                        <p className=" md:text-base text-sm">Online store, millet-based product range, and health advocacy.</p>
                                    </div>
                                    <div className='space-y-2'>
                                        <p className="md:text-2xl  text-[#00B453]">Team:</p>
                                        <p className=" md:text-base text-sm">5 specialists</p>
                                    </div>
                                    <div className='space-y-2'>
                                        <p className="md:text-2xl  text-[#00B453]">Country:</p>
                                        <p className=" md:text-base text-sm">India</p>
                                    </div>

                                </div>
                            </div>
                            <div className=' mx-auto'>
                                <div
                                    className='flex relative lg:top-52  '>
                                    <img className='w-full   ' src='/assets/images/seventh/inbas.png' alt="" />

                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="bg-[url('/assets/images/Sixth/backimage.png')] bg-cover bg-center w-full ">
                    <div className=' lg:pt-52 pt-10 md:pb-20 pb-10 max-w-[80rem] mx-auto px-5  md:space-y-10 space-y-5 '>
                        <div >
                            <p className="text-[#00B453] md:text-3xl text-base font-bold">ABOUT THE PROJECT</p>
                        </div>
                        <div className='grid lg:grid-cols-2   gap-10'>
                            <div className='space-y-5 mx-auto'>
                                <div className=" w-fit z-10">
                                    <img className=" " src="/assets/images/seventh/insane.png" alt="Gradient Example" />
                                </div>
                            </div>
                            <div className=' flex justify-between flex-col  gap-5   '>
                                <div className='text-justify md:text-base md:space-y-5 space-y-3 text-sm  '>
                                    <p className="">The  <span className='text-[#00B453]'> Inba Foods</span> website was designed and developed to effectively showcase the brand's commitment
                                        to millet-based health foods and sustainable living. Built using the <span className='text-[#00B453]'> MEAN stack, Bootstrap, HTML,</span> and <span className='text-[#00B453]'> CSS,</span>
                                        the platform reflects modern design principles while ensuring a seamless user experience across devices.
                                        As a team of five developers, we worked collaboratively to create a visually appealing and functional website
                                        that highlights the brand's unique story, mission, and diverse product range.</p>
                                    <p className="">The site features a responsive layout, intuitive navigation, and a clean design that aligns with
                                        Inba Foods' ethos of natural and healthy living. Special emphasis was placed on showcasing their journey,
                                        vision, and product offerings through engaging content and user-friendly interfaces. The integration of
                                        advanced technologies ensures scalability and optimal performance. This project not only embodies Inba Foods’
                                        values but also stands as a testament to our team’s ability to deliver high-quality, impactful web solutions.</p>
                                </div>
                                <div>
                                    <a href='https://www.inbafoods.in/home' target='_blank'>
                                        <div className='p-2 bg-[#00B453] w-fit md:text-base text-xs  text-white rounded-3xl px-4'>
                                            www.inbafoods.in
                                        </div>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                </section>

                <section className="bg-[url('/assets/images/seventh/Inba-sec.png')] relative  w-full  bg-center bg-cover h-[30vh] bg-no-repeat">
                    {/* <img className='absolute' src="/assets/images/seventh/gap.png" alt="" /> */}
                </section>

                <section className="bg-[url('/assets/images/seventh/whole.png')] relative w-full  bg-center bg-cover h-[30vh] bg-no-repeat">

                </section>


                <section className="bg-[#0F1C38] py-10 w-full bg-no-repeat">
                    <div className='px-5'>
                        <div className='max-w-[70rem] mx-auto text-center     ' >
                            <div className='  justify-center items-center   gap-5 text-white'>
                                <p className="md:text-3xl text-sm font-bold uppercase">Experience the power of nutrition with Inba Foods —
                                    wholesome, natural, and millet-based for a healthier you!</p>
                                <div className='flex justify-center items-center gap-4'>
                                    <div className=' text-center md:mt-7'>
                                        <button className='rounded-3xl text-center mx-auto  md:text-base text-xs bg-[#00B453] p-1 px-4'>
                                            <div className='relative'>
                                                <p className="text-white md:text-base text-sm"> Contact Us</p>
                                                <img className='absolute top-0 -left-2 w-2' src="/assets/images/JobezzyMain/jobarrow1.png" alt="" />
                                                <img className='absolute bottom-0 -right-2 w-2' src="/assets/images/JobezzyMain/jobarrow2.png" alt="" />
                                            </div>
                                        </button>
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

export default InbaFoods
