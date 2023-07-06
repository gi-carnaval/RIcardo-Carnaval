import { Header } from '@/components/organism/Header'
import { PortifolioCardProps } from '@/components/organism/PortifolioCard'
import { JobSection } from '@/components/templates/JobSection'
import { PortifolioSection } from '@/components/templates/PortifolioSection'
import { GetServerSidePropsContext } from 'next'
import { createClient } from 'src/services/prismicio'

interface Props {
  category: PortifolioCardProps[]
  mainBanner: {
    data: {
      mainImage: {
        url: string
      }
    }
  }
}

export default function Home({ category, mainBanner }: Props) {
  console.log('Banner -> ', mainBanner.data.mainImage.url)
  const mainBannerUrl = mainBanner.data.mainImage.url
  return (
    <main>
      <Header />
      <div
        className="bg-main-banner bg-cover h-screen -mt-24 z-0"
        style={{ backgroundImage: `url(${mainBannerUrl})` }}
      />
      <PortifolioSection data={category} />
      <JobSection />
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
    const category = await client.getAllByType('categories')
    const mainBanner = await client.getByUID('mainBanner', 'banner')
    return {
      props: {
        category,
        mainBanner,
      },
    }
  } catch (err) {
    return {
      notFound: true,
    }
  }
}
