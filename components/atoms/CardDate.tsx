interface Props {
  data?: String
}

export function CardDate({ data }: Props) {
  return <time className="font-normal text-2xl group-hover:block">{data}</time>
}
