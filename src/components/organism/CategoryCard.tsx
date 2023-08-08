import Link from 'next/link'
import CardBackground from '../atoms/CardBackground'
import { CardContent } from '../molecules/CardContent'

export interface CategoryCardContentProps {
  categoryImage: {
    url: string
  }
  categoryName: string
  linkTo: string
  link: string
}

export function CategoryCard({
  categoryImage,
  categoryName,
  linkTo,
  link,
}: CategoryCardContentProps) {
  const backgroundCard = categoryImage.url

  return (
    <div className="group relative md:h-96 md:my-0 flex flex-col justify-center items-center overflow-hidden cursor-pointer transition ease-in-out delay-150 my-12">
      <Link href={`/${linkTo}/${link}`} className="w-full">
        <CardBackground backgroundCard={backgroundCard} />
      </Link>
      <CardContent title={categoryName} />
    </div>
  )
}
