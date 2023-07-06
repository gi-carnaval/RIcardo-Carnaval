import { SectionH2Title } from '../atoms/SectionH2Title'
import { PortifolioCard, PortifolioCardProps } from '../organism/PortifolioCard'

const datas = [
  { id: 1, title: 'Casamento' },
  { id: 2, title: 'Ensaio de Casal' },
  { id: 3, title: 'Sessão Gestante' },
  { id: 4, title: 'Aniversário' },
  { id: 5, title: 'Formatura' },
  { id: 6, title: 'Família' },
]

interface Props {
  data: PortifolioCardProps
}

export function PortifolioSection({ data }: Props) {
  console.log('DATA DE PORTIFOLIO SCTION AQUI', data)
  return (
    <>
      <SectionH2Title>Portifólio</SectionH2Title>
      <div className="grid grid-cols-3 items-center justify-between px-24 gap-11">
        {datas.map((datas) => {
          return <PortifolioCard key={datas.id} data={datas} />
        })}
      </div>
      <div className="flex justify-center my-24">
        <hr className="border-t border-gray-300 my-4 w-3/4" />
      </div>
    </>
  )
}
