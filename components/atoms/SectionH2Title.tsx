interface SectionTitleProps {
  children: String
}

export function SectionH2Title(props: SectionTitleProps) {
  return (
    <h2 className="text-4xl text-center md:my-24 my-12">{props.children}</h2>
  )
}
