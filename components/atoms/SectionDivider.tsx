interface Props {
  marginY: number
}

export default function SectionDivider({ marginY }: Props) {
  return (
    <div className={`flex justify-center my-${marginY}`}>
      <hr className="border-t border-gray-300 my-4 w-3/4" />
    </div>
  )
}
