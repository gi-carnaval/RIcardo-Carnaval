import { CardCategory } from '../atoms/CardCategory'
import { CardDate } from '../atoms/CardDate'
import { CardTitle } from '../atoms/CardTitle'
import { CardProps } from '../organism/StructureCard'

interface Props {
  data: CardProps
}

export function CardContent({ data }: Props) {
  return (
    <>
      <CardTitle data={data.title} />
      <CardCategory data={data.category} />
      <CardDate data={data.date} />
    </>
  )
}
