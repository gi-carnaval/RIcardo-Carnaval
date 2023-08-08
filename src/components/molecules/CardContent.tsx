import { CardCategory } from '../atoms/CardCategory'
import { CardDate } from '../atoms/CardDate'
import { CardTitle } from '../atoms/CardTitle'

export interface CardContentProps {
  title: string
  category?: string
  date: string
}

export function CardContent({ title, category, date }: CardContentProps) {
  return (
    <div className="md:absolute relative top-auto md:left-0 md:bg-transparent bg-lightColor md:text-current text-[#202020] w-full md:hidden flex flex-col items-center text-center md:group-hover:flex md:flex-col md:items-center md:text-center md:justify-center content-center py-4">
      <CardTitle data={title} />
      <CardCategory data={category} />
      {date && <CardDate data={date} />}
    </div>
  )
}
