import { PlaylistsType, ShowcaseType, TrendingSongType } from "@/types";

export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/icons/discover.svg",
    route: "/discover",
    label: "Discover",
  },
  {
    imgURL: "/icons/microphone.svg",
    route: "/create-podcast",
    label: "Create Podcast",
  },
  {
    imgURL: "/icons/musical-note.svg",
    route: "/create-music",
    label: "Create Music",
  }
];

export const voiceDetails = [
  {
    id: 1,
    name: "alloy",
  },
  {
    id: 2,
    name: "echo",
  },
  {
    id: 3,
    name: "fable",
  },
  {
    id: 4,
    name: "onyx",
  },
  {
    id: 5,
    name: "nova",
  },
  {
    id: 6,
    name: "shimmer",
  },
];

export const podcastData = [
  {
    id: 1,
    title: "The Joe Rogan Experience",
    description: "A long form, in-depth conversation",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/3106b884-548d-4ba0-a179-785901f69806",
  },
  {
    id: 2,
    title: "The Futur",
    description: "This is how the news should sound",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/16fbf9bd-d800-42bc-ac95-d5a586447bf6",
  },
  {
    id: 3,
    title: "Waveform",
    description: "Join Michelle Obama in conversation",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/60f0c1d9-f2ac-4a96-9178-f01d78fa3733",
  },
  {
    id: 4,
    title: "The Tech Talks Daily Podcast",
    description: "This is how the news should sound",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/5ba7ed1b-88b4-4c32-8d71-270f1c502445",
  },
  {
    id: 5,
    title: "GaryVee Audio Experience",
    description: "A long form, in-depth conversation",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/ca7cb1a6-4919-4b2c-a73e-279a79ac6d23",
  },
  {
    id: 6,
    title: "Syntax ",
    description: "Join Michelle Obama in conversation",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/b8ea40c7-aafb-401a-9129-73c515a73ab5",
  },
  {
    id: 7,
    title: "IMPAULSIVE",
    description: "A long form, in-depth conversation",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/8a55d662-fe3f-4bcf-b78b-3b2f3d3def5c",
  },
  {
    id: 8,
    title: "Ted Tech",
    description: "This is how the news should sound",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/221ee4bd-435f-42c3-8e98-4a001e0d806e",
  },
];

export const showcase: ShowcaseType[] = [
  {
    id: 1,
    songName: "Golden SunShine",
    author: "Zack Brown",
    tags: "bossa nova, uk drill, electric piano",
    audio: "https://cdn1.suno.ai/7f774078-1672-4858-a37f-acad373c5a84.mp3",
    imageUrl: "https://cdn1.suno.ai/image_7f9a5f44-d766-4724-a510-20142dc59ab2.png"
  },
  {
    id: 2,
    songName: "Bossa Jazz A Cappella",
    author: "3Daozy",
    tags: "a cappella, Brazillian bossa nova and jazz",
    audio: "https://cdn1.suno.ai/423d3dea-7a36-4621-a3b2-ff92edc066d4.mp3",
    imageUrl: "https://cdn1.suno.ai/423d3dea-7a36-4621-a3b2-ff92edc066d4_496cbbf0.png"
  }, {
    id: 3,
    songName: "Stone",
    author: "Oliver McCann",
    tags: "indie-pop soulful dreamy psychedelic",
    audio: "https://cdn1.suno.ai/a5e2198a-f352-4abb-9a24-7f81b143ded3.mp3",
    imageUrl: "https://cdn1.suno.ai/image_93dab67e-956e-410a-8f7a-487f265a5f5f.png",
  },
  {
    id: 4,
    songName: "Beef Diplomat - Unwinding Time",
    author: "yolkhead",
    tags: "70s chill, emotional, soulful, adult",
    audio: "https://gemini.google.com/app/b7a1653bb5849846",
    imageUrl: "https://cdn1.suno.ai/e48c0ee8-24c8-459b-8d91-469dbd6fc3a5_8ff79bfc.png",
  },
  {
    id: 5,
    songName: "Ain't Got a Nickel Ain't Got a Dime",
    author: "Soul_Diego",
    tags: "up tempo Memphis soul 1970's",
    audio: "https://cdn1.suno.ai/0c162a23-716f-4d91-889d-644adfe3b3d1.mp3",
    imageUrl: "https://cdn1.suno.ai/0c162a23-716f-4d91-889d-644adfe3b3d1_a52b18ec.png",
  },
  {
    id: 6,
    songName: "Suno",
    author: "yolkhead",
    tags: "yolkhead, 3daisy, Brutus, appalachian death metal bluegrass",
    audio: "https://cdn1.suno.ai/b26f13fd-69d0-4b70-a575-2757d9dea505.mp3",
    imageUrl: "https://cdn1.suno.ai/image_f6ee6a96-25a8-45f5-bcec-d00f0e90c8db.png",
  }, {
    id: 7,
    songName: "Tokyo Nights",
    author: "Future Funk Squad",
    tags: "future funk, synthwave, retrowave, japanese citypop",
    audio: "https://cdn1.suno.ai/f275d9ac-5a62-4bbe-baf9-3fa10e0332f4.mp3",
    imageUrl: "https://cdn1.suno.ai/f275d9ac-5a62-4bbe-baf9-3fa10e0332f4_973cdc35.png",
  },
  {
    id: 8,
    songName: "Celtic Meditation",
    author: "Aisling",
    tags: "celtic harp, meditation, relaxation, irish",
    audio: "https://cdn1.suno.ai/19807561-1427-4c25-a229-a8c3063d0616.mp3",
    imageUrl: "https://cdn1.suno.ai/image_fd9931b6-154b-4863-9e02-c3c7b19f4d08.png",
  },
]

export const trendingData: TrendingSongType[] = [
  {
    id: 1,
    author: "taboovector.music",
    title: "Deep within the forest",
    image_url: "https://cdn1.suno.ai/4786e7ab-f861-424e-af15-0dc811d110ba_78d2b0ef.png",
    lyric: "",
    audio_url: "https://cdn1.suno.ai/4786e7ab-f861-424e-af15-0dc811d110ba.mp3",
    created_at: "June 10, 2024 at 5:08 AM",
    tags: "[darkly creeping seminal mathnoise anti-intricate-polytrapline] [post-anti-folk post-hyper-cellotrapiano][clean bagpipe]"
  },
  {
    id: 2,
    author: "MrWholesome",
    title: "The Sword of Vertias",
    image_url: "https://cdn1.suno.ai/f95621e6-105f-420e-948b-e7942e59c527_1fa049fb.png",
    lyric: "",
    audio_url: "https://cdn1.suno.ai/2f3f5c61-e090-4e09-882a-a786c3fb410d.mp3",
    created_at: "June 9, 2024 at 8:22 AM",
    tags: "BPM:80, Chair, Choral"
  },
  {
    id: 3,
    author: "Coda",
    title: "High Octane",
    image_url: "https://cdn1.suno.ai/4ad86fc1-fee9-4cfe-8b13-ac4355ec91f7_417982c7.png",
    lyric: "",
    audio_url: "",
    created_at: "June 10, 2024 5:12 PM",
    tags: "High Octane, Electronic, beat drops, bass reach, lead metal guitar"
  },
  {
    id: 4,
    author: "Nyxen ⭕_❌",
    title: "Breaking Point - 限界点",
    image_url: "https://cdn1.suno.ai/fe55b9e3-17b4-414d-8c3a-7e7dfb93b551_e0af2a7b.png",
    lyric: "",
    audio_url: "",
    created_at: "June 10, 2024 at 3:34 PM",
    tags: "female vocals, Egypt style, aggressive, crazy, dark alternative rock, dark, eerie, rap, k-pop"
  },
  {
    id: 5,
    author: "Brutus",
    title: "Romeo＆Juliet",
    image_url: "https://cdn1.suno.ai/9f789b79-5238-4ce6-ba91-c4c84fd48b8f_50b53b2b.png",
    lyric: "",
    audio_url: "",
    created_at: "June 10, 2024 at 11:03 AM",
    tags: "Artcore, shakuhachi, syncopated anime, sweet female vocals, emotional higher pitch voice"
  },
  {
    id: 6,
    author: "Brutus",
    title: "九歌-少司命",
    image_url: "https://cdn1.suno.ai/14fb3965-8ec5-4d1f-9273-cdab6487c737_311fde82.png",
    lyric: "",
    audio_url: "",
    created_at: "June 10, 2024 at 2:12 PM",
    tags: "chinese-traditional-folk, koto, pipa, Melancholy, shakuhachi, Clear voice"
  },
  {
    id: 7,
    author: "C2H5OH", // Replace with actual artist name
    title: "Stardust Sonata", // Replace with actual song title
    image_url: "https://cdn1.suno.ai/c5f3109e-1b34-4f8b-b7ec-1684bb952b2a_d62d4a90.png", // Replace with actual image URL
    lyric: "", // Can be replaced with actual lyrics if available
    audio_url: "", // Needs to be filled in later
    created_at: "June 10, 2024 at 9:12 PM", // Replace with actual creation date if available
    tags: "electronic, ambient, spacey, dreamlike, synth arpeggios, ethereal vocals" // Replace with actual tags
  },
  {
    id: 8,
    author: "Mr.Tree",
    title: "Dreamin´ of you",
    image_url: "https://cdn1.suno.ai/0b7f9587-cc89-47ec-a060-7e34c87447c5_e1196390.png",
    lyric: "",
    audio_url: "",
    created_at: "June 10, 2024 at 12:12 PM",
    tags: "german electronica, bass house, muted oriental chiptune, electric drums"
  },
  {
    id: 9,
    author: "Mr.Tree",
    title: "Maringtone [UPLOADED SAMPLE]",
    image_url: "https://cdn1.suno.ai/5d1d0eca-66fb-4c7f-8dce-3d5845ca09b4_e2add181.png",
    lyric: "",
    audio_url: "",
    created_at: "June 10, 2024 at 8:PM",
    tags: "no style" // Removed parentheses
  },
  {
    id: 10,
    author: "Taboovector.music",
    title: "single use",
    image_url: "https://cdn1.suno.ai/image_0f9b016b-4670-4c27-b6e2-4192aab28ae9.png",
    lyric: "",
    audio_url: "",
    created_at: "June 10, 2024 at 8:06 AM",
    tags: "G Minor, BPM: 105, Choir, Choral, Orchestra, Symphony, Heroic, Atmospheric, Epic, Classical speed metal" // Removed surrounding quotes and brackets
  }
]


export const playlistsData: PlaylistsType[] = [
  {
    id: 1,
    playlistName: "HITS ⭐",
    author: "roszr",
    image_url: "https://cdn1.suno.ai/02504260-eaf3-4e21-ad20-cdff56791186_d7efdf30.png",
  },
  {
    id: 2,
    playlistName: "Chibi the Cat (Feline & Chibii Best-Of)",
    author: "chibiitaii",
    image_url: "https://cdn1.suno.ai/ee467d00-5813-4a74-9792-c9ae4a09d344_1014e872.png",
  },
  {
    id: 3,
    playlistName: "Extreme Collection",
    author: "rusticacidhouse447",
    image_url: "https://cdn1.suno.ai/image_515279df-e21a-4527-9b04-e84319fcf75d.png",
  },
  {
    id: 4,
    playlistName: "Discord's Best",
    author: "felinemusic",
    image_url: "https://cdn1.suno.ai/bedab913-5beb-4152-8b17-8c9fefa7fc81_c8a4459a.png",
  },
  {
    id: 5,
    playlistName: "Loved songs",
    author: "chloehuang",
    image_url: "https://cdn1.suno.ai/image_e71fcf46-564f-4690-808e-cab5bcbf8a8d.png",
  },
  {
    id: 6,
    playlistName: "Oops",
    author: "Felinemusic",
    image_url: "https://cdn1.suno.ai/279241d6-addf-4e51-a8c2-870fb9ebabd2_7d6e5501.png",
  },
  {
    id: 7,
    playlistName: "Paw-some!",
    author: "tienak",
    image_url: "https://cdn1.suno.ai/8b6891c4-89f4-4c78-9236-873ac09e6d39_fec918dc.png",
  },
  {
    id: 8,
    playlistName: "Eth@12",
    author: "dramatic",
    image_url: "https://cdn1.suno.ai/image_24bd02be-5f06-45ac-ba93-a5c623d810c3.png",
  },
  {
    id: 9,
    playlistName: "BOuch",
    author: "Leo",
    image_url: "https://cdn1.suno.ai/image_942ba7f0-8070-4d02-a6e2-d371cc4385fe.png",
  },
];
export const likeSongsData: TrendingSongType[] = [
  {
    id: 1,
    author: "taboovector.music",
    title: "Deep within the forest",
    image_url: "https://cdn1.suno.ai/4786e7ab-f861-424e-af15-0dc811d110ba_78d2b0ef.png",
    lyric: "",
    audio_url: "https://cdn1.suno.ai/4786e7ab-f861-424e-af15-0dc811d110ba.mp3",
    created_at: "June 10, 2024 at 5:08 AM",
    tags: "[darkly creeping seminal mathnoise anti-intricate-polytrapline] [post-anti-folk post-hyper-cellotrapiano][clean bagpipe]"
  },
  {
    id: 2,
    author: "Nyxen ⭕_❌",
    title: "Breaking Point - 限界点",
    image_url: "https://cdn1.suno.ai/fe55b9e3-17b4-414d-8c3a-7e7dfb93b551_e0af2a7b.png",
    lyric: "",
    audio_url: "",
    created_at: "June 10, 2024 at 6:01 AM",
    tags: "female vocals, Egypt style, aggressive, crazy, dark alternative rock, dark, eerie, rap, k-pop"
  },

  {
    id: 3,
    author: "Mr.Tree",
    title: "Dreamin´ of you",
    image_url: "https://cdn1.suno.ai/0b7f9587-cc89-47ec-a060-7e34c87447c5_e1196390.png",
    lyric: "",
    audio_url: "",
    created_at: "June 10, 2024 at 10:05 PM",
    tags: "german electronica, bass house, muted oriental chiptune, electric drums"
  },

  {
    id: 4,
    author: "Taboovector.music",
    title: "single use",
    image_url: "https://cdn1.suno.ai/image_0f9b016b-4670-4c27-b6e2-4192aab28ae9.png",
    lyric: "",
    audio_url: "",
    created_at: "June 10, 2024 at 5:02",
    tags: "G Minor, BPM: 105, Choir, Choral, Orchestra, Symphony, Heroic, Atmospheric, Epic, Classical speed metal" // Removed surrounding quotes and brackets
  }
]

