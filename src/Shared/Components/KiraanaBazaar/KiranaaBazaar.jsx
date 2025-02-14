import React from 'react'
import Common from '../CommonSection/Common'

function KiranaaBazaar(props) {

    const { pageData } = props;

    return (
        <>
            <section className=' kiranaa' >
                <section>
                    <Common name={pageData.name} headerImage={pageData.headerImage} descriptionImage={pageData.descriptionImage} categoryColor="text-[#00B75E]" category={pageData.category} description={pageData.description} services={pageData.services} team={pageData.team} country={pageData.country} />
                </section>
                <section className=' '>
                    <p className="md:text-5xl text-2xl   relative md:top-28 top-12 text-center font-bold text-[#00B75E]">ABOUT THE PROJECT</p>
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

                <section className="bg-[url('/assets/images/KiranaaMain/Mainsec.png')] md:py-20 py-10 bg-center bg-cover w-full bg-no-repeat my-10  md:my-20 md:mb-10">
                    <div className='max-w-[80rem] mx-auto px-5 '>
                        <div className='grid md:grid-cols-2  gap-5   '>
                            <div className="bg-[url('/assets/images/KiranaaMain/green.gif')]  flex justify-center items-center p-5 rounded-[3.5rem] bg-cover bg-center bg-no-repeat">
                                <img className='mx-auto ' src="/assets/images/KiranaaMain/saa.png" alt="" />
                            </div>
                            <div className='w-full flex flex-col gap-5'>
                                <div className="bg-[url('/assets/images/KiranaaMain/green.gif')]  flex justify-center items-center pt-5 pr-5 pl-5 rounded-[3.5rem] bg-cover bg-center bg-no-repeat">
                                    <img className='mx-auto ' src="/assets/images/KiranaaMain/secondonee.png" alt="" />
                                </div>

                                <div className='flex items-center gap-5'>
                                    <a href='https://kiranaabazaar.com/' target='_blank'>
                                        <div className='rounded-3xl bg-white text-black w-fit  py-1  px-3 md:px-7'>

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

                <article>
                    <div>
                        <div className=' py-5 2xl:py-10 2xl:pb-14 max-w-[78rem] mx-auto px-5 2xl:px-0' >
                            <div className='flex flex-col gap-5 2xl:gap-12 mx-auto overflow-hidden 2xl:overflow-visible'>
                                <div className='flex justify-center gap-5 2xl:gap-12 flex-wrap sm:flex-nowrap' >
                                    <div className="sm:w-auto w-[calc(50%-10px)] "><img data-aos="fade-right" data-aos-delay="500" data-aos-anchor-placement="center-bottom" src="/assets/images/KiranaaMain/kiran10.png" alt="" /></div>
                                    <div className="sm:w-auto w-[calc(50%-10px)] place-items-end"><img data-aos="fade-right" data-aos-delay="200" data-aos-anchor-placement="center-bottom" src="/assets/images/KiranaaMain/kiran11.png" alt="" /></div>
                                    <div className="sm:w-auto w-full"><img data-aos="fade-left" data-aos-delay="800" data-aos-anchor-placement="center-bottom" src="/assets/images/KiranaaMain/kiran12.png" alt="" /></div>
                                </div>
                                <div className='flex justify-center gap-5 2xl:gap-12 flex-wrap sm:flex-nowrap' >
                                    <div className="sm:w-auto w-full"><img data-aos="fade-right" data-aos-delay="200" data-aos-anchor-placement="center-bottom" src="/assets/images/KiranaaMain/kiran13.png" alt="" /></div>
                                    <div className="sm:w-auto w-[calc(50%-10px)] "><img data-aos="fade-left" data-aos-delay="500" data-aos-anchor-placement="center-bottom" src="/assets/images/KiranaaMain/kiran14.png" alt="" /></div>
                                    <div className="sm:w-auto w-[calc(50%-10px)] place-items-end"><img data-aos="fade-left" data-aos-delay="800" data-aos-anchor-placement="center-bottom" src="/assets/images/KiranaaMain/kiran15.png" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <section className="bg-[url('/assets/images/KiranaaMain/foot.png')]   bg-center bg-cover lg:py-20 py-10 w-full bg-no-repeat">
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
                                                <img className='absolute top-0 md:-left-2 -left-3 w-2' src="/assets/images/seventh/white-flower2.png" alt="" />
                                                <img className='absolute bottom-0 md:-right-2 -right-3 w-2' src="/assets/images/seventh/white-flower.png" alt="" />
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
