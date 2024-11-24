'use client'

import * as React from 'react'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { AspectRatio } from '@/components/ui/aspect-ratio'
// import { Button } from '@/components/ui/button'
import {
  Card,
  // CardContent,
  // CardDescription,
  // CardFooter,
  CardHeader,
  // CardTitle,
} from '@/components/ui/card'

// import { PlaceholderImage } from '@/components/placeholder-image'
type Time = {
  name?: string
  shield: StaticImageData | string
  goals?: number
}

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  time1: Time
  time2: Time
  group?: string
  round?: string
  date?: string
  hour?: string
  stadium?: string
  variant?: 'default' | 'switchable'
}

export function GameCard({
  time1,
  time2,
  // variant = 'default',
  className,
  ...props
}: ProductCardProps) {
  return (
    <Card
      className={cn('size-full overflow-hidden rounded-sm', className)}
      {...props}
    >
      <Link className="" href={`#`}>
        <CardHeader className="p-0 space-y-0  flex flex-row relative">
          <AspectRatio ratio={4 / 3}>
            <Image
              src={time1.shield ?? '/images/product-placeholder.webp'}
              alt={time1.name!}
              className="object-cover"
              sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              fill
              loading="lazy"
            />
          </AspectRatio>
          <div className="w-6 h-6 flex items-center bg-zinc-900 justify-center absolute top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 rounded-md">
            <span className="font-bold text-xs">VS</span>
          </div>
          <AspectRatio ratio={4 / 3}>
            <Image
              src={time2.shield ?? '/images/product-placeholder.webp'}
              alt={time2.name!}
              className="object-cover"
              sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              fill
              loading="lazy"
            />
          </AspectRatio>
        </CardHeader>
      </Link>
      {/* <Link href={`/`} tabIndex={-1}>
        <CardContent className="space-y-1.5 p-4">
          <CardTitle className="line-clamp-1">{time1.name}</CardTitle>
          <CardDescription className="line-clamp-1"></CardDescription>
        </CardContent>
      </Link> */}
      {/* <CardFooter className="p-4 pt-1">
        {variant === 'default' ? (
          <div className="flex w-full items-center space-x-2">
            <Button
              aria-label="Add to cart"
              size="sm"
              className="h-8 w-full rounded-sm"
              onClick={() => {}}
            >
              Add to cart
            </Button>
          </div>
        ) : null}
      </CardFooter> */}
    </Card>
  )
}
