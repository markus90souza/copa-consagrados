import { TimeCardFull } from '@/components/time-card-full'
import Image from 'next/image'

const data = [
  {
    time1: {
      name: 'Revoada',
      shield: '/images/asset-1.webp',
    },
    time2: {
      name: 'Barça 11',
      shield: '/images/barca11.svg',
    },
    rodada: 'Primeira Rodada',
    date: 'Sábado, 11/23/2024',
    time: '19:00',
    stadium: 'Quadra Poliesportiva AG 11',
  },

  {
    time1: {
      name: 'Os Galácticos',
      shield: '/images/galacticos.png',
    },
    time2: {
      name: 'Morro da Providência',
      shield: '/images/asset-2.webp',
    },
    rodada: 'Primeira Rodada',
    date: 'Sábado, 11/23/2024',
    time: '20:00',
    stadium: 'Quadra Poliesportiva AG 11',
  },

  {
    time1: {
      name: 'Real Madruga',
      shield: '/images/real-madruga.png',
    },
    time2: {
      name: 'Velho Oeste',
      shield: '/images/velho-oeste.svg',
    },
    rodada: 'Primeira Rodada',
    date: 'Sábado, 11/23/2024',
    time: '21:00',
    stadium: 'Quadra Poliesportiva AG 11',
  },

  {
    time1: {
      name: 'PSG Pituba',
      shield: '/images/psg-pituba.png',
    },
    time2: {
      name: 'Doces Souza',
      shield: '/images/asset-2.webp',
    },
    rodada: 'Primeira Rodada',
    date: 'Terça, 11/26/2024',
    time: '19:00',
    stadium: 'Quadra Poliesportiva AG 11',
  },

  {
    time1: {
      name: 'Serrado',
      shield: '/images/serrado.svg',
    },
    time2: {
      name: 'Atlético Taquari',
      shield: '/images/asset-2.webp',
    },
    rodada: 'Primeira Rodada',
    date: 'Terça, 11/26/2024',
    time: '20:00',
    stadium: 'Quadra Poliesportiva AG 11',
  },

  {
    time1: {
      name: 'Fênix',
      shield: '/images/fenix.svg',
    },
    time2: {
      name: 'Vila Real',
      shield: '/images/vila-real.png',
    },
    rodada: 'Primeira Rodada',
    date: 'Terça, 11/26/2024',
    time: '21:00',
    stadium: 'Quadra Poliesportiva AG 11',
  },
]
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
        <div className="w-full max-w-7xl mx-auto">
          <header className=" w-full uppercase text-5xl block font-bold text-zinc-100 mb-5 mt-4 ">
            Proximas Partidas
          </header>

          <div className="">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              {data.map((item, index) => (
                <li
                  key={index}
                  className="w-full rounded-md bg-zinc-900 flex items-center justify-center  px-4"
                >
                  <div className="flex flex-row w-full items-center justify-between">
                    <TimeCardFull
                      rodada={item.rodada}
                      time1={{
                        name: item.time1.name,
                        shield: item.time1.shield,
                      }}
                      time2={{
                        name: item.time2.name,
                        shield: item.time2.shield,
                      }}
                      date={item.date}
                      time={item.time}
                      stadium={item.stadium}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
