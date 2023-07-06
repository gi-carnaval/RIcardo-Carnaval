import { LinkNavMenu } from '@/components/atoms/LinkNavMenu'

export function NavMenuHeader() {
  return (
    <nav className="flex flex-row gap-6">
      <LinkNavMenu href="#">Home</LinkNavMenu>
      <LinkNavMenu href="#">Ricardo Carnaval</LinkNavMenu>
      <LinkNavMenu href="#">Portifólio</LinkNavMenu>
      <LinkNavMenu href="#">Trabalho</LinkNavMenu>
      <LinkNavMenu href="#">Depoimentos</LinkNavMenu>
    </nav>
  )
}
