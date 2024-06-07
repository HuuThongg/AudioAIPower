'use client';

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { UserButton, SignedIn, SignedOut, useClerk, useUser } from '@clerk/nextjs';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { Button } from './ui/button';

const LeftSidebar = () => {
  const { user } = useUser();
  const pathname = usePathname();
  const router = useRouter();
  const { signOut } = useClerk();

  return (
    <section className="text-white-1 hidden md:flex flex-col justify-between md:w-[180px] bg-zinc-900">
      <nav className="flex flex-col gap-2">
        <Link href="/" className="flex cursor-pointer items-center gap-1 pb-10 px-4 pt-5 justify-between max-lg:justify-center">
          <Image src="/icons/logo.svg" alt="logo" width={30} height={35.5} />
          <h1 className="text-24 font-extrabold text-white max-lg:hidden">Podcastr</h1>
        </Link>

        {sidebarLinks.map(({ route, label, imgURL }) => {
          const isActive = pathname === route || pathname.startsWith(`${route}/`);

          return <Link href={route} key={label} className={cn("flex gap-3  items-center py-4 pl-4 max-lg:px-4 justify-start lg:justify-start ", {
            'bg-nav-focus border-r-4 border-orange-1  font-semibold': isActive
          })}>
            <Image src={imgURL} alt={label} width={24} height={24} className='' priority={false} />
            <p>{label}</p>
          </Link>
        })}
      </nav>
      <div className='px-4'>


        <SignedIn>
          <Link href={`/profile/${user?.id}`} className="flex gap-3 pb-5">
            <UserButton />
            <div className="flex w-full items-center justify-between">
              <h1 className="text-16 truncate font-semibold text-white-1">{user?.firstName} {user?.lastName}</h1>
            </div>
          </Link>
        </SignedIn>
        <SignedOut>
          <div className="flex-center w-full pb-5 max-lg:px-4 ">
            <Button asChild className="text-16 w-full bg-orange-1 font-extrabold">
              <Link href="/sign-in">Sign in</Link>
            </Button>
          </div>
        </SignedOut>
        <SignedIn>
          <div className="flex-center w-full pb-5 max-lg:px-4">
            <Button className="text-16 w-full bg-orange-1 font-extrabold" onClick={() => signOut(() => router.push('/'))}>
              Log Out
            </Button>
          </div>
        </SignedIn>
      </div>
    </section>
  )
}

export default LeftSidebar
