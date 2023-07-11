import { CardCategory } from '../atoms/CardCategory'
import { CardDate } from '../atoms/CardDate'
import { CardTitle } from '../atoms/CardTitle'

export interface CardContentProps {
  title: String
  category?: String
  date?: String
}

export function CardContent({ title, category, date }: CardContentProps) {
  return (
    <div className="absolute sm:top-auto top-56 md:bg-transparent bg-lightColor md:text-current text-[#202020] w-full md:hidden flex flex-col items-center text-center md:group-hover:flex md:flex-col md:items-center md:text-center md:justify-center content-center py-4">
      <CardTitle data={title} />
      <CardCategory data={category} />
      <CardDate data={date} />
    </div>
  )
}
