export interface Props {
  data: String
}

export function CardTitle({ data }: Props) {
  return (
    <h3 className="md:font-medium font-bold relative md:text-4xl text-xl justify-center w-11/12 group-hover:flex">
      {data}
    </h3>
  )
}
