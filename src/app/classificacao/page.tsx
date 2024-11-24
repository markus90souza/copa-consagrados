import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Image from 'next/image'

const data = [
  {
    pos: 1,
    name: 'Revoada',
    sku: 'RVD',
    shield: '/images/revoada.png',
    goals: 0,
    points: 0,
    j: 0,
    v: 0,
    d: 0,
    gf: 0,
    gc: 0,
    sg: 0,
  },
  {
    pos: 2,
    name: 'Barça 11',
    sku: 'BAR',
    shield: '/images/barca11.svg',
    goals: 0,
    points: 0,
    j: 0,
    v: 0,
    d: 0,
    gf: 0,
    gc: 0,
    sg: 0,
  },
]

export default function ClassificacaoPage() {
  return (
    <div className="px-4">
      <Table className="space-x-4">
        <TableHeader>
          <TableRow>
            <TableHead className="w-3">POS</TableHead>
            <TableHead className="w-full">EQUIPE</TableHead>
            <TableHead className="w-3">PTS</TableHead>
            <TableHead className="w-3">J</TableHead>
            <TableHead className="w-3">V</TableHead>
            <TableHead className="w-3">D</TableHead>
            <TableHead className="w-3">GF</TableHead>
            <TableHead className="w-3">GC</TableHead>
            <TableHead className="w-3">SG</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border-l-2 space-x-4 border-green-600">
          {data.map((item) => (
            <TableRow key={item.name}>
              <TableCell className="">{item.pos}</TableCell>
              <TableCell className="flex gap-2 items-center">
                {item.shield && (
                  <Image src={item.shield} alt="" width={32} height={32} />
                )}

                {item.name}
              </TableCell>
              <TableCell>{item.points}</TableCell>
              <TableCell>{item.j}</TableCell>
              <TableCell>{item.v}</TableCell>
              <TableCell>{item.d}</TableCell>
              <TableCell>{item.gf}</TableCell>
              <TableCell>{item.gc}</TableCell>
              <TableCell>{item.sg}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
