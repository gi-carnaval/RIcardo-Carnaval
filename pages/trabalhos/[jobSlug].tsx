import { GetStaticPaths, GetStaticPropsContext } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { format } from 'date-fns'
import Gallery from '@/components/templates/Gallery'
import JobTitle from '@/components/molecules/JobTitle'
import JobMainImage from '@/components/atoms/JobMainImage'
import JobDescriptionAndDate from '@/components/molecules/JobDescriptionAndDate'
import documentsRepository from 'src/repositories/documentsRepository'
import { JobCardFullProps } from 'src/types/documents'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

interface ParamsProps extends ParsedUrlQuery {
  jobSlug: string
}

interface Props {
  job: JobCardFullProps
}

export default function Portfolio({ job }: Props) {
  const images = job.data.slices[0] ? job.data.slices[0].items : undefined
  const formattedDate = format(new Date(job.data.jobDate), 'dd/MM/yyyy')
  return (
    <div className="flex flex-col justify-center items-center">
      <JobTitle title={job.data.jobTitle} locale={job.data.jobLocale} />
      <JobMainImage
        image={job.data.mainImageJob.url}
        jobTitle={job.data.jobTitle}
      />
      <JobDescriptionAndDate
        description={job.data.description}
        formattedDate={formattedDate}
      />
      <div className="w-full flex justify-center items-center">
        {images ? <Gallery photos={images} /> : ''}
      </div>
    </div>
  )
}
export async function getStaticProps({ params }: GetStaticPropsContext) {
  const { jobSlug } = params as ParamsProps

  const jobResponse = await documentsRepository.getByUid('jobs', jobSlug)

  return {
    props: { job: jobResponse.data.results[0] },
  }
}
