import { LinkNavMenu } from '@/components/atoms/LinkNavMenu'

export function NavMenuFooter() {
  return (
    <nav className="w-full -mt-6">
      <div className="bg-darkColor md:bg-transparent md:flex items-center justify-center py-4 md:py-6 h-24 md:px-20 px-7">
        <ul
          className={`hidden md:flex md:items-center md:text-center font-normal md:gap-6 md:pb-0 pb-12 md:z-auto z-[-1] md:w-auto md:pl-0 pl-9 `}
        >
          <LinkNavMenu href="/">Home</LinkNavMenu>
          <LinkNavMenu href="#">Ricardo Carnaval</LinkNavMenu>
          <LinkNavMenu href="/portifolio">Portifólio</LinkNavMenu>
          <LinkNavMenu href="#">Trabalho</LinkNavMenu>
          <LinkNavMenu href="#">Depoimentos</LinkNavMenu>
        </ul>
      </div>
    </nav>
  )
}
