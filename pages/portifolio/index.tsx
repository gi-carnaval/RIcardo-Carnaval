import { PageH1Title } from '@/components/atoms/PageH1Title'
import PortifolioCardGrid from '@/components/organism/PortifolioCardGrid'
import { PortifolioCardProps } from '@/components/templates/PortifolioSection'
import { GetServerSidePropsContext } from 'next'
import { createClient } from 'src/services/prismicio'

interface Props {
  categories: PortifolioCardProps[]
}

export default function Portifolio({ categories }: Props) {
  return (
    <>
      <PageH1Title>Portifólios</PageH1Title>
      <div className="px-[10%]">
        <PortifolioCardGrid columns={2} categories={categories} />
      </div>
    </>
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

    return {
      props: {
        categories,
      },
    }
  } catch (err) {
    return {
      notFound: true,
    }
  }
}
