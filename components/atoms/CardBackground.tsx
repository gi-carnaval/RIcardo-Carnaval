interface Props {
  backgroundCard: string
}

export default function CardBackground({ backgroundCard }: Props) {
  return (
    <div
      className="bg-cover bg-no-repeat md:bg-cover bg-center w-full h-56 md:h-96 md:group-hover:opacity-25 md:group-hover:blur-sm transition-all"
      style={{ backgroundImage: `url(${backgroundCard})` }}
    />
  )
}
