import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import Image from 'next/image'
import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { grupoA } from './grupo-a'

const ClassifacaoPage = () => {
  return (
    <Table>
      <ScrollArea className="h-fit pb-14">
        <TableHeader>
          <TableHead className="w-10">PTS</TableHead>
          <TableHead className="">Time</TableHead>
          <TableHead className="w-10">J</TableHead>
          <TableHead className="w-10">V</TableHead>
          <TableHead className="w-10">E</TableHead>
          <TableHead className="w-10">D</TableHead>
          <TableHead className="w-10">GF</TableHead>
          <TableHead className="w-10">GS</TableHead>
        </TableHeader>
        <TableBody>
          {grupoA
            .sort((a, b) => a.id - b.id)
            .map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-mono text-sm text-center font-medium">
                  {item.pts}
                </TableCell>

                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-10">
                      <Image src={item.image} alt="" width={100} height={100} />
                    </div>
                    <span className="text-xs uppercase">{item.name}</span>
                  </div>
                </TableCell>

                <TableCell className="font-medium w-10 text-center">
                  {item.j}
                </TableCell>
                <TableCell className="font-medium w-10 text-center">
                  {item.v}
                </TableCell>

                <TableCell className="font-medium w-10 text-center">
                  {item.e}
                </TableCell>
                <TableCell className="font-medium text-center">
                  {item.d}
                </TableCell>
                <TableCell className="font-medium text-center">
                  {item.gf}
                </TableCell>
                <TableCell className="font-medium text-center">
                  {item.gc}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </ScrollArea>
    </Table>
  )
}

export default ClassifacaoPage
