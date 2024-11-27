import { TimeCard } from '@/components/time-card'
import React from 'react'

export default function Page() {
  return (
    <div>
      <div className="w-full flex max-w-7xl mx-auto my-5">
        <TimeCard image={'/images/asset-1.webp'} name={'Team 1'} />

        <div className="flex  flex-col items-center justify-center">
          <span className="w-10 font-bold h-10 flex items-center justify-center bg-blue-500 rounded-full">
            VS
          </span>
        </div>

        <TimeCard image={'/images/barca11.png'} name={'Barça 11'} />
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

          <ul className="w-full space-y-4 mt-4">
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
