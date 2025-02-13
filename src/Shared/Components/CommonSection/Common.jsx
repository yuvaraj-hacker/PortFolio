import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'
import GltfViewer from '../../../Components/GLTF/Gltfviewer'

function Common({ headerImage, name, category, description, services, team, country, descriptionImage, descriptImage, categoryColor = 'text-white', }) {

    return (
        <>

            <section className="flex justify-center items-center bg-center bg-cover   bg-no-repeat md:rounded-br-[15rem] rounded-br-[8rem] 3xl:h-[70vh] py-10   " style={{ backgroundImage: `url(${headerImage})` }}>
                <div className='max-w-[90rem] mx-auto px-5 '>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 items-center ' >
                        <div>
                            <div className="text-sm mb-6 flex  flex-wrap gap-3  ">
                                    <div className='hover:underline cursor-pointer text-blue-400'>
                                    Home /
                                </div>
                                 <div className='hover:under    line'>
                                    <a href="#" className="text-blue-400 hover:underline">
                                       Portfolio /
                                    </a>
                                </div>
                                   <div>
                                    <a href="#" className={`${categoryColor} hover:underline font-semibold`}>
                                        {name}
                                     </a>
                                </div>
                            </div>
                            <h1 className="text-2xl md:text-5xl text-white font-bold mb-6">{name}</h1>
                            <div className="md:space-y-4 space-y-2 text-lg md:text-xl text-white">
                                <div className='space-y-2'>
                                    <p className={`md:text-2xl ${categoryColor}`}>Category:</p>
                                    <p className=" md:text-base text-sm">{category}</p>
                                </div>
                                <div className='space-y-2'>
                                    <p className={`md:text-2xl ${categoryColor}`}>Description:</p>
                                    <p className=" md:text-base text-sm">{description} </p>
                                </div>
                                <div className='space-y-2'>
                                    <p className={`md:text-2xl ${categoryColor}`}>Services:</p>
                                    <p className=" md:text-base text-sm"> {services}</p>
                                </div>
                                <div className='space-y-2'>
                                    <p className={`md:text-2xl ${categoryColor}`}>Team:</p>
                                    <p className=" md:text-base text-sm">{team}</p>
                                </div>
                                <div className='space-y-2'>
                                    <p className={`md:text-2xl ${categoryColor}`}>Country:</p>
                                    <p className=" md:text-base text-sm">{country}</p>
                                </div>
                            </div>
                        </div>
                        <img className='md:w-full w-3/4 mx-auto' src={descriptionImage} alt="" />

                    </div>
                </div>
            </section>
        </>
    )
}

export default Common
