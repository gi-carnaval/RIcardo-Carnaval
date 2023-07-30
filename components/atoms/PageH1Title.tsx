interface PageTitleProps {
  children: String
}

export function PageH1Title(props: PageTitleProps) {
  return (
    <h1 className="text-4xl text-center md:my-24 my-12">{props.children}</h1>
  )
}
