import { format } from 'date-fns'

interface Props {
  data: string
}

export function CardDate({ data }: Props) {
  const date = format(new Date(data), 'dd/MM/yyyy')
  return (
    <time className="md:font-normal font-light md:text-2xl text-base group-hover:block">
      {date}
    </time>
  )
}
