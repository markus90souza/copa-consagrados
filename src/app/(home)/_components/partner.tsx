'use client'
import { PartnerCard } from '@/components/cards/partner-card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { partners } from '@/data/partners'
import { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'

export const Partner = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-sm mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="w-full">
        {partners.map((item, index) => (
          <CarouselItem key={index}>
            <PartnerCard partner={item} key={index} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
