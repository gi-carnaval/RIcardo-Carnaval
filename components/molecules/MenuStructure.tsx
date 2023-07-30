import { LinkNavMenu } from '../atoms/LinkNavMenu'

export function MenuStructure() {
  return (
    <>
      <LinkNavMenu href="/">Home</LinkNavMenu>
      {/* <LinkNavMenu href="#">Ricardo Carnaval</LinkNavMenu> */}
      <LinkNavMenu href="/categorias">Categorias</LinkNavMenu>
      <LinkNavMenu href="/trabalhos">Trabalho</LinkNavMenu>
      {/* <LinkNavMenu href="#">Depoimentos</LinkNavMenu> */}
    </>
  )
}
