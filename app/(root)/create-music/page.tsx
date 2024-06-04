"use client"
import MobileNav from '@/components/MobileNav'
import { SongCard } from '@/components/SongCard'
import { getMySongs } from '@/lib/SunoAction'
import { cn } from '@/lib/utils'
import { Song } from '@/types'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const baseUrl = 'http://localhost:3000'; // Assuming backend API is running on this port
async function getSongsData() {
  try {
    const url = `${baseUrl}/api/get`;
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json"
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching songs:', error);
    return null; // Handle error gracefully, e.g., return an empty array
  }
}
export default function CreateMusic() {
  const [songs, setSongs] = React.useState<Song[]>(null); // State to store songs
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getSongsData();
      setSongs(data);
    };

    fetchData();
  }, []); // Re-run useEffect on songID change

  if (songs === null) {
    return <p>Loading songs...</p>;
  }
  return (
    <>

      {/* navbar */}
      <div className="flex h-16 items-center justify-between">
        <Image
          src="/icons/logo.svg"
          width={30}
          height={30}
          alt="menu icon"
        />
        <MobileNav />
      </div>

      <div className={cn("flex flex-1  flex-col overflow-y-auto bg-[black] text-white-1")}>

        <div className='flex flex-col md:flex-row w-full h-full flex-1  overflow-y-auto'>

          {/* Left */}
          <div className='hidden md:flex flex-col border-r border-r-zinc-700 min-w-[300px] overflow-y-auto h-full '>Left
          </div>


          {/* MIddle */}
          <div className='flex flex-1 flex-col lg:min-w-[300px] overflow-y-auto gap-0 border-r-0 lg:border-r border-r-zinc-700 h-full pt-5'>
            {songs.map((song) => (
              <SongCard key={song.id} song={song} />
            ))}
          </div>
          {/* Right */}
          <div className='hidden lg:flex flex-shrink-0 flex-grow-0 basis-[300px] border-l border-l-zin-700 h-full overflow-y-auto'>right
            <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem g minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa etest aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
          </div>

        </div>
        {/*Botom */}

      </div>


    </>
  )
}

