interface Props {
  data?: String
}

export function CardCategory({ data }: Props) {
  return <p className="font-normal text-2xl group-hover:block">{data}</p>
}
