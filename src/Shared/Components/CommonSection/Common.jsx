import React, { useEffect, useState } from 'react'

function Common({ headerImage, name, category, description, services, team, country, descriptionImage }) {
    const [swiperHeight, setSwiperHeight] = useState(0);
    useEffect(() => {
        const updateHeight = () => {
            const headerHeight = 60;
            setSwiperHeight(window.innerHeight - headerHeight);
        };
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, []);
    return (
        <>

            <section className="flex justify-center items-center bg-center bg-cover mt-[60px] bg-no-repeat rounded-br-[15rem]  " style={{ backgroundImage: `url(${headerImage})`, height: `${swiperHeight}px`, }}>
                <div className='max-w-[90rem] mx-auto px-5 '>
                    <div className='grid lg:grid-cols-2 grid-cols-1 items-center' >
                        <div>
                            <nav className="text-sm mb-6">
                                <a href="#" className="text-blue-400 hover:underline">
                                    Home /
                                </a>{" "}
                                /{" "}
                                <a href="#" className="text-blue-400 hover:underline">
                                    Portfolio /
                                </a>{" "}
                                /{" "}
                                <a href="#" className="text-green-400 hover:underline font-semibold">
                                    {name}
                                </a>
                            </nav>
                            <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">   {name}</h1>
                            <div className="space-y-4 text-lg md:text-xl text-white">
                                <div className='space-y-2'>
                                    <p className="text-green-400 md:text-xl ">Category:</p>
                                    <p className=" ">{category}</p>
                                </div>
                                <div className='space-y-2'> 
                                    <p className="text-green-400  md:text-2xl  ">Description:</p>
                                    <p className="">{description} </p>
                                </div>
                                <div className='space-y-2'>
                                    <p className="text-green-400  md:text-2xl  ">Services:</p>
                                    <p className=""> {services}</p>
                                </div>
                                <div className='space-y-2'>
                                    <p className="text-green-400   md:text-2xl ">Team:</p>
                                    <p className="">{team}</p>
                                </div>
                                <div className='space-y-2'>
                                    <p className="text-green-400   md:text-2xl ">Country:</p>
                                    <p className="">{country}</p>
                                </div>

                            </div>
                        </div>
                        <img src={descriptionImage} alt="" />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Common
