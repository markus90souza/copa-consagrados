import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function ClassificacaoPage() {
  return (
    <div className="px-4">
      <Table className="space-x-4">
        <TableHeader>
          <TableRow>
            <TableHead className="w-3">POS</TableHead>
            <TableHead className="w-full">EQUIPE</TableHead>
            <TableHead className="w-3">PTS</TableHead>
            <TableHead className="w-3">V</TableHead>
            <TableHead className="w-3">D</TableHead>
            <TableHead className="w-3">GF</TableHead>
            <TableHead className="w-3">GC</TableHead>
            <TableHead className="w-3">SG</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border-l-2 space-x-4 border-green-600">
          <TableRow className="">
            <TableCell className="">1</TableCell>
            <TableCell>Morro da providência</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
          </TableRow>

          <TableRow className="">
            <TableCell className="">1</TableCell>
            <TableCell>Morro da providência</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
