import { JobSection } from '@/components/templates/JobSection'
import {
  CategoryCardProps,
  CategorySection,
} from '@/components/templates/CategorySection'
import { GetServerSidePropsContext } from 'next'
import documentsRepository from 'src/repositories/documentsRepository'
import { JobCardFullProps } from 'src/types/documents'

interface Props {
  categories: CategoryCardProps[]
  mainBanner: {
    data: {
      mainImage: {
        url: string
      }
    }
  }
  jobs: JobCardFullProps[]
}

export default function Home({ mainBanner, categories, jobs }: Props) {
  const mainBannerUrl = mainBanner.data.mainImage.url
  return (
    <main>
      <div
        className="bg-center bg-cover md:h-screen h-[45rem] md:-mt-24 z-0"
        style={{ backgroundImage: `url(${mainBannerUrl})` }}
      />
      <CategorySection categories={categories} />
      <JobSection jobs={jobs} categories={categories} hasFilter />
    </main>
  )
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  )
  const PAGE_SIZE = 6
  const PAGE_INDEX = 1
  try {
    const categoriesResponse = await documentsRepository.getCategories(
      PAGE_SIZE,
    )
    const jobsResponse = await documentsRepository.getAllJobsWithCategory(
      PAGE_SIZE,
      PAGE_INDEX,
    )
    const mainBannerResponse = await documentsRepository.getByUid(
      'mainBanner',
      'banner',
    )

    return {
      props: {
        categories: categoriesResponse.data.results,
        mainBanner: mainBannerResponse.data.results[0],
        jobs: jobsResponse.data.results,
      },
    }
  } catch (err) {
    return {
      notFound: true,
    }
  }
}
