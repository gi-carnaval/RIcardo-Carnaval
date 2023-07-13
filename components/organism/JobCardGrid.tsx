import { JobsContentProps } from '../templates/JobSection'
import { PortifolioCardProps } from '../templates/PortifolioSection'
import { JobCard } from './JobCard'

interface Props {
  filteredJobs: JobsContentProps[]
  categories: PortifolioCardProps[]
  columns: number
}

export default function JobCardGrid({
  filteredJobs,
  categories,
  columns,
}: Props) {
  console.log('Filtered Data: ', filteredJobs)
  return (
    <div
      className={`md:grid md:grid-cols-${columns} items-center justify-between md:px-24 px-5 pb-10 gap-11`}
    >
      {filteredJobs.map((job) => {
        const categoryJobComplete = categories.filter((category) =>
          category.slugs[0].includes(job.data.category.slug),
        )

        const newJob = {
          ...job.data,
          categoryJob: categoryJobComplete[0].data.categoryName,
        }

        return (
          <JobCard
            key={job.data.jobTitle}
            background={job.data.mainImageJob.url}
            jobContent={newJob}
          />
        )
      })}
    </div>
  )
}
