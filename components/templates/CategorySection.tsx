import SectionDivider from '../atoms/SectionDivider'
import { SectionH2Title } from '../atoms/SectionH2Title'
import CategoryCardGrid from '../organism/CategoryCardGrid'

export interface CategoryCardProps {
  id: string
  data: {
    categoryImage: {
      url: string
    }
    categoryName: string
  }
  slugs: string[]
}

interface Props {
  categories: CategoryCardProps[]
}

export function CategorySection({ categories }: Props) {
  return (
    <>
      <SectionH2Title>Portifólio</SectionH2Title>
      <CategoryCardGrid
        columns={3}
        categories={categories}
        linkTo="categorias"
      />

      <SectionDivider marginY={6} />
    </>
  )
}
