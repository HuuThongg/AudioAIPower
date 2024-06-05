"use client"
import CreateSong from '@/components/CreateSong'
import MobileNav from '@/components/MobileNav'
import { SongCard } from '@/components/SongCard'
import SongDetail from '@/components/SongDetail'
import SongInteraction from '@/components/SongInteraction'
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
  const [songs, setSongs] = React.useState<Song[]>([]); // State to store songs
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
      <div className={cn("flex flex-1  flex-col overflow-y-auto bg-[black] text-white-1")}>

        <div className='flex flex-col md:flex-row w-full h-full flex-1  overflow-y-auto'>

          {/* Left */}
          <CreateSong />


          {/* MIddle */}
          <div className='flex flex-1 flex-col lg:min-w-[300px] overflow-y-auto gap-0 border-r-0 lg:border-r border-r-zinc-700 h-full pt-5 custom-scrollbar'>
            {songs.map((song) => (
              <SongCard key={song.id} song={song} />
            ))}
          </div>
          {/* Right */}
          <SongDetail />
        </div>
        {/*Botom */}
      </div>
    </>
  )
}

