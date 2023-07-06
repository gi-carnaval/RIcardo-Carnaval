export interface JobCardProps {
  id: number
  title: String
  category: String
  date: String
}

interface Props {
  data: JobCardProps
}

export function JobCard({ data }: Props) {
  return (
    <div className="group relative h-96 flex justify-center items-center overflow-hidden cursor-pointer transition ease-in-out delay-150">
      <div className="bg-cover bg-center w-full h-full group-hover:opacity-25 group-hover:blur-sm" />
      <div className="absolute w-full hidden group-hover:flex flex-col items-center text-center justify-center">
        {/* <CardContent title={data.data.categoryName} /> */}
      </div>
    </div>
  )
}
