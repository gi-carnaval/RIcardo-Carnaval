interface PageTitleProps {
  children: string
}

export function PageH1Title(props: PageTitleProps) {
  return (
    <h1 className="md:text-4xl text-2xl text-center md:my-24 my-12">
      {props.children}
    </h1>
  )
}
