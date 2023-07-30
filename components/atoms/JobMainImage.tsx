import Image from 'next/image'

interface Props {
  image: string
  jobTitle: string
}

export default function JobMainImage({ image, jobTitle }: Props) {
  return (
    <div className="relative flex flex-wrap overflow-hidden h-[70vh] justify-center">
      <Image
        src={image}
        alt={`Imagem principal do trabalho ${jobTitle}`}
        width={2000}
        height={500}
        className="w-full items-center -mt-44 object-cover"
      />
    </div>
  )
}
