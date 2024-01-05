
'use client'

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Logos from './logos';




const NewsComponent = () => {
  const newsData = [
    { id: 1, title: 'Tech Innovations Reshape African Economies', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 2, title: 'Matic Entreprises Unveils Revolutionary Akongo Tablet', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, title: 'Continuum All-In-One PC Receives Rave Reviews', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 4, title: 'Enigma X Laptop: A Game-Changer for Business Professionals', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 5, title: 'Matic Entreprises Expands Operations to New Markets', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 6, title: 'Akongo Tablet Receives Industry Recognition for Design Excellence', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 6, title: 'Akongo Tablet Receives Industry Recognition for Design Excellence', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 6, title: 'Akongo Tablet Receives Industry Recognition for Design Excellence', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  ];
  

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // centerPadding: 10,
  };

  return (
    <div className='mx-2 '>
         <Slider {...sliderSettings}>
          {newsData.map((news) => (
            <div key={news.id} className="flex size-1/2 bg-slate-300 hover:bg-slate-400 p-10 shadow-lg  rounded  "> 
              
              <Image
                            className="relative mt-15 pt-10 dark:drop-shadow-[0_0_0.3rem_#ffffff70] 
                            dark:invert h-full w-auto"
                            src="/picsfloder/22.png"
                            alt="Next.js Logo"
                            width={400}
                            height={400}
                            priority
                          />
              <h3 className="text-lg font-bold  m-15">{news.title}</h3>
              <p>{news.content}</p>
            </div>
      ))}
    </Slider>
    <Logos />
    </div>
   
  );
};

export default NewsComponent;

{/* <div className='flex'>
            <div className='w-2/5 h-40 bg-black  m-5 p-10'>
            Hear from  Matic.
            </div>
            <div className='w-2/5 h-40 bg-black  m-5 p-10'>
            Hear from  Matic.
            </div>
            <div className='w-1/2 h-40 bg-black  m-5 p-10'>
            Hear from  Matic.
            </div>
         </div> */}