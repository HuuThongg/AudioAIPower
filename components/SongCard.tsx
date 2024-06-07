import { Song } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SongInteraction from './SongInteraction'
import { useSetAtom } from 'jotai'
import { currentAudioAtom, songDetail } from '@/lib/jotai'

export const SongCard = ({ song }: { song: Song }) => {
  const setCurrentAudio = useSetAtom(currentAudioAtom)
  const setSongDetail = useSetAtom(songDetail)
  const handlePlay = () => {

    setCurrentAudio({
      title: song.title,
      audioUrl: song.audio_url,
      imageUrl: song.image_url,
      author: song.tags,
      songId: song.id,
    });

    setSongDetail(song)
  };
  return (
    <div className=' py-3 px-3 sm:px-5 flex items-start select-none flex-col w-full h-full group/item hover:bg-bg-hover cursor-pointer'
      onClick={handlePlay}
    >
      <div className='flex flex-row flex-1 opacity-100 w-full '>
        <div className='aspect-square w-[60px] h-[60px] relative shrink-0'>
          <Image src={song.image_url} width={60}
            height={60} alt="song image" className='flex-shrink-0 aspect-square h-full' />
          <button className='inline-flex appearance-none items-center justify-center select-none whitespace-nowrap outline-transparent outline-2 outline-offset-2 tran h-[60px] min-w-12 absolute w-[60px]  transition-opacity ease-linear duration-300 group-hover/item:opacity-100 top-0 left-1/2 -translate-x-1/2 translate-y-0 opacity-0 hover:opacity-30  hover:bg-imgLayer'>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
          </button>
        </div>
        <div className='flex flex-col xl:flex-row flex-1 justify-between'>
          <div className='ml-3 flex flex-col gap-0 flex-1 grow-0 min-w-fit justify-start'>
            <div className='max-w-[300px] flex flex-row gap-2 '>
              <p className='truncate whitespace-nowrap max-w-[600px] text-xs font-sans tracking-normal font-bold'><Link href="/song/id">{song.title}</Link></p>
              <div className='flex flex-row gap-2'>
                <span className='inline-flex items-center max-w-full font-thin outline-transparent outline-offset-2 outline-2 bg-tag-bg text-tag-color  px-2  text-xs min-w-5 rounded-md shadow-sm'>{song.model_name}</span>
              </div>
            </div>
            <div><p className='line-clamp-2 text-xs text-sm-text hover:underline'>Acoustic roman melodic</p></div>
          </div>
          <SongInteraction />
        </div>
      </div>
    </div>
  )
}

