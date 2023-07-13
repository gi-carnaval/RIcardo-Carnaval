import { PortifolioCardProps } from '../templates/PortifolioSection'
import { PortifolioCard } from './PortifolioCard'

interface Props {
  categories: PortifolioCardProps[]
  columns: number
}

export default function PortifolioCardGrid({ categories, columns }: Props) {
  return (
    <div
      className={`md:grid md:grid-cols-${columns} items-center justify-between md:px-24 px-5 pb-10 gap-11`}
    >
      {categories.map((category) => {
        return (
          <PortifolioCard
            key={category.id}
            categoryImage={category.data.categoryImage}
            categoryName={category.data.categoryName}
          />
        )
      })}
    </div>
  )
}
