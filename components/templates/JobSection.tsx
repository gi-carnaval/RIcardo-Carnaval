import { useEffect, useState } from 'react'
import { SectionH2Title } from '../atoms/SectionH2Title'
import { JobCardProps } from '../organism/JobCard'
import { PortifolioCardProps } from './PortifolioSection'
import JobCardGrid from '../organism/JobCardGrid'
import JobFilter from '../organism/JobFilter'

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
  console.log('Category Filter: ', categoryFilter)

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
      <JobFilter
        selectedFilter={selectedFilter}
        handleFilterChange={handleFilterChange}
        categoryFilter={categoryFilter}
      />
      <JobCardGrid
        columns={3}
        filteredJobs={filteredData}
        categories={categories}
      />
    </>
  )
}
