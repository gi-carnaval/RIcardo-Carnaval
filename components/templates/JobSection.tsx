import { useState } from 'react'
import { SectionH2Title } from '../atoms/SectionH2Title'
import { JobCard, JobCardProps } from '../organism/JobCard'

const datas = [
  {
    id: 1,
    title: 'Felipe e Graziela',
    category: 'Casamento',
    date: '22/06/2022',
  },

  {
    id: 2,
    title: 'Aniversário de João',
    category: 'Aniversário',
    date: '15/09/2022',
  },
  {
    id: 3,
    title: 'Conferência de Tecnologia',
    category: 'Conferência',
    date: '10/11/2022',
  },
  {
    id: 4,
    title: 'Encontro de Negócios',
    category: 'Negócios',
    date: '05/12/2022',
  },
  {
    id: 5,
    title: 'Festival de Música',
    category: 'Entretenimento',
    date: '18/07/2022',
  },
  {
    id: 6,
    title: 'Workshop de Design',
    category: 'Educação',
    date: '30/08/2022',
  },
  {
    id: 7,
    title: 'Cleiton e Maria',
    category: 'Casamento',
    date: '23/08/2022',
  },
]

const categoryFIlter = [
  'Educação',
  'Entretenimento',
  'Negócios',
  'Conferência',
  'Aniversário',
  'Casamento',
]

export function JobSection() {
  const [selectedFilter, setSelectedFilter] = useState<String>('Todos')
  const [filteredData, setFilteredData] = useState<JobCardProps[]>([])

  const handleFilterChange = (e: String) => {
    const value = e
    console.log(value)
    setSelectedFilter(value)

    if (value === 'Todos') {
      setFilteredData(datas) // Exibe todos os elementos quando o filtro está vazio
    } else {
      const filteredObjects = datas.filter((obj) =>
        obj.category.toLowerCase().includes(value.toLowerCase()),
      )
      console.log(filteredObjects)
      setFilteredData(filteredObjects)
    }
  }

  return (
    <>
      <SectionH2Title>Trabalhos</SectionH2Title>
      <div className="flex justify-center gap-6 -mt-16">
        <button
          onClick={() => handleFilterChange('Todos')}
          className={selectedFilter === 'Todos' ? `font-bold` : ''}
        >
          Todos
        </button>
        {categoryFIlter.sort().map((category, index) => {
          return (
            <button
              key={index}
              className={selectedFilter === category ? `font-bold` : ''}
              onClick={() => handleFilterChange(category)}
            >
              {category}
            </button>
          )
        })}
      </div>
      <div className="grid grid-cols-3 items-center justify-between px-24 pb-10 gap-11 ">
        {filteredData.map((data) => {
          return <JobCard key={data.id} data={data} />
        })}
      </div>
    </>
  )
}
