import { Song } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const SongCard = ({ song }: { song: Song }) => {
  console.log("song", song)
  return (
    <div className=' py-3 px-3 sm:px-5 flex items-start select-none flex-col w-full h-full group/item hover:bg-bg-hover cursor-pointer'>
      <div className='flex flex-row flex-1 opacity-100 '>
        <div className='aspect-square w-[60px] h-[60px] relative shrink-0'>
          <Image src={song.image_url} fill alt="song image" className='flex-shrink-0 aspect-square h-full' />
          <button className='inline-flex appearance-none items-center justify-center select-none whitespace-nowrap outline-transparent outline-2 outline-offset-2 tran h-[60px] min-w-12 absolute w-[60px]  transition-opacity ease-linear duration-300 group-hover/item:opacity-100 top-0 left-1/2 -translate-x-1/2 translate-y-0 opacity-0 hover:opacity-30  hover:bg-imgLayer'>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
          </button>
        </div>
        <div className='flex flex-col '>
          <div className='ml-3 flex flex-col gap-0 flex-1 grow-0 justify-start'>
            <div className='max-w-[300px] flex flex-row gap-2 '>
              <p className='truncate whitespace-nowrap max-w-[600px] text-xs font-sans tracking-normal font-bold'><Link href="/song/id">{song.title}</Link></p>
              <div className='flex flex-row gap-2'>
                <span className='inline-flex items-center max-w-full font-thin outline-transparent outline-offset-2 outline-2 bg-tag-bg text-tag-color  px-2  text-xs min-w-5 rounded-md shadow-sm'>{song.model_name}</span>
              </div>
            </div>
            <div><p className='line-clamp-2 text-xs text-sm-text hover:underline'>Acoustic roman melodic</p></div>
          </div>
          <div className='flex flex-row items-center gap-0 w-full'>
            <div className='flex flex-row items-center gap-0'>
              <button className='inline-flex appearance-none items-center justify-center select-none relative outline-2 outline-offset-2 outline-transparent h-[2rem] min-w-[2rem] hover:bg-zinc-600  rounded-md text-gray-500 p-2 '>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"></path></svg>
              </button>
              <button className='inline-flex appearance-none items-center justify-center select-none relative outline-2 outline-offset-2 outline-transparent h-[2rem] min-w-[2rem] hover:bg-zinc-600  rounded-md  text-gray-500 p-2'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 56v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56zm40 200c0-13.255 10.745-24 24-24s24 10.745 24 24-10.745 24-24 24-24-10.745-24-24zm272 256c-20.183 0-29.485-39.293-33.931-57.795-5.206-21.666-10.589-44.07-25.393-58.902-32.469-32.524-49.503-73.967-89.117-113.111a11.98 11.98 0 0 1-3.558-8.521V59.901c0-6.541 5.243-11.878 11.783-11.998 15.831-.29 36.694-9.079 52.651-16.178C256.189 17.598 295.709.017 343.995 0h2.844c42.777 0 93.363.413 113.774 29.737 8.392 12.057 10.446 27.034 6.148 44.632 16.312 17.053 25.063 48.863 16.382 74.757 17.544 23.432 19.143 56.132 9.308 79.469l.11.11c11.893 11.949 19.523 31.259 19.439 49.197-.156 30.352-26.157 58.098-59.553 58.098H350.723C358.03 364.34 384 388.132 384 430.548 384 504 336 512 312 512z"></path></svg>
              </button>
            </div>
            <button className='inline-flex appearance-none items-center justify-center select-none relative outline-2 outline-offset-2 outline-transparent h-[2rem] min-w-[2rem] hover:bg-zinc-600 p-0 rounded-md p-2 '>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 0 0 8.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 0 1-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"></path></svg>              </button>
            <button className='inline-flex appearance-none items-center justify-center select-none relative outline-2 outline-offset-2 outline-transparent h-[2rem] min-w-[2rem] hover:bg-zinc-600  rounded-md p-2'>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg"><path d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg>
            </button>



          </div>
        </div>
      </div>
    </div>
  )
}

