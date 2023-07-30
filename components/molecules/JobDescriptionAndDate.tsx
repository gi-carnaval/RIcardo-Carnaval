import JobDescription from '../atoms/JobDescription'

interface Props {
  formattedDate: string
  description: [
    {
      text: string
    },
  ]
}

export default function JobDescriptionAndDate({
  formattedDate,
  description,
}: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="mt-20 text-lg font-light">{formattedDate}</span>
      <JobDescription fullDescription={description} />
    </div>
  )
}
