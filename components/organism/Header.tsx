import { NavMenuHeader } from './NavMenuHeader'

export function Header() {
  return (
    <header className="bg-darkColor/70 backdrop-blur-md w-full top-0 left-0 fixed md:relative z-10">
      <div className="flex justify-between items-center px-6 md:px-24 md:py-6 h-24">
        <NavMenuHeader />
      </div>
    </header>
  )
}
