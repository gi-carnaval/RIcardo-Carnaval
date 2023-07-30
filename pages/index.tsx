import { JobCardFullProps } from '@/components/organism/JobCard'
import { JobSection } from '@/components/templates/JobSection'
import {
  CategoryCardProps,
  CategorySection,
} from '@/components/templates/CategorySection'
import { GetServerSidePropsContext } from 'next'
import { createClient } from 'src/services/prismicio'

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
      <JobSection jobs={jobs} categories={categories} />
    </main>
  )
}

export async function getServerSideProps({
  previewData,
  res,
}: GetServerSidePropsContext) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  )

  const client = createClient({ previewData })
  try {
    const categories = await client.getAllByType('categories')
    const mainBanner = await client.getByUID('mainBanner', 'banner')
    const jobs = await client.getAllByType('jobs', {
      fetchLinks: 'categories.categoryName',
    })

    return {
      props: {
        categories,
        mainBanner,
        jobs,
      },
    }
  } catch (err) {
    return {
      notFound: true,
    }
  }
}
