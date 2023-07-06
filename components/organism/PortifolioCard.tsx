import { StructureCard } from './StructureCard'

export interface PortifolioCardProps {
  id: number
  title: string
}

interface Props {
  data: PortifolioCardProps
}

export function PortifolioCard({ data }: Props) {
  return <StructureCard data={data} />
}
