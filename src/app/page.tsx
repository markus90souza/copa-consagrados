import { GameCard } from '@/components/cards/game-card'
import { Section } from '@/components/shared/section'
import { Shell } from '@/components/shell'
import { TimeCardFull } from '@/components/time-card-full'
import { jogos } from '@/data/jogos'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex w-full h-screen py-14 flex-col ">
      <div className="w-full  flex items-center  justify-center max-w-7xl mx-auto ">
        <Image
          alt="image"
          width={169}
          height={105}
          className="object-contain"
          src={'/images/asset-0.webp'}
        />
      </div>

      <div className="w-full px-5">
        <Shell className="max-w-7xl mx-auto">
          <Section title="TODAS AS PARTIDAS" href="#">
            {jogos.map((item, index) => (
              <GameCard
                key={index}
                time1={{
                  name: item.time1.name,
                  shield: item.time1.shield,
                }}
                time2={{
                  name: item.time2.name,
                  shield: item.time2.shield,
                }}
              />
            ))}
          </Section>
        </Shell>
      </div>
    </div>
  )
}
