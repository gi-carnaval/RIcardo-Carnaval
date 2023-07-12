import { useEffect, useState } from 'react'
import { SectionH2Title } from '../atoms/SectionH2Title'
import { JobCard, JobCardProps } from '../organism/JobCard'
import { PortifolioCardProps } from './PortifolioSection'

export interface JobsContentProps {
  data: {
    jobDate: string
    jobLocale: string
    jobTitle: string
    category: {
      slug: string
    }
    mainImageJob: {
      url: string
    }
  }
}

interface JobSectionProps {
  jobs: JobsContentProps[]
  categories: PortifolioCardProps[]
}

export function JobSection({ jobs, categories }: JobSectionProps) {
  const categoryFilter = categories.map((category) => {
    const newCategory = {
      categorySlug: category.slugs[0],
      categoryName: category.data.categoryName,
    }
    return newCategory
  })

  const [selectedFilter, setSelectedFilter] = useState<string>()
  const [filteredData, setFilteredData] = useState<JobCardProps[]>([])

  useEffect(() => {
    handleFilterChange('Todos')
  }, [])

  const handleFilterChange = (value: string) => {
    setSelectedFilter(value)

    if (value === 'Todos') {
      setFilteredData(jobs) // Exibe todos os elementos quando o filtro está vazio
    } else {
      const filteredObjects = jobs.filter((obj) =>
        obj.data.category.slug.includes(value),
      )
      setFilteredData(filteredObjects)
    }
  }

  return (
    <>
      <SectionH2Title>Trabalhos</SectionH2Title>
      <div className="flex md:justify-center gap-6 -mt-3 mb-10 md:overflow-hidden overflow-scroll whitespace-nowrap md:px-4 px-8 text-base">
        <button
          onClick={() => handleFilterChange('Todos')}
          className={`inline-block ${
            selectedFilter === 'Todos' ? `font-bold` : ''
          }`}
        >
          Todos
        </button>
        {categoryFilter.sort().map((category, index) => {
          return (
            <button
              key={index}
              className={`inline-block ${
                selectedFilter === category.categorySlug ? 'font-bold' : ''
              }`}
              onClick={() => handleFilterChange(category.categorySlug)}
            >
              {category.categoryName}
            </button>
          )
        })}
      </div>
      <div className="md:grid md:grid-cols-3 items-center justify-between md:px-24 px-5 pb-10 gap-11 ">
        {filteredData.map((job) => {
          const categoryJobComplete = categories.filter((category) =>
            category.slugs[0].includes(job.data.category.slug),
          )

          const newJob = {
            ...job.data,
            categoryJob: categoryJobComplete[0].data.categoryName,
          }

          return (
            <JobCard
              key={job.data.jobTitle}
              background={job.data.mainImageJob.url}
              jobContent={newJob}
            />
          )
        })}
      </div>
    </>
  )
}
