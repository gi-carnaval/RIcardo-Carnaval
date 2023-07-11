import { SectionH2Title } from '../atoms/SectionH2Title'
import { PortifolioCard } from '../organism/PortifolioCard'

export interface PortifolioCardProps {
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
  categories: PortifolioCardProps[]
}

export function PortifolioSection({ categories }: Props) {
  return (
    <>
      <SectionH2Title>Portifólio</SectionH2Title>
      <div className="md:grid md:grid-cols-3 items-center justify-between md:px-24 px-5 pb-10 gap-11">
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
      <div className="flex justify-center my-24">
        <hr className="border-t border-gray-300 my-4 w-3/4" />
      </div>
    </>
  )
}
