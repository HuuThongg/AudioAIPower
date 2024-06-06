"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { formatTime } from "@/lib/formatTime";
import { cn } from "@/lib/utils";

import { Progress } from "./ui/progress";
import { currentAudioAtom, playlistAtom } from "@/lib/jotai";
import { useAtom, useAtomValue } from "jotai";
const SongPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isRepeat, setIsRepeat] = useState(false)
  const [volume, setVolume] = useState(0.5);
  const [audio, setAudio] = useAtom(currentAudioAtom)
  const playListData = useAtomValue(playlistAtom)
  const getNextSong = () => {
    const currentIndex = playListData.findIndex(song => song.audio_url === audio?.audioUrl)
    const nextIndex = (currentIndex + 1) % playListData.length
    const nextSong = playListData[nextIndex]
    setAudio({
      audioUrl: nextSong.audio_url,
      title: nextSong.title,
      author: nextSong.tags,
      imageUrl: nextSong.image_url,
      songId: nextSong.id
    })
  }
  const getPrevSong = () => {
    const currentIndex = playListData.findIndex(song => song.audio_url === audio?.audioUrl)
    const nextIndex = (currentIndex - 1) % playListData.length
    const nextSong = playListData[nextIndex]
    setAudio({
      audioUrl: nextSong.audio_url,
      title: nextSong.title,
      author: nextSong.tags,
      imageUrl: nextSong.image_url,
      songId: nextSong.id
    })
  }
  const togglePlayPause = () => {
    if (audioRef.current?.paused) {
      audioRef.current?.play();
      setIsPlaying(true);
    } else {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted((prev) => !prev);
    }
  };

  const forward = () => {
    // getNextSong()
    if (
      audioRef.current &&
      audioRef.current.currentTime &&
      audioRef.current.duration &&
      audioRef.current.currentTime + 5 < audioRef.current.duration
    ) {
      audioRef.current.currentTime += 5;
    }
  };

  const rewind = () => {
    if (audioRef.current && audioRef.current.currentTime - 5 > 0) {
      audioRef.current.currentTime -= 5;
    } else if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    const updateCurrentTime = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    };

    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener("timeupdate", updateCurrentTime);

      return () => {
        audioElement.removeEventListener("timeupdate", updateCurrentTime);
      };
    }
  }, []);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audio?.audioUrl) {
      if (audioElement) {
        audioElement.play().then(() => {
          setIsPlaying(true);
        });
      }
    } else {
      audioElement?.pause();
      setIsPlaying(true);
    }
  }, [audio]);
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };


  const handleAudioEnded = () => {
    if (isRepeat && audioRef.current) {
      setCurrentTime(0)
      audioRef.current.currentTime = 0
      if (audioRef.current?.paused) {
        audioRef.current?.play();
        setIsPlaying(true);
      }
    } else {

      setIsPlaying(false);
    }
  };


  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("handleSliderChange")
    const value = parseFloat(event.target.value);
    setCurrentTime(value);
    if (audioRef.current) {
      audioRef.current.currentTime = value;
    }
  };

  const handleSliderInput = (event: React.ChangeEvent<HTMLInputElement>) => {

    console.log("handleSliderInput")
    const value = parseFloat(event.target.value);
    setCurrentTime(value);
  };
  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const volume = parseFloat(event.target.value);
    setVolume(volume)
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  };
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume; // Set the initial volume when the component mounts
    }
  }, [volume]);

  let volumeIconSrc = "/icons/smallVolume.svg"; // default icon
  if (isMuted || (!isMuted && volume === 0)) {
    volumeIconSrc = "/icons/muteVolume.svg";
  } else if (volume > 0.5) {
    volumeIconSrc = "/icons/largeVolume.svg";
  }

  return (

    <div className='flex items-center z-50 border-t border-t-[#222222] bg-bg text-white-1'>
      <div className='flex flex-col items-stretch gap-2 px-4 py-2 w-full h-full lg:flex-row justify-between'>
        {audio ? (
          <div className='flex flex-row flex-1 md:grow-0 items-center justify-stretch lg:justify-between w-full gap-2'>
            <Image src={audio.imageUrl} alt="song image" className='p-2 pr-1 block max-w-full   aspect-square' width={56} height={56} />
            <div className='flex flex-col gap-1 flex-1 min-w-[150px] max-w-[150px]'>
              <Link href={`/song/${audio?.songId}`} className='outline outline-2 outline-transparent  text-xs font-bold w-full'>{audio?.title}</Link>
              <p className='text-sm-text text-xs w-full line-clamp-1'>{audio?.author}</p>
            </div>
            <div className='flex items-center flex-shrink basis-0 grow-0 ml-auto'>
              <div className='mt-4 flex items-center justify-center gap-0'>
                <button className='inline-flex appearance-none items-center justify-center select-none relative outline-2 outline-offset-2 outline-transparent h-[2rem] min-w-[2rem] hover:bg-zinc-600  rounded-md text-gray-500 p-2 '>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"></path></svg>
                </button><button className='inline-flex appearance-none items-center justify-center select-none relative outline-2 outline-offset-2 outline-transparent h-[2rem] min-w-[2rem] hover:bg-zinc-600  rounded-md  text-gray-500 p-2'>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 56v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56zm40 200c0-13.255 10.745-24 24-24s24 10.745 24 24-10.745 24-24 24-24-10.745-24-24zm272 256c-20.183 0-29.485-39.293-33.931-57.795-5.206-21.666-10.589-44.07-25.393-58.902-32.469-32.524-49.503-73.967-89.117-113.111a11.98 11.98 0 0 1-3.558-8.521V59.901c0-6.541 5.243-11.878 11.783-11.998 15.831-.29 36.694-9.079 52.651-16.178C256.189 17.598 295.709.017 343.995 0h2.844c42.777 0 93.363.413 113.774 29.737 8.392 12.057 10.446 27.034 6.148 44.632 16.312 17.053 25.063 48.863 16.382 74.757 17.544 23.432 19.143 56.132 9.308 79.469l.11.11c11.893 11.949 19.523 31.259 19.439 49.197-.156 30.352-26.157 58.098-59.553 58.098H350.723C358.03 364.34 384 388.132 384 430.548 384 504 336 512 312 512z"></path></svg>
                </button>
                <button className='inline-flex appearance-none items-center justify-center select-none relative outline-2 outline-offset-2 outline-transparent h-[2rem] min-w-[2rem] hover:bg-zinc-600  rounded-md p-2 '>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 0 0 8.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 0 1-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"></path></svg>              </button>
                <button className='inline-flex appearance-none items-center justify-center select-none relative outline-2 outline-offset-2 outline-transparent h-[2rem] min-w-[2rem] hover:bg-zinc-600  rounded-md p-2'>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg"><path d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg>
                </button>

              </div>
            </div>
          </div>
        ) : null}
        {!audio && (

          <div className={cn("flex flex-row shrink-0 grow-0 basis-[240px]")}></div>
        )}
        <div className='flex items-center px-3  '>
          <audio
            ref={audioRef}
            src={audio?.audioUrl}
            className="hidden"
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={handleAudioEnded}
          />
          {/* time progress. repeat control */}
          <div className='max-w-full w-full flex items-center md:max-w-[550px]'>
            {/* backward pause/play next */}
            <div className='flex  gap-x-1'>
              <button className='inline-flex appearance-none items-center justify-center select-none relative outline-2 outline-offset-2 outline-transparent h-[2rem] min-w-[2rem] bg-zinc-800 hover:bg-zinc-600 p-2 rounded-full' onClick={rewind}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"></path></svg>
              </button>
              <button className='inline-flex appearance-none items-center justify-center select-none relative outline-2 outline-offset-2 outline-transparent h-[2rem] min-w-[2rem] bg-zinc-800 hover:bg-zinc-600 p-2 rounded-full'>
                <Image
                  src={isPlaying ? "/icons/Pause.svg" : "/icons/Play.svg"}
                  fill
                  alt="play"
                  onClick={togglePlayPause}
                />
              </button>
              <button className='inline-flex appearance-none items-center justify-center select-none relative outline-2 outline-offset-2 outline-transparent h-[2rem] min-w-[2rem] bg-zinc-800 hover:bg-zinc-600 p-2 rounded-full' onClick={forward}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"></path></svg>
              </button>
            </div>

            <p className='text-gray-300 ml-2 flex  text-xs'>{formatTime(currentTime)}</p>
            {/*progres*/}
            <div className="flex px-3 md:px-4 flex-1 w-full  md:max-w-[550px]">

              <Progress className="w-full min-w-[50px] md:min-w-[150px]" max={duration} value={(currentTime / duration) * 100} onInput={handleSliderInput} onClick={() => console.log("onclick")} onChange={handleSliderChange} >

              </Progress>
            </div>
            <p className='text-gray-300 max-w-[40px] mr-2 flex flex-1 text-xs'>{formatTime(duration)}</p>
            <div className="flex gap-x-1">

              <button className='inline-flex appearance-none items-center justify-center select-none relative outline-2 outline-offset-2 outline-transparent h-[2rem] min-w-[2rem] bg-zinc-800 hover:bg-zinc-600 p-2 rounded-full'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M471.1 96C405 96 353.3 137.3 320 174.6 286.7 137.3 235 96 168.9 96 75.8 96 0 167.8 0 256s75.8 160 168.9 160c66.1 0 117.8-41.3 151.1-78.6 33.3 37.3 85 78.6 151.1 78.6 93.1 0 168.9-71.8 168.9-160S564.2 96 471.1 96zM168.9 320c-40.2 0-72.9-28.7-72.9-64s32.7-64 72.9-64c38.2 0 73.4 36.1 94 64-20.4 27.6-55.9 64-94 64zm302.2 0c-38.2 0-73.4-36.1-94-64 20.4-27.6 55.9-64 94-64 40.2 0 72.9 28.7 72.9 64s-32.7 64-72.9 64z"></path></svg>
              </button>
              <button className={cn('inline-flex appearance-none items-center justify-center select-none relative outline-2 outline-offset-2 outline-transparent h-[2rem] min-w-[2rem] bg-zinc-800 hover:bg-zinc-600 p-2 rounded-full', {
                'text-yellow-400': isRepeat
              })} onClick={() => setIsRepeat(!isRepeat)} >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z"></path></svg>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex shrink-0 grow-0 md:basis-[140px] justify-end gap-2 items-center">
          <button onClick={toggleMute} className="text-white-1 fill-white-1 bg-red-400">
            <Image className="text-white-1 fill-white-1 fill-red-800 white-svg stroke-sky-50 bg-blue-400" src={volumeIconSrc} alt="Volume Icon" width={16} height={16} />
          </button>

          <input
            className=" max-w-[70px] mr-auto volume-slider"
            type="range"
            min="0"
            max="1"
            step="0.1"
            defaultValue={volume} // Set default volume to maximum
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </div >

  )
}

export default SongPlayer
