import CardBackground from '../atoms/CardBackground'
import { CardContent } from '../molecules/CardContent'

export interface JobCardProps {
  data: {
    jobDate: string
    jobLocale: string
    jobTitle: string
    category: {
      slug: string
    }
    mainImageJob: {
      url: string
    }
  }
}

interface Props {
  background: string
  jobContent: {
    jobDate: string
    jobLocale: string
    jobTitle: string
    category: {
      slug: string
    }
    categoryJob: string
    mainImageJob: {
      url: string
    }
  }
}

export function JobCard({ background, jobContent }: Props) {
  return (
    <div className="group relative h-96 flex justify-center md:items-center items-start overflow-hidden cursor-pointer transition ease-in-out delay-150">
      <CardBackground backgroundCard={background} />

      <CardContent
        title={jobContent.jobTitle}
        category={jobContent.categoryJob}
        date={jobContent.jobDate}
      />
    </div>
  )
}
