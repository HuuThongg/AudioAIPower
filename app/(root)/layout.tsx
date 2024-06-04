import LeftSidebar from "@/components/LeftSidebar";
import MobileNav from "@/components/MobileNav";
import Image from "next/image";
import { Toaster } from "@/components/ui/toaster"
import PodcastPlayer from "@/components/PodcastPlayer";
import RightSidebar from "@/components/RightSidebar";
import SongPlayer from "@/components/SongPlayer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col h-full">
      <Toaster />
      <div className="relative flex flex-col flex-1 bg-black-3 w-full overflow-y-auto h-full">
        {/*main*/}
        <div className="relative flex flex-col flex-1 overflow-y-auto ">

          {children}
        </div>
        {/*<RightSidebar/> */}


      </div>
      {/* Button  to create music */}
      <SongPlayer />
      <PodcastPlayer />
    </div>
  );
}
