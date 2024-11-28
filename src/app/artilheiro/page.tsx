import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { artilheiro } from '@/data/artilheiro'
import Image from 'next/image'
import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'

const ArtilheiroPage = () => {
  return (
    <Table>
      <ScrollArea className="h-fit pb-14">
        <TableHeader>
          <TableHead className="w-10">POS</TableHead>
          <TableHead className="w-[100px]">Jogador</TableHead>
          <TableHead className="">Time</TableHead>
          <TableHead className="w-10">Gols</TableHead>
        </TableHeader>
        <TableBody>
          {artilheiro
            .sort((a, b) => a.pos - b.pos)
            .map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-mono text-sm text-center font-medium">
                  {item.pos}
                </TableCell>

                <TableCell className="text-muted-foreground uppercase text-xs">
                  {item.name}
                </TableCell>

                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-10">
                      <Image
                        src={item.shield}
                        alt=""
                        width={100}
                        height={100}
                      />
                    </div>
                    <span className="text-xs uppercase">{item.time}</span>
                  </div>
                </TableCell>

                <TableCell className="font-medium text-center">
                  {item.goals}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </ScrollArea>
    </Table>
  )
}

export default ArtilheiroPage