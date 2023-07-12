import { NavMenuHeader } from '../molecules/NavMenuHeader'

export function Header() {
  return (
    <header className="bg-darkColor/70 backdrop-blur-md relative z-10">
      <div className="flex justify-between items-center px-6 md:px-24 md:py-6 h-24">
        <NavMenuHeader />
      </div>
    </header>
  )
}
