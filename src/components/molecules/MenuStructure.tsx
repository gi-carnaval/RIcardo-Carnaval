import { LinkNavMenu } from '../atoms/LinkNavMenu'

interface Props {
  isOpen?: boolean
}

export function MenuStructure({ isOpen }: Props) {
  return (
    <ul
      className={`flex md:flex-row flex-col items-center md:font-bold text-center h-screen md:gap-6 md:pb-0 pb-12 absolute md:static md:bg-transparent bg-lightColor md:text-lightColor text-darkColor md:z-auto z-[-1] w-full left-0 md:w-auto md:pl-0 pl-0 transition-all duration-500 easy-in pt-8 text-xl md:text-sm ${
        isOpen ? 'left-0' : 'left-[100%]'
      }`}
    >
      <LinkNavMenu href="/">Home</LinkNavMenu>
      {/* <LinkNavMenu href="#">Ricardo Carnaval</LinkNavMenu> */}
      <LinkNavMenu href="/categorias">Categorias</LinkNavMenu>
      <LinkNavMenu href="/trabalhos">Trabalho</LinkNavMenu>
      {/* <LinkNavMenu href="#">Depoimentos</LinkNavMenu> */}
    </ul>
  )
}
