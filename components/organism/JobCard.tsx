import Link from 'next/link'
import CardBackground from '../atoms/CardBackground'
import { CardContent } from '../molecules/CardContent'

export interface JobCardProps {
  jobDate: string
  jobLocale: string
  jobTitle: string
  jobNames: string
  category: {
    data: {
      categoryName: string
    }
  }
  categoryJob: string
  description: [
    {
      text: string
    },
  ]
  mainImageJob: {
    url: string
  }
  slices: [
    {
      items: [
        {
          image: {
            url: string
            dimensions: {
              height: number
              width: number
            }
          }
        },
      ]
    },
  ]
}

export interface JobCardFullProps {
  data: JobCardProps
  uid: string
}

interface Props {
  background: string
  jobContent: JobCardProps
  link: string | undefined
}

export function JobCard({ background, jobContent, link }: Props) {
  return (
    <Link href={`/trabalhos/${link}`}>
      <div className="group relative md:h-96 md:my-0 flex flex-col justify-center items-center overflow-hidden cursor-pointer transition ease-in-out delay-150 my-12">
        <CardBackground backgroundCard={background} />
        <CardContent
          title={jobContent.jobNames}
          category={jobContent.category.data.categoryName}
          date={jobContent.jobDate}
        />
      </div>
    </Link>
  )
}
