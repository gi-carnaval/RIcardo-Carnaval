import CardBackground from '../atoms/CardBackground'
import { CardContent } from '../molecules/CardContent'

export interface PortifolioCardContentProps {
  categoryImage: {
    url: string
  }
  categoryName: string
}

export function PortifolioCard({
  categoryImage,
  categoryName,
}: PortifolioCardContentProps) {
  const backgroundCard = categoryImage.url

  return (
    <div className="group relative md:h-96 h-[21rem] flex justify-center md:items-center items-start overflow-hidden cursor-pointer transition ease-in-out delay-150">
      <CardBackground backgroundCard={backgroundCard} />
      <CardContent title={categoryName} />
    </div>
  )
}
