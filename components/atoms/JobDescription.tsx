export interface DescriptionProps {
  fullDescription: [
    {
      text: string
    },
  ]
}

export default function JobDescription({ fullDescription }: DescriptionProps) {
  return (
    <div className="md:w-2/4 text-center my-8 w-3/4">
      {fullDescription.map((description, index) => {
        return <p key={index}>{description.text}</p>
      })}
    </div>
  )
}
