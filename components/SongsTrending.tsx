import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { TrendingSongType } from '@/types'
import { trendingData } from '@/constants'

export const SongsTrending = () => {
  const [isShownMore, setIsShownMore] = useState(false)
  const [showcaseSelected, setShowcaseSelected] = useState<TrendingSongType[]>(trendingData.slice(0, 4))
  function showMore() {
    setIsShownMore(true);
    setShowcaseSelected((prev) => [...prev, ...trendingData.slice(4, -1)])
  }
  function showLess() {
    setIsShownMore(false);
    setShowcaseSelected(trendingData.slice(0, 4))
  }
  return (
    <section className='flex w-full flex-col gap-5 mb-10'>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col'>

          <h2 className='text-white-1 text-[20px] font-bold'>Trendings</h2>
          <p className='text-zinc-600 text-[18px] font-bold pt-2'>Songs</p>
        </div>
        {isShownMore ? (

          <Button variant="showmore" onClick={showLess}>Show less -</Button>
        ) : (

          <Button variant="showmore" onClick={showMore}>Show more +</Button>
        )}
      </div>
      <div className='flex flex-col gap-0 flex-1 overflow-y-auto'>
        <div className='grid gap-6 grid-cols-1 xl:grid-cols-2 mt-4'>
          {showcaseSelected.map((song) => (
            <div className='p-2 flex flex-col bg-cardd hover:bg-card-hover justify-between rounded-md overflow-hidden opacity-100 transition-opacity cursor-pointer text-white-1' key={song.id}>
              <div className='flex flex-col'>
                <div className='flex flex-row '>
                  <div className='relative mr-4 w-[70px] h-[70px] sm:w-[90px] sm:h-[90[x]] md:h-[140px] md:w-[140px]'>
                    <Image src={song.image_url} alt={song.title} fill sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw' className='absolute inset-0 w-full h-full rounded-md  border-2 border-orange-1' />
                    <button className='inline-flex appearance-none  justify-center items-center rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-0 transition-opacity duration-300 delay-0 ease-linear w-[70px] h-[70px] text-white-1 cursor-pointer opacity-10'>
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
                    </button>
                  </div>
                  <div className='mt-2 mr-4 flex flex-col flex-1 max-w-[67%]'>
                    <p className='text-base font-bold line-clamp-1'>
                      <Link href="/song/12" className='cursor-pointer outline-none '>{song.title}</Link>
                    </p>
                    <div className='flex items-center font-medium text-sm text-sm-text'>
                      <Image src="/icons/profile.svg" className='mr-1' alt="profile" width={12} height={12} />
                      <p>{song.author} </p>
                    </div>
                    <div className='flex flex-wrap max-w-full gap-0 text-sm text-sm-text line-clamp-2'>
                      <p>{song.tags}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-row px-2 justify-between mt-1'>
                {Array.from({ length: 4 }).map((_, index) => (
                  <Button className='p-4 bg-transparent hover:bg-tag-bg' key={index}>
                    <Image
                      src={true ? "/icons/Pause.svg" : "/icons/Play.svg"}
                      width={15}
                      height={15}
                      alt="play"
                      className='mr-2'
                    />
                    <p className='text-white-1 font-semibold'>52160</p>
                  </Button>
                ))}
              </div>
            </div>)
          )}
        </div>
      </div>
    </section>
  )
}


