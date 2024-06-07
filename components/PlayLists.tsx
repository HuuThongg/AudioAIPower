import React, { useState } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

export const PlayLists = () => {

  return (
    <section className='flex w-full flex-col gap-5 mb-10'>
      <div className='flex flex-row justify-between'>

        <h2 className='text-white-1 text-[20px] font-bold'>Playlists</h2>
        <Button variant="showmore">Show more +</Button>
      </div>
      <div className='flex flex-col gap-0 flex-1 overflow-y-auto'>
        <div className='grid gap-6 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 mt-4'>
          {Array.from({ length: 5 }).map((_, index) => (
            <PlaylistCard key={index} />
          )
          )}
        </div>
      </div>
    </section >
  )
}

const PlaylistCard = () => {
  const imageUrl = "https://cdn1.suno.ai/image_0ef3e9ae-25ad-4bb1-9d52-7d685156298e.png"
  const [isHovered, setIsHovered] = useState(false);

  const defaultBackgroundImageStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${imageUrl})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  const hoveredBackgroundImageStyle = {
    backgroundImage: `radial-gradient(circle,rgba(0, 0, 0, 0.4) 0%, rgba(0,0,0,0) 75%), url(${imageUrl})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };
  return (

    <div className="p-4 flex items-center justify-center text-white-1 shadow-gray-1 h-[110px] overflow-hidden cursor-pointer bg-center bg-no-repeat bg-cover rounded-md" style={isHovered ? hoveredBackgroundImageStyle : defaultBackgroundImageStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className='flex flex-col items-center gap-1'>
        <p className='text-[22px] font-bold'>SSC3 - Contenders</p>
        <div className='flex flex-row gap-2 text-white-1'
        >
          <Image src="/icons/profile.svg" alt="playlist image" width={16} height={16} />
          <p className='text-white-1 text-base'>NameStaken</p>
        </div>
      </div>

    </div>
  )
}

{/*
  <PlaylistCard
        defaultImageUrl="https://cdn1.suno.ai/image_0ef3e9ae-25ad-4bb1-9d52-7d685156298e.png"
        hoverImageUrl="https://example.com/hover-image.png"
      />
       Add more PlaylistCard components with different URLs */}
