import { MenuStructure } from '../molecules/MenuStructure'

export function NavMenuFooter() {
  return (
    <nav className="w-full -mt-6">
      <div className="bg-darkColor md:bg-transparent md:flex items-center justify-center py-4 md:py-6 h-24 md:px-20 px-7">
        <ul
          className={`hidden md:flex md:items-center md:text-center font-normal md:gap-6 md:pb-0 pb-12 md:z-auto z-[-1] md:w-auto md:pl-0 pl-9 `}
        >
          <MenuStructure />
        </ul>
      </div>
    </nav>
  )
}
