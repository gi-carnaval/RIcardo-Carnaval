import { CardCategory } from '../atoms/CardCategory'
import { CardDate } from '../atoms/CardDate'
import { CardTitle } from '../atoms/CardTitle'

export interface CardContentProps {
  title: String
  category?: String
  date?: String
}

export function CardContent({ title, category, date }: CardContentProps) {
  console.log('Data dentro de Card Conten:')
  return (
    <>
      <CardTitle data={title} />
      <CardCategory data={category} />
      <CardDate data={date} />
    </>
  )
}
