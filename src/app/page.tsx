import { TimeCard } from '@/components/time-card'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex w-full py-14 flex-col ">
      <div className="w-full  flex items-center  justify-center max-w-7xl mx-auto ">
        <Image
          alt="image"
          width={169}
          height={105}
          className="object-contain"
          src={'/images/asset-0.webp'}
        />
      </div>

      <div className="w-full flex max-w-7xl mx-auto my-5">
        <TimeCard image={'/images/asset-1.webp'} name={'Team 1'} />

        <div className="flex  flex-col items-center justify-center">
          <span className="w-10 font-bold h-10 flex items-center justify-center bg-blue-500 rounded-full">
            VS
          </span>
        </div>

        <TimeCard image={'/images/asset-2.webp'} name={'Team 2'} />
      </div>

      <div className="w-full flex flex-col items-center justify-center max-w-7xl mx-auto">
        <header className=" w-full text-2xl block font-bold text-zinc-100 mb-5 text-center ">
          Placar
        </header>

        <div className="flex  items-center w-full justify-center">
          <div className="flex flex-col gap-3 items-center">
            <TimeCard
              image={'/images/asset-1.webp'}
              name={'Team 1'}
              size={80}
            />
            <span className="flex rounded-lg items-center justify-center text-3xl bg-zinc-900 w-12 h-12">
              0
            </span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="w-6 font-bold  h-6 flex items-center justify-center bg-blue-500 rounded-full">
              VS
            </span>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <TimeCard
              image={'/images/asset-2.webp'}
              name={'Team 2'}
              size={80}
            />
            <span className="flex rounded-lg items-center justify-center text-3xl bg-zinc-900 w-12 h-12">
              0
            </span>
          </div>
        </div>
      </div>

      <div className="">
        <header className=" w-full text-2xl block font-bold text-zinc-100 mb-5 text-center">
          Estatisticas da Partida
        </header>

        <div className="w-full flex max-w-7xl mx-auto flex-col">
          <div className=" flex flex-row">
            <div className="bg-yellow-300 w-full">
              <TimeCard image={'/images/asset-1.webp'} />
            </div>
            <div className="bg-zinc-900 w-full">
              <TimeCard image={'/images/asset-2.webp'} />
            </div>
          </div>

          <ul className="w-full space-x-4">
            <li className="flex items-center justify-between border-b border-zinc-700 px-4 py-4">
              <div className="">
                <span>-</span>
              </div>
              <div className="">
                <strong>Total de Gols</strong>
              </div>
              <div className="">-</div>
            </li>

            <li className="flex items-center justify-between border-b border-zinc-700 px-4 py-4">
              <div className="">
                <span>-</span>
              </div>
              <div className="">
                <strong>Gol</strong>
              </div>
              <div className="">-</div>
            </li>

            <li className="flex items-center justify-between border-b border-zinc-700 px-4 py-4">
              <div className="">
                <span>-</span>
              </div>
              <div className="">
                <strong>Total de cartoes</strong>
              </div>
              <div className="">-</div>
            </li>
            <li className="flex items-center justify-between border-b border-zinc-700 px-4 py-4">
              <div className="">
                <span>-</span>
              </div>
              <div className="">
                <strong>Cartoes Amarelo</strong>
              </div>
              <div className="">-</div>
            </li>

            <li className="flex items-center justify-between border-b border-zinc-700 px-4 py-4">
              <div className="">
                <span>-</span>
              </div>
              <div className="">
                <strong>Cartoes Vermelho</strong>
              </div>
              <div className="">-</div>
            </li>

            <li className="flex items-center justify-between border-b border-zinc-700 px-4 py-4">
              <div className="">
                <span>-</span>
              </div>
              <div className="">
                <strong>Expulso</strong>
              </div>
              <div className="">-</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
