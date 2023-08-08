interface Props {
  data?: String
}

export function CardCategory({ data }: Props) {
  return (
    <p className="md:font-normal font-light md:text-2xl text-base group-hover:block">
      {data}
    </p>
  )
}
