import Image from 'next/image'

interface Props {
  image: string
  jobTitle: string
}

export default function JobMainImage({ image, jobTitle }: Props) {
  return (
    <div className="relative w-full flex flex-wrap overflow-hidden md:h-[70vh] h-[30vh] justify-center">
      <Image
        src={image}
        alt={`Imagem principal do trabalho ${jobTitle}`}
        width={1000}
        height={500}
        className="w-full items-center md:-mt-44 object-cover"
        priority={false}
      />
    </div>
  )
}
