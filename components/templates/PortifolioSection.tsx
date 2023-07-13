import SectionDivider from '../atoms/SectionDivider'
import { SectionH2Title } from '../atoms/SectionH2Title'
import PortifolioCardGrid from '../organism/PortifolioCardGrid'

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
      <PortifolioCardGrid columns={3} categories={categories} />
      <SectionDivider marginY={6} />
    </>
  )
}
