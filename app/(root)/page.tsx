"use client";
import PodcastCard from '@/components/PodcastCard'
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import LoaderSpinner from '@/components/LoaderSpinner';
import { Showcase } from '@/components/Showcase';
import { SongsTrending } from '@/components/SongsTrending';
import { LikeSongs } from '@/components/LikeSongs';
import { PlayLists } from '@/components/PlayLists';

const Home = () => {
  const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);
  console.log("trendingPodcasts:", trendingPodcasts)
  if (!trendingPodcasts) return <LoaderSpinner />
  return (
    <div className="mt-9 bg-main-bg flex flex-col gap-9 overflow-x-hidden overflow-y-auto custom-scrollbar  px-5 xl:px-6">
      <section className='flex flex-col gap-5'>
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>
        <div className="grid gap-0 grid-rows-[min-content] grid-cols-[repeat(auto-fill,_minmax(190px,_1fr))]">
          {trendingPodcasts?.map(({ _id, podcastTitle, podcastDescription, imageUrl }) => (
            <PodcastCard
              key={_id}
              imgUrl={imageUrl as string}
              title={podcastTitle}
              description={podcastDescription}
              podcastId={_id}
            />
          ))}
        </div>
      </section>
      <Showcase />
      <SongsTrending />
      <PlayLists />
      <LikeSongs />
    </div>
  )
}

export default Home
