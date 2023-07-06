import { CardContent } from '../molecules/CardContent'

export interface CardProps {
  title: String
  category?: String
  date?: String
}
const divStyle = {
  backgroundImage: 'url([/src/assets/main-banner.png])',
}

interface Props {
  data: CardProps
}

export function StructureCard({ data }: Props) {
  return (
    <div className="group relative h-96 flex justify-center items-center overflow-hidden cursor-pointer transition ease-in-out delay-150">
      <div
        className="bg-cover bg-center w-full h-full group-hover:opacity-25 group-hover:blur-sm"
        style={divStyle}
      />
      <div className="absolute w-full hidden group-hover:flex flex-col items-center text-center justify-center">
        <CardContent data={data} />
      </div>
    </div>
  )
}
