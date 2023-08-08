import { GetStaticPaths, GetStaticProps } from 'next'
import { PageH1Title } from '@/components/atoms/PageH1Title'
import { JobCardFullProps } from '@/components/organism/JobCard'
import { ParsedUrlQuery } from 'querystring'
import JobCardGrid from '@/components/organism/JobCardGrid'
import documentsRepository from 'src/repositories/documentsRepository'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

interface ParamsProps extends ParsedUrlQuery {
  slug: string
}

interface Props {
  job: [JobCardFullProps]
  category: {
    data: {
      categoryName: string
    }
  }
}

export default function Categorias({ job, category }: Props) {
  return (
    <>
      <PageH1Title>{category.data.categoryName}</PageH1Title>
      <div className="w-[98vw]">
        <JobCardGrid filteredJobs={job} />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as ParamsProps

  try {
    const categoryResponse = await documentsRepository.getCategoryBySlug(slug)
    const jobResponse = await documentsRepository.getJobWithCategory(slug)

    return {
      props: {
        category: categoryResponse.data.results[0],
        job: jobResponse.data.results,
      },
    }
  } catch (err) {
    return {
      notFound: true,
    }
  }
}
