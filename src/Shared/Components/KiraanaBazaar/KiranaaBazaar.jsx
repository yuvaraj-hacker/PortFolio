import React from 'react'
import Common from '../CommonSection/Common'

function KiranaaBazaar() {
    const pageData = {
        headerImage: '/assets/images/one/hero.png',
        name: 'KIRANAA BAZAAR',
        category: 'Online Grocery and Fresh Produce Marketplace',
        description: 'A convenient platform to buy fresh vegetables, fruits, flowers, and essentials online.',
        services: 'Doorstep delivery of fresh produce with quality assurance and competitive pricing.',
        team: '5 specialists',
        country: 'United States',
        descriptionImage: '/assets/images/one/origin.png',

    };


    return (
        <>
            <section className='  kiranaa' >
                <section>
                    <Common name={pageData.name} headerImage={pageData.headerImage} descriptionImage={pageData.descriptionImage} categoryColor="text-[#00B75E]" category={pageData.category} description={pageData.description} services={pageData.services} team={pageData.team} country={pageData.country} />
                </section>
                <section className=' '>
                    <p className="md:text-5xl text-2xl   relative md:top-28 top-16 text-center font-bold text-[#00B75E]">ABOUT THE PROJECT</p>
                    <div className='max-w-[65rem] px-10 mx-auto z-10  relative lg:top-52 md:top-44 sm:top-36  top-28 toper'>
                        <div className="   p-10  bg-center bg-cover  rounded-[3.5rem] bg-no-repeat bg-[url('/assets/images/KiranaaMain/inner.png')]">
                            <img src="/assets/images/KiranaaMain/kira1.png" alt="" />
                        </div>
                    </div>
                    <div className='px-5'>
                        <div className='max-w-[80rem] relative   mx-auto border-2   rounded-[3.5rem] p-5  md:text-xl text-sm space-y-5 md:pt-64 texts  pt-40 border-[#00B75E]'>
                            <p className="text-justify"> <span className='text-[#00B85F] '> Kiranaa Bazaar </span> is an innovative e-commerce platform designed and developed
                                to revolutionize online grocery shopping. Built with modern web technologies such as <span className='text-[#00B85F]'> MongoDB,
                                    Express.js, ReactJS, Tailwind CSS,  </span>and powered by <span className='text-[#00B85F]'>AWS</span> , this platform ensures a seamless and
                                efficient shopping experience for users.</p>
                            <p className="text-justify">The project was a collaborative effort of our 5-member team, blending
                                expertise in  <span className='text-[#00B85F]'> full-stack development, UI/UX design,</span> and cloud infrastructure. Our focus
                                was to create a user-centric interface that simplifies the process of buying fresh
                                vegetables, fruits, flowers, and daily essentials.</p>
                            <p className="text-justify">One of the core challenges was integrating real-time inventory updates
                                with local suppliers while ensuring smooth scalability for high traffic. To address
                                this, we optimized the backend for efficiency and implemented secure payment gateways
                                for safe transactions.</p>
                            <p className="text-justify"> <span className='text-[#00B85F]'>Kiranaa Bazaar </span> isn’t just a website; it’s a step forward in supporting
                                sustainable farming, empowering local communities, and providing users with fresh,
                                affordable, and reliable products at their convenience.</p>
                        </div>
                    </div>
                </section>


                <section className="bg-[url('/assets/images/KiranaaMain/Mainsec.png')] md:py-20 py-10 bg-center bg-cover w-full bg-no-repeat my-10  md:my-20">

                    <div className='max-w-[80rem] mx-auto px-5 '>
                        <div className='grid md:grid-cols-2  gap-5   '>
                            <div className="bg-[url('public/assets/images/KiranaaMain/green.gif')]  flex justify-center items-center p-5 rounded-[3.5rem] bg-cover bg-center bg-no-repeat">
                                <img className='mx-auto ' src="/assets/images/KiranaaMain/saa.png" alt="" />
                            </div>
                            <div className='w-full flex flex-col gap-5'>
                                <div className="bg-[url('public/assets/images/KiranaaMain/green.gif')]  flex justify-center items-center pt-5 pr-5 pl-5 rounded-[3.5rem] bg-cover bg-center bg-no-repeat">
                                    <img className='mx-auto ' src="/assets/images/KiranaaMain/secondonee.png" alt="" />
                                </div>

                                <div className='flex items-center gap-5'>
                                    <a href='https://kiranaabazaar.com/' target='_blank'>
                                        <div className='rounded-3xl bg-white text-black w-fit py-2  px-3 md:px-7'>

                                            <p className="md:text-xl text-sm text-[#00B85F]">www.kiranaabazaar.com</p>
                                        </div>
                                    </a>
                                    {/* <div className='rounded-3xl bg-white text-black w-fit py-2 px-7'>
                                        <img className='w-auto h-12' src="/assets/images/KiranaaMain/GooglePlay.png" alt="" />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='max-w-[80rem] mx-auto  md:my-20 my-10 px-5'>

                    <div className="grid grid-cols-2  items-center md:grid-cols-5 ">
                        {/* Each image container */}
                        <div>
                            <img src="/assets/images/KiranaaMain/kiran10.png" alt="Mobile Screenshot 1" />
                        </div>
                        <div>
                            <img src="/assets/images/KiranaaMain/kiran11.png" alt="Mobile Screenshot 2" />
                        </div>
                        <div className='md:col-span-3 col-span-2 ml-auto'>
                            <img src="/assets/images/KiranaaMain/kiran12.png" alt="Tablet Screenshot 1" />
                        </div>
                        <div className='md:col-span-3 col-span-2' >
                            <img src="/assets/images/KiranaaMain/kiran13.png" alt="Tablet Screenshot 2" />
                        </div>
                        <div  >
                            <img src="/assets/images/KiranaaMain/kiran14.png" alt="Mobile Screenshot 3" />
                        </div>
                        <div className=''>
                            <img src="/assets/images/KiranaaMain/kiran15.png" alt="Mobile Screenshot 4" />
                        </div>
                    </div>
                </section>

                <section className="bg-[url('/assets/images/KiranaaMain/foot.png')]   bg-center bg-cover md:py-20 py-10 w-full bg-no-repeat">
                    <div className='px-5'>
                        <div className='max-w-[70rem] mx-auto    border rounded-2xl p-5  ' >
                            <div className='flex justify-center items-center flex-wrap gap-5 text-white'>
                                <p className="md:text-3xl text-sm font-bold"> Elevate your project with our  AI-powered expertise!</p>
                                <div className='flex gap-4'>
                                    <img className='md:w-24 w-10 md:h-auto h-10' src="/assets/images/KiranaaMain/footimage.png" alt="" />
                                    <div className='md:mt-9 mt-4'>
                                        <button className='rounded-3xl  md:text-base text-xs bg-[#00B85F] p-1 px-4'>
                                            <div className='relative'>
                                                <p className=""> Contact Us</p>
                                                <img className='absolute top-0 -left-2' src="/assets/images/seventh/white-flower2.png" alt="" />
                                                <img className='absolute bottom-0 -right-2' src="/assets/images/seventh/white-flower.png" alt="" />
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

export default KiranaaBazaar
