import { GetStaticPaths, GetStaticProps } from 'next'
import { PageH1Title } from '@/components/atoms/PageH1Title'
import { JobCardFullProps } from '@/components/organism/JobCard'
import * as prismic from '@prismicio/client'
import { ParsedUrlQuery } from 'querystring'
import JobCardGrid from '@/components/organism/JobCardGrid'

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
    categoryName: string
  }
}

export default function Categorias({ job, category }: Props) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <PageH1Title>{category.categoryName}</PageH1Title>
        <div className="w-[98vw]">
          <JobCardGrid filteredJobs={job} />
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as ParamsProps

  const client = prismic.createClient('ricardo-carnaval')

  const init = async () => {
    try {
      const category = await client.getByID(slug)
      const job = await client.get({
        filters: [prismic.filter.at('my.jobs.category', slug)],
        fetchLinks: 'categories.categoryName',
      })
      console.log(job, category)
      return { job, category }
    } catch (error) {
      console.error(error)
      return null
    }
  }

  const response = await init()
  console.log('job: ', response)

  return {
    props: {
      job: response?.job.results,
      category: response?.category.data,
    },
  }
}