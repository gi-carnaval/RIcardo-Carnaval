export interface Props {
  data: String
}

export function CardTitle({ data }: Props) {
  return (
    <h3 className="font-medium relative text-4xl justify-center w-11/12 group-hover:flex">
      {data}
    </h3>
  )
}
