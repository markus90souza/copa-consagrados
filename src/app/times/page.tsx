import { TimeCard } from '@/components/time-card'

const groups = [
  {
    group: [
      {
        name: 'GRUPO A',
        times: [
          {
            name: 'GALÁCTICOS',
            shield: '/images/galacticos.png',
          },
          {
            name: 'PSG PITUBA',
            shield: '/images/psg-pituba.png',
          },
          {
            name: 'DOCES SOUZA',
            shield: '/images/doces-souza.png',
          },
          {
            name: 'MORRO DA PROVIDÊNCIA',
            shield: '/images/morro-da-providencia.png',
          },
        ],
      },

      {
        name: 'GRUPO B',
        times: [
          {
            name: 'MILAN',
            shield: '/images/galacticos.png',
          },
          {
            name: 'AMÉRICA',
            shield: '/images/psg-pituba.png',
          },
          {
            name: 'JUVENTOS',
            shield: '/images/doces-souza.png',
          },
          {
            name: 'DONOS DA RUA',
            shield: '/images/morro-da-providencia.png',
          },
        ],
      },
    ],
  },
]

const TimesPage = () => {
  return (
    <section className="w-full h-screen flex">
      <div className=""></div>
      <div className="">
        {groups.map((group, index) => {
          return (
            <div
              key={group.group[index].name}
              className="w-full flex flex-col items-center"
            >
              <header className="w-full text-2xl block font-bold text-zinc-100 mb-5 text-center">
                {group.group[index].name}
              </header>
              <div className="w-full flex flex-row">
                {group.group[index].times.map((time) => (
                  <TimeCard
                    key={time.name}
                    image={time.shield}
                    name={time.name}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default TimesPage
