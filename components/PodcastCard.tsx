import { PodcastCardProps } from '@/types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const PodcastCard = ({
  imgUrl, title, description, podcastId
}: PodcastCardProps) => {
  const router = useRouter()

  const handleViews = () => {
    // increase views

    router.push(`/podcasts/${podcastId}`, {
      scroll: true
    })
  }

  return (
    <div className="cursor-pointer p-3 rounded-md hover:bg-zinc-800   shadow-md" onClick={handleViews}>
      <figure className="flex flex-col gap-3 w-full group">
        <div className='relative overflow-hidden'>
          <Image
            src={imgUrl}
            width={174}
            height={174}
            alt={title}
            className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"
          />
          <div className='w-[48px] h-[48px] bg-green-600 absolute right-2 bottom-2 rounded-full flex justify-center items-center hover:scale-105 transition-all cursor-pointer ease-linear duration-[150] select-none translate-y-[130%] group-hover:translate-y-0'>
            <Image src="/icons/pause1.svg" width={20} height={20} alt="play" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-16 truncate font-bold text-white-1 capitalize tracking-wide">{title}</h1>
          <h2 className="text-sm truncate font-normal capitalize text-white-4">{description}</h2>
        </div>
      </figure>
    </div>
  )
}

export default PodcastCard
