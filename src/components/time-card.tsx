import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import React, { type FC } from 'react'

type TimeCardProps = {
  name: string
  image: StaticImageData | string
  size?: number
}

const TimeCard: FC<TimeCardProps> = ({ image, name, size = 176 }) => {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-3">
      <div className="min-w-[176px] flex items-center justify-center">
        <Image alt="" width={size} height={size} src={image} />
      </div>
      <div className="">
        <strong className="font-semibold text-center text-2xl md:text-3xl">
          {name}
        </strong>
      </div>
    </div>
  )
}

export { TimeCard }
