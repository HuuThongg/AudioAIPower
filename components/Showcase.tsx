"use client"
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'

export const Showcase = () => {
  return (
    <section className='flex w-full flex-col gap-5 mb-10'>
      <div className='flex flex-row justify-between'>

        <h2 className='text-white-1 text-[20px] font-bold'>Ano Showcase</h2>
        <Button variant="showmore">Show more +</Button>
      </div>
      <div className='flex flex-col gap-0 flex-1 overflow-y-auto'>
        <div className='grid gap-6 grid-cols-1 xl:grid-cols-2 mt-4'>
          {Array.from({ length: 5 }).map((_, index) => (
            <div className='p-2 flex flex-col bg-cardd hover:bg-card-hover justify-between rounded-md overflow-hidden opacity-100 transition-opacity cursor-pointer text-white-1' key={index}>
              <div className='flex flex-col'>
                <div className='flex flex-row '>
                  <div className='relative mr-4 h-[70px] w-[70px]'>
                    <Image src="https://cdn1.suno.ai/c71ec50e-328b-4227-a2de-fab0bfb5cbc2_ee068b57.png" alt="song image" width={70} height={70} className='absolute inset-0 rounded-md  border-2 border-orange-1' />
                    <button className='inline-flex appearance-none  justify-center items-center rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-0 transition-opacity duration-300 delay-0 ease-linear w-[70px] h-[70px] text-white-1 cursor-pointer opacity-10'>
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
                    </button>
                  </div>
                  <div className='mt-2 mr-4 flex flex-col flex-1 max-w-[67%]'>
                    <p className='text-base font-bold line-clamp-1'>
                      <Link href="/song/12" className='cursor-pointer outline-none '>Ano</Link>
                    </p>
                    <div className='flex items-center font-medium text-sm text-sm-text'>
                      <Image src="/icons/profile.svg" className='mr-1' alt="profile" width={12} height={12} />
                      <p>Yolkhead </p>
                    </div>
                    <div className='flex flex-wrap max-w-full gap-0 text-sm text-sm-text'>
                      <p>Lorem ipsum .</p>
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

