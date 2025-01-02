import React from 'react'
import { Link } from 'react-router-dom'

function Srikrishna() {
    return (
        <>
            <section className='bg-white'>
                <section className="flex justify-center items-center bg-center bg-cover   bg-no-repeat rounded-br-[15rem] 3xl:h-[70vh] py-10  " style={{ backgroundImage: `url(${'/assets/images/Third/yelagirihero.png'})` }}>
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
                                    <a href="#" className="text-[#D89C5C] hover:underline uppercase font-semibold">
                                        SRI Krishna
                                    </a>
                                </nav>
                                <h1 className="text-2xl md:text-5xl text-white font-bold uppercase mb-6"> SRI Krishna</h1>
                                <div className="md:space-y-4 space-y-2 text-lg md:text-xl text-white">
                                    <div className='space-y-2'>
                                        <p className="md:text-2xl  text-[#D89C5C]">Category:</p>
                                        <p className=" md:text-base text-sm">Indian Restaurant</p>
                                    </div>
                                    <div className='space-y-2'>
                                        <p className="md:text-2xl  text-[#D89C5C]">Description:</p>
                                        <p className=" md:text-base text-sm">Authentic Indian cuisine in La Rochelle, offering a delightful
                                            culinary journey with traditional dishes and warm hospitality.</p>
                                    </div>
                                    <div className='space-y-2'>
                                        <p className="md:text-2xl  text-[#D89C5C]">Services:</p>
                                        <p className=" md:text-base text-sm">Dine-in, online reservations, menu exploration, and contact
                                            accessibility.</p>
                                    </div>
                                    <div className='space-y-2'>
                                        <p className="md:text-2xl  text-[#D89C5C]">Team:</p>
                                        <p className=" md:text-base text-sm">5 specialists</p>
                                    </div>
                                    <div className='space-y-2'>
                                        <p className="md:text-2xl  text-[#D89C5C]">Country:</p>
                                        <p className=" md:text-base text-sm">India</p>
                                    </div>

                                </div>
                            </div>
                            <div className=' mx-auto'>
                                <div className='grid grid-cols-3 relative items-center  lg:top-40'>
                                    <img className='relative top-28 ' src='/assets/images/Eight/herr1.png' alt="" />
                                    <img className='   z-10 ' src='/assets/images/Eight/herr2.png' alt="" />
                                    <img className=' w-64 relative right-20    h-64' src='/assets/images/Eight/herr3.png' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="  ">
                    <div className=' lg:pt-52 pt-10   max-w-[80rem] mx-auto px-5  md:space-y-10 space-y-5 '>
                        <div >
                            <p className="text-[#D89C5C] md:text-3xl text-base font-bold">ABOUT THE PROJECT</p>
                        </div>
                        <div className='grid lg:grid-cols-2  items-center    gap-10'>
                            <div className='space-y-5 mx-auto  '>
                                <div className=" w-fit  ">
                                    <img className=" " src="/assets/images/Eight/krish.png" alt="Gradient Example" />
                                </div>
                            </div>
                            <div className=' flex flex-col gap-5 '>
                                <div className='text-justify md:text-base md:space-y-5 space-y-3 text-sm  '>
                                    <p className="">The <span className='text-[#D89C5C]'>Sri Krishna</span>  website was developed to create an engaging and user-friendly platform that reflects
                                        the authenticity and charm of the restaurant's Indian cuisine. Designed using <span className='text-[#D89C5C]'> Bootstrap, HTML,</span> and <span className='text-[#D89C5C]'>  CSS,</span> the
                                        website
                                        features a clean and responsive layout, ensuring seamless navigation across all devices.</p>
                                    <p className="">Our team of five developers collaborated to craft a visually appealing and functionally
                                        robust website that showcases the restaurant’s menu, ambiance, and services. Special attention was
                                        given to integrating an intuitive design that highlights key sections, such as the menu, gallery,
                                        and contact information, while maintaining a warm and inviting aesthetic that mirrors the restaurant’s
                                        brand identity.</p>
                                    <p className="">The use of modern web technologies ensured optimal performance and scalability,
                                        while the responsive design guarantees accessibility for customers on both desktop and mobile
                                        devices. This project demonstrates our ability to deliver tailored web solutions that align with
                                        the client’s vision and industry standards.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <section className="bg-[url('/assets/images/Eight/sriii.png')] bg-cover bg-center bg-no-repeat ">
                    <div className='px-5'>
                        <div className='max-w-[70rem] mx-auto py-10 md:py-20'>
                            <div className='grid grid-cols-5'>
                                <div className=''>
                                    <img src="/assets/images/Eight/right.png" alt="" />
                                </div>
                                <div className='col-span-3'>
                                    <img src="/assets/images/Eight/normal.png" alt="" />
                                </div>
                                <div className=''>
                                    <img src="/assets/images/Eight/left.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex  justify-center items-center relative top-5'>
                        <a href='https://www.srikrishna.fr/' target='_blank'>
                            <p className="bg-[#D89C5C] text-white w-fit p-2 px-6 rounded-3xl ">www.srikrishna.fr</p>
                        </a>
                    </div>
                </section>


                <section className='grid grid-cols-4 overflow-hidden'>
                    <img className=' ' src="/assets/images/Eight/Sri_Krishna_bg 2.png" alt="" />
                    <div className='flex justify-center items-center w-full h-full col-span-2'>
                        <img className=' animate-wiggle-more animate-twice ' src="/assets/images/Eight/footer 1.png" alt="" />
                    </div>
                    <img data-aos="fade-left" data-aos-delay="300" className='ml-auto  ' src="/assets/images/Eight/Sri_Krishna_bg 1.png" alt="" />
                </section>




                <section className="bg-[#212529]   md:py-10 py-5 w-full bg-no-repeat">
                    <div className='px-5'>
                        <div className='max-w-[70rem] mx-auto text-center ' >
                            <div className='  justify-center items-center   gap-5 text-white'>
                                <p className="md:text-3xl text-sm font-bold uppercase">Bring your culinary dreams to life with <span className='text-[#D89C5C]'>Sri Krishna,</span>  where  authentic
                                    flavors and quality ingredients come together in every bite!</p>
                                <div className='flex justify-center items-center  gap-4'>
                                    <div className=' text-center md:mt-7 mt-4'>
                                        <button className='rounded-3xl text-center mx-auto  md:text-base text-xs bg-[#D89C5C] p-1 px-4'>
                                            <div className='relative'>
                                                <p className="text-white md:text-base text-sm"> Contact Us</p>
                                                <img className='absolute top-0 -left-2 w-2' src="/assets/images/seventh/white-flower2.png" alt="" />
                                                <img className='absolute bottom-0 -right-2 w-2' src="/assets/images/seventh/white-flower.png" alt="" />
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

export default Srikrishna
