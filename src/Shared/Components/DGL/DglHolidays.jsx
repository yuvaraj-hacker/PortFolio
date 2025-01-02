import React from 'react'
import Common from '../CommonSection/Common'

function DglHolidays() {

    const pageData = {
        headerImage: '/assets/images/nine/dgll.png',
        name: 'DGL HOLIDAYS',
        category: 'Travel and Tourism Services',
        description: 'Tailored holiday packages and exceptional travel experiences.',
        services: 'Custom travel planning, accommodations, transportation, and guided tours.',
        team: '5 specialists',
        country: 'India',
        descriptionImage: '/assets/images/nine/dglherosection.png'
    };
    return (
        <>
            <section className='bg-white'>
                <section className=' '>
                    <Common name={pageData.name} headerImage={pageData.headerImage} descriptionImage={pageData.descriptionImage} category={pageData.category} description={pageData.description} services={pageData.services} team={pageData.team} country={pageData.country} categoryColor="text-[#FCCE38]" />
                </section>

                <section className=" md:my-20 my-10 ">
                    <div className=' max-w-[80rem] mx-auto px-5  md:space-y-10 space-y-5 '>
                        <div >
                            <p className="text-[#40A44C] md:text-4xl text-xl text-center font-bold">ABOUT THE PROJECT</p>
                        </div>
                        <div className='grid lg:grid-cols-1  items-center     md:space-y-5 space-y-3'>
                            <div className='space-y-5 mx-auto  '>
                                <div className=" w-fit  ">
                                    <img className=" " src="/assets/images/nine/groupss.png" alt="Gradient Example" />
                                </div>
                            </div>
                            <div className=' flex flex-col gap-5 '>
                                <div className='text-justify md:text-base md:space-y-5 space-y-3 text-sm  '>
                                    <p className="">The <span className='text-[#40A44C]'>DGL Holidays</span>  website was designed and developed to provide a seamless
                                        platform for showcasing premium travel and tourism services. Leveraging modern web
                                        technologies such as <span className='text-[#40A44C]'> Bootstrap, HTML, CSS, </span> and  <span className='text-[#40A44C]'> PHP, </span> our team of five developers collaborated
                                        to create a user-friendly and visually appealing website that reflects the company’s dedication
                                        to delivering exceptional travel experiences.</p>
                                    <p className="">The site features a clean, responsive design that adapts effortlessly across devices,
                                        ensuring accessibility for all users. Key functionalities include detailed service descriptions
                                        , easy navigation, and a vibrant interface to engage potential customers. We also integrated robust
                                        back-end features to support efficient management of travel packages and inquiries.</p>
                                    <p className="">This project is a testament to our team’s expertise in combining aesthetics with functionality.
                                        By aligning the website's design with DGL Holidays’ commitment to customer satisfaction and excellence,
                                        we have created a digital presence that enhances the company's ability to connect with travel enthusiasts
                                        worldwide.</p>
                                </div>
                            </div>

                            <div className='text-center bg-[#008EE1] p-2 w-fit mx-auto rounded-3xl text-white px-4 cursor-pointer'>
                                <a href="http://www.dglholidays.com/" target='_blank'>
                                    <p className="">   www.dglholidays.com   </p>
                                </a>
                            </div>

                        </div>
                    </div>

                </section>
                <section className="bg-[url('/assets/images/nine/abbb.png')] 2xl:h-[500px]    2xl:mt-96 xl:mt-80 lg:mt-72  md:mt-60  mt-40   ">
                    <div>
                        <img className='mx-auto relative 2xl:bottom-80 xl:bottom-72 lg:bottom-60 md:bottom-40 bottom-16  px-5' src="/assets/images/nine/holi.png" alt="" />
                    </div>
                </section>


                <section className="bg-[#F7F7F7]  md:py-20 py-10">
                    <div className='max-w-[80rem] overflow-hidden mx-auto   px-2'>
                        <div className="grid grid-cols-2 md:gap-5 gap-3  items-center md:grid-cols-5 ">
                            <div>
                                <img src="/assets/images/nine/dgl1.png" alt="Mobile Screenshot 1" />
                            </div>
                            <div>
                                <img src="/assets/images/nine/dgl2.png" alt="Mobile Screenshot 2" />
                            </div>
                            <div className='md:col-span-3 col-span-2 ml-auto'>
                                <img src="/assets/images/nine/dgl3.png" alt="Tablet Screenshot 1" />
                            </div>
                            <div className='md:col-span-3 col-span-2' >
                                <img src="/assets/images/nine/dgl4.png" alt="Tablet Screenshot 2" />
                            </div>
                            <div>
                                <img src="/assets/images/nine/dgl5.png" alt="Mobile Screenshot 3" />
                            </div>
                            <div >
                                <img src="/assets/images/nine/dgl6.png" alt="Mobile Screenshot 4" />
                            </div>
                        </div>
                    </div>
                </section>


                <img className=' ' src="/assets/images/nine/Footerr.png" alt="" />
                <section className="bg-[#0F0F0F] md:py-10 py-5 w-full bg-no-repeat  ">
                    <div className='px-5'>
                        <div className='max-w-[70rem] mx-auto text-center     ' >
                            <div className='  justify-center items-center   gap-5 text-white'>
                                <p className="md:text-3xl text-sm font-bold uppercase">"Turn your travel dreams into reality with DGL Holidays'
                                    tailored and unforgettable holiday experiences!</p>
                                <div className='flex justify-center items-center gap-4'>
                                    <div className=' text-center md:mt-7 mt-5'>
                                        <button className='rounded-3xl text-center mx-auto  md:text-base text-xs bg-[#FEC000] p-1 px-4'>
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

export default DglHolidays
