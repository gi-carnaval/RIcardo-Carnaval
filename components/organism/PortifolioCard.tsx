import { CardContent } from '../molecules/CardContent'

export interface PortifolioCardProps {
  data: {
    categoryImage: {
      url: string
    }
    categoryName: string
  }
}

interface Props {
  data: PortifolioCardProps
}

export function PortifolioCard({ data }: Props) {
  console.log('Data em portifolioCard', data)

  const backgroundCard = data.data.categoryImage.url
  console.log('TEESTE: ', backgroundCard)

  return (
    <div className="group relative h-96 flex justify-center items-center overflow-hidden cursor-pointer">
      <div
        className={`bg-cover bg-center w-full h-full group-hover:opacity-25 group-hover:blur-sm transition-all`}
        style={{ backgroundImage: `url(${backgroundCard})` }}
      />
      <div className="absolute w-full hidden group-hover:flex flex-col items-center text-center justify-center">
        <CardContent title={data.data.categoryName} />
      </div>
    </div>
  )
}
