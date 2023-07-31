import menuIcon from '@/assets/menuIcon.svg'
import closeIcon from '@/assets/closeIcon.svg'
import Image from 'next/image'
import { forwardRef, useImperativeHandle, useState } from 'react'
import LogoRicardoCarnaval from '@/assets/LogoMobile.png'
import Link from 'next/link'
import { MenuStructure } from '../molecules/MenuStructure'

export interface NavMenuHeaderRef {
  closeMenu: () => void
}
// eslint-disable-next-line react/display-name
export const NavMenuHeader = forwardRef<NavMenuHeaderRef, any>((props, ref) => {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => setOpen((prev) => !prev)
  const closeMenu = () => {
    alert('Mudou')
  }

  useImperativeHandle(ref, () => ({ closeMenu }))

  return (
    <nav className="w-full fixed top-0 left-0">
      <div className="bg-darkColor md:bg-transparent md:flex items-center justify-between py-4 md:py-6 h-24 md:px-20 px-7">
        <Link href="/">
          <Image
            alt="Ricardo Carnaval Logo Manuscrito"
            src={LogoRicardoCarnaval}
            height={50}
            className="w-48"
          />
        </Link>
        <div className="absolute right-8 top-6 cursor-pointer md:hidden ">
          <button onClick={toggleMenu}>
            {open ? (
              <Image src={closeIcon} width={24} alt="Botão para fechar menu" />
            ) : (
              <Image src={menuIcon} width={30} alt="Botão para abrir menu" />
            )}
          </button>
        </div>
        <ul
          className={`md:flex md:items-center md:font-bold text-center h-screen md:gap-6 md:pb-0 pb-12 absolute md:static md:bg-transparent bg-lightColor text-darkColor md:z-auto z-[-1] w-full left-0 md:w-auto md:pl-0 pl-0 transition-all duration-500 easy-in pt-8 text-xl md:text-sm ${
            open ? 'left-0' : '-left-[100%]'
          }`}
        >
          <MenuStructure />
        </ul>
      </div>
    </nav>
  )
})
