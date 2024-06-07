import LeftSidebar from "@/components/LeftSidebar";
import MobileNav from "@/components/MobileNav";
import Image from "next/image";
import { Toaster } from "@/components/ui/toaster"
import RightSidebar from "@/components/RightSidebar";
import SongPlayer from "@/components/SongPlayer";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col h-full">
      <Toaster />
      <div className="relative flex flex-row flex-1 bg-main-color w-full overflow-y-auto h-full">
        <LeftSidebar />
        {/*main*/}
        <div className="relative flex flex-col flex-1 overflow-y-auto ">
          {/* navbar */}
          <div className="flex md:hidden h-16 px-4  lg:px-10 py-6 items-center justify-between ">
            <Link href="/">
              <Image
                src="/icons/logo.svg"
                width={30}
                height={30}
                alt="menu icon"
              />
            </Link>
            <MobileNav />
          </div>

          {children}
        </div>
        <RightSidebar />


      </div>
      {/* Button  to create music */}
      <SongPlayer />
    </div>
  );
}
