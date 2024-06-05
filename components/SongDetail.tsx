"use client"
import Image from "next/image"
import Link from "next/link"
import SongInteraction from "./SongInteraction"
import { useAtomValue } from "jotai"
import { songDetail } from "@/lib/jotai"
import { useAudio } from "@/providers/AudioProvider"
import { usePathname } from "next/navigation"
import RightSidebar from "./RightSidebar"
export default function SongDetail() {
  const song = useAtomValue(songDetail)
  const { audio } = useAudio()
  const pathname = usePathname()
  if (!pathname.includes("create-music")) {
    return <RightSidebar />
  }
  if (!audio) return <div className="hidden lg:flex flex-shrink-0 flex-grow-0 basis-[300px] border-l border-l-zin-700 h-full overflow-y-auto custom-scrollbar"> <div className="pl-7 pt-7">
    Select a song to preview
  </div>
  </div>;
  return (

    <div className='hidden lg:flex flex-shrink-0 flex-grow-0 basis-[300px] border-l border-l-zin-700 h-full overflow-y-auto custom-scrollbar'>
      <div className='flex flex-col gap-2 overflow-x-hidden overflow-y-auto'>
        <div className='w-[300px] h-[300px] relative p-2 flex items-center justify-center'>
          <Image alt="song image" src={song?.image_url || ""} className='  rounded-s' width={284} height={284} />
        </div>
        <div className='flex justify-start items-center'><h2 className='leading-5 font-semibold truncate mt-4 px-4'>{song?.title}</h2></div>
        <p className='px-4 flex font-semibold items-center select-none'>
          <Image src="/icons/profile.svg" alt="profile" className='w-3 h-3 mr-1' width={12} height={12} />
          <Link href="/author" className='truncate outline outline-offset-2 outline-transparent text-[14px] font-semibold'>Author name</Link>
        </p>
        <div className='flex flex-wrap gap-0 max-w-full'>
          <p className='px-4 font-normal whitespace-pre-wrap'>{song?.gpt_description_prompt} </p>
        </div>
        <p className='flex px-4 mb-4 text-xs text-[rgba(255,255,255,0.7)] '>
          {song?.created_at}
        </p>
        <div className='flex px-4'>
          <SongInteraction />
        </div>
        {/*<p className='p-4 text-sm text-[rgba(255,255,255,0.7)] whitespace-pre-wrap break-all' > THis is promt A dreamy ball song about a literal banaa</p> */}
        <p className='p-4 text-sm whitespace-pre-wrap break-all font-normal '>
          {song?.prompt}     </p>
      </div>
    </div>
  )
}
