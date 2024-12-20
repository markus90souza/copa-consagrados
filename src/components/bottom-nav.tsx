'use client'

import React from 'react'

import Link from 'next/link'

import { useNavigation } from '@/hooks/use-navigation'
import { useScroll } from '@/hooks/use-scroll'
import { Icon } from '@iconify/react'

const BottomNav = () => {
  const scrollDirection = useScroll() // Use the custom hook
  const navClass = scrollDirection === 'up' ? '' : 'opacity-25 duration-500'

  const { isHomeActive, isGruposActive, isClassificacaoActive, isTimesActive } =
    useNavigation()

  return (
    <div
      className={`fixed bottom-0 w-full py-4 z-10 bg-zinc-100 dark:bg-zinc-950 border-t dark:border-zinc-800 border-zinc-200 shadow-lg sm:hidden ${navClass}`}
    >
      <div className="flex flex-row justify-around items-center bg-transparent w-full">
        <Link href="/" className="flex items-center relative">
          {isHomeActive ? (
            <Icon icon="mingcute:home-5-fill" width="32" height="32" />
          ) : (
            <Icon icon="mingcute:home-5-line" width="32" height="32" />
          )}
          {/* <span className="h-2 w-2 rounded-full bg-sky-500 absolute -top-0.5 right-[3px]"></span> */}
        </Link>
        <Link href="/artilheiro" className="flex items-center">
          {isGruposActive ? (
            <Icon
              icon="uil:search"
              width="32"
              height="32"
              className="stroke-current stroke-5"
            />
          ) : (
            <Icon icon="uil:search" width="32" height="32" />
          )}
        </Link>
        <Link href="/classificacao" className="flex items-center">
          {isClassificacaoActive ? (
            <Icon icon="mingcute:notification-fill" width="32" height="32" />
          ) : (
            <Icon icon="mingcute:notification-line" width="32" height="32" />
          )}
        </Link>
        <Link href="/times" className="flex items-center">
          {isTimesActive ? (
            <Icon icon="ic:baseline-email" width="32" height="32" />
          ) : (
            <Icon icon="ic:outline-email" width="32" height="32" />
          )}
        </Link>
      </div>
    </div>
  )
}

export { BottomNav }
