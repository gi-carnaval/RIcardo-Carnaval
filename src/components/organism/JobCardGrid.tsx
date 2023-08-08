import { JobCardFullProps } from 'src/types/documents'
import { JobCard } from './JobCard'

interface Props {
  filteredJobs: JobCardFullProps[]
}

export default function JobCardGrid({ filteredJobs }: Props) {
  return (
    <div
      className={`md:grid md:grid-cols-2 items-center justify-between md:px-24 px-5 pb-10 gap-11`}
    >
      {filteredJobs.map((job) => {
        return (
          <JobCard
            key={job.data.jobTitle}
            background={job.data.mainImageJob.url}
            jobContent={job.data}
            link={job.uid}
          />
        )
      })}
    </div>
  )
}
