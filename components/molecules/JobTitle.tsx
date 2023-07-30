import { PageH1Title } from '../atoms/PageH1Title'

interface Props {
  title: string
  locale: string
}

export default function JobTitle({ title, locale }: Props) {
  return (
    <div className="flex md:-mt-16 mt-16 flex-col md:flex-row justify-center items-center gap-4 mx-2">
      <PageH1Title>{title}</PageH1Title>
      <span className="md:text-4xl md:font-light md:block hidden">|</span>
      <span className="md:text-4xl md:mt-0 md:mb-0 font-light text-2xl -mt-12 mb-6">
        {locale}
      </span>
    </div>
  )
}
