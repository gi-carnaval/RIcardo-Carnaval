interface Props {
  data?: String
}

export function CardDate({ data }: Props) {
  return (
    <time className="md:font-normal font-light md:text-2xl text-base group-hover:block">
      {data}
    </time>
  )
}
