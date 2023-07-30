import Image from 'next/image'

interface Props {
  backgroundCard: string
}

export default function CardBackground({ backgroundCard }: Props) {
  return (
    <Image
      src={backgroundCard}
      alt="Background Image"
      width={700}
      height={500}
      className="rounded-md w-full md:group-hover:opacity-25 md:group-hover:blur-sm transition-all object-cover"
    />
  )
}
