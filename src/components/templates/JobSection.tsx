import { useEffect, useState } from 'react'
import { SectionH2Title } from '../atoms/SectionH2Title'
import { CategoryCardProps } from './CategorySection'
import JobCardGrid from '../organism/JobCardGrid'
import JobFilter from '../organism/JobFilter'
import { JobCardFullProps } from 'src/types/documents'
import Pagination from '../organism/Pagination'

interface JobSectionProps {
  jobs: JobCardFullProps[]
  categories?: CategoryCardProps[]
}

export function JobSection({ jobs, categories }: JobSectionProps) {
  const [pageIndex, setPageIndex] = useState<number>(1)
  const perPage = 6
  const [totalPages, setTotalPages] = useState<number>(
    Math.ceil(jobs.length / perPage),
  )
  const listStart = (pageIndex - 1) * perPage
  const listEnd = listStart + perPage
  const [entries, setEntries] = useState<JobCardFullProps[]>(
    jobs.slice(listStart, listEnd),
  )
  const [selectedFilter, setSelectedFilter] = useState<string>('Todos')

  const changePageIndex = (page: number) => {
    setPageIndex(page)
  }

  const categoryFilter =
    categories &&
    categories.map((category) => {
      const newCategory = {
        categorySlug: category.slugs[0],
        categoryName: category.data.categoryName,
      }
      return newCategory
    })

  function filteringJob(value: string) {
    if (value === 'Todos') {
      setEntries(jobs.slice(listStart, listEnd))
      setTotalPages(Math.ceil(jobs.length / perPage))
    } else {
      const filteredObjects = jobs.filter((obj) =>
        obj.data.category.data.categoryName.includes(value),
      )
      setPageIndex(1)
      setEntries(filteredObjects.slice(listStart, listEnd))
      setTotalPages(Math.ceil(filteredObjects.length / perPage))
    }
  }

  const handleFilterChange = (value: string) => {
    setSelectedFilter(value)
    filteringJob(value)
  }

  useEffect(() => {
    handleFilterChange(selectedFilter)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilter, pageIndex])

  return (
    <>
      <SectionH2Title>Trabalhos</SectionH2Title>
      <JobFilter
        selectedFilter={selectedFilter}
        handleFilterChange={handleFilterChange}
        categoryFilter={categoryFilter}
      />
      <JobCardGrid filteredJobs={entries} />
      <Pagination
        currentPage={pageIndex}
        totalPages={totalPages}
        changePageIndex={changePageIndex}
      />
    </>
  )
}
