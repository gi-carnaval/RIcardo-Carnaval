import { useEffect, useState } from 'react'
import { SectionH2Title } from '../atoms/SectionH2Title'
import { CategoryCardProps } from './CategorySection'
import JobCardGrid from '../organism/JobCardGrid'
import JobFilter from '../organism/JobFilter'
import { JobCardFullProps } from 'src/types/documents'

interface JobSectionProps {
  jobs: JobCardFullProps[]
  categories?: CategoryCardProps[]
  hasFilter: boolean
}

export function JobSection({
  jobs,
  categories,
  hasFilter = true,
}: JobSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>()
  const [filteredData, setFilteredData] = useState<JobCardFullProps[]>([])

  let categoryFilter

  if (hasFilter) {
    categoryFilter =
      categories &&
      categories.map((category) => {
        const newCategory = {
          categorySlug: category.slugs[0],
          categoryName: category.data.categoryName,
        }
        return newCategory
      })
  }

  useEffect(() => {
    handleFilterChange('Todos')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleFilterChange = (value: string) => {
    setSelectedFilter(value)

    if (value === 'Todos') {
      setFilteredData(jobs)
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
      {hasFilter ? (
        <JobFilter
          selectedFilter={selectedFilter}
          handleFilterChange={handleFilterChange}
          categoryFilter={categoryFilter}
        />
      ) : (
        ''
      )}
      <JobCardGrid filteredJobs={filteredData} />
    </>
  )
}
