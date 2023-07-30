import { CategoryCardProps } from '../templates/CategorySection'
import { CategoryCard } from './CategoryCard'

interface Props {
  categories: CategoryCardProps[]
  columns: number
  linkTo: string
}

export default function CategoryCardGrid({
  categories,
  columns,
  linkTo,
}: Props) {
  return (
    <div
      className={`md:grid md:grid-cols-2 items-center justify-between md:px-24 px-5 pb-10 gap-11`}
    >
      {categories.map((category) => {
        return (
          <CategoryCard
            key={category.id}
            categoryImage={category.data.categoryImage}
            categoryName={category.data.categoryName}
            linkTo={linkTo}
            link={category.id}
          />
        )
      })}
    </div>
  )
}
