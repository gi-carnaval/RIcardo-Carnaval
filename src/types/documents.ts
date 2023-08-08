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
