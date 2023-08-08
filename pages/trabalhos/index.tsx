// import CategoryCardGrid from '@/components/organism/CategoryCardGrid'
import { useState, useEffect } from 'react'
import { GetServerSidePropsContext } from 'next'
import { CategoryCardProps } from '@/components/templates/CategorySection'
import documentsRepository from 'src/repositories/documentsRepository'
import { JobCardFullProps } from 'src/types/documents'
import Pagination from '@/components/organism/Pagination'
import { useSearchParams } from 'next/navigation'
import JobCardGrid from '@/components/organism/JobCardGrid'
import { PageH1Title } from '@/components/atoms/PageH1Title'

interface allJobParams {
  next_page: string | null
  page: number
  prev_page: string | null
  results: JobCardFullProps[]
  results_per_age: number
  results_size: number
  total_pages: number
  total_results_size: number
}

interface Props {
  allJobs: allJobParams
  categories: CategoryCardProps[]
}

export default function Trabalhos({ allJobs }: Props) {
  const [jobsList, setJobsList] = useState<allJobParams>(allJobs)

  const searchParams = useSearchParams()
  const indexPageParam = searchParams.get('page') ?? '1'

  const fetchData = async (page: string) => {
    const response = await documentsRepository.getAllJobsWithCategory(
      6,
      Number(page),
    )
    setJobsList(response.data)
  }

  useEffect(() => {
    fetchData(indexPageParam)
  }, [indexPageParam])

  return (
    <div className="flex flex-col items-center">
      <PageH1Title>Trabalhos</PageH1Title>
      <JobCardGrid filteredJobs={jobsList.results} />
      <Pagination
        currentPage={jobsList.page}
        totalPages={jobsList.total_pages}
      />
    </div>
  )
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  const PAGE_SIZE = 6
  const PAGE_INDEX = 1
  try {
    const allJobsResponse = await documentsRepository.getAllJobsWithCategory(
      PAGE_SIZE,
      PAGE_INDEX,
    )

    return {
      props: {
        allJobs: allJobsResponse.data,
      },
    }
  } catch (err) {
    return {
      notFound: true,
    }
  }
}
