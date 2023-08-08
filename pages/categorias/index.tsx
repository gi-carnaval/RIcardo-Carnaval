import { PageH1Title } from '@/components/atoms/PageH1Title'
import CategoryCardGrid from '@/components/organism/CategoryCardGrid'
import { CategoryCardProps } from '@/components/templates/CategorySection'
import { GetServerSidePropsContext } from 'next'
import documentsRepository from 'src/repositories/documentsRepository'

interface Props {
  categories: CategoryCardProps[]
}

export default function Category({ categories }: Props) {
  return (
    <>
      <PageH1Title>Categorias</PageH1Title>
      <div className="px-[10%]">
        <CategoryCardGrid
          columns={2}
          categories={categories}
          linkTo="/categorias"
        />
      </div>
    </>
  )
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  )

  try {
    const categoriesResponse = await documentsRepository.getCategories()

    return {
      props: {
        categories: categoriesResponse.data.results,
      },
    }
  } catch (err) {
    return {
      notFound: true,
    }
  }
}
