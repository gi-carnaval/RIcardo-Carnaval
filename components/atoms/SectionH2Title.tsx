interface SectionTitleProps {
  children: String
}

export function SectionH2Title(props: SectionTitleProps) {
  return <h2 className="text-4xl text-center my-24">{props.children}</h2>
}
