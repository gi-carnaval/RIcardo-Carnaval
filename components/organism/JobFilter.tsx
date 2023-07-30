interface CategoryFilterProps {
  categoryName: string
  categorySlug: string
}

interface Props {
  selectedFilter: string | undefined
  handleFilterChange: Function
  categoryFilter: CategoryFilterProps[]
}

export default function JobFilter({
  selectedFilter,
  handleFilterChange,
  categoryFilter,
}: Props) {
  return (
    <div className="flex md:justify-center gap-6 -mt-3 mb-10 md:overflow-hidden overflow-scroll whitespace-nowrap md:px-4 px-8 text-base">
      <button
        onClick={() => handleFilterChange('Todos')}
        className={`inline-block ${
          selectedFilter === 'Todos' ? `font-bold` : ''
        }`}
      >
        Todos
      </button>
      {categoryFilter.sort().map((category, index) => {
        return (
          <button
            key={index}
            className={`inline-block ${
              selectedFilter === category.categorySlug ? 'font-bold' : ''
            }`}
            onClick={() => handleFilterChange(category.categoryName)}
          >
            {category.categoryName}
          </button>
        )
      })}
    </div>
  )
}
