import { useEffect, useState } from 'react'
import { SectionH2Title } from '../atoms/SectionH2Title'
import { JobCardFullProps } from '../organism/JobCard'
import { CategoryCardProps } from './CategorySection'
import JobCardGrid from '../organism/JobCardGrid'
import JobFilter from '../organism/JobFilter'

interface JobSectionProps {
  jobs: JobCardFullProps[]
  categories: CategoryCardProps[]
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
  const [filteredData, setFilteredData] = useState<JobCardFullProps[]>([])

  useEffect(() => {
    handleFilterChange('Todos')
  }, [])

  const handleFilterChange = (value: string) => {
    setSelectedFilter(value)

    if (value === 'Todos') {
      setFilteredData(jobs) // Exibe todos os elementos quando o filtro está vazio
    } else {
      const filteredObjects = jobs.filter((obj) =>
        obj.data.category.data.categoryName.includes(value),
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
        filteredJobs={filteredData}
        // categories={categories}
      />
    </>
  )
}
