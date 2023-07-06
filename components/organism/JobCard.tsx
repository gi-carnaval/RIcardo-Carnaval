import { StructureCard } from './StructureCard'

export interface JobCardProps {
  id: number
  title: String
  category: String
  date: String
}

interface Props {
  data: JobCardProps
}

export function JobCard({ data }: Props) {
  return <StructureCard data={data} />
}
