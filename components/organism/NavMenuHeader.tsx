import menuIcon from '@/assets/menuIcon.svg'
import closeIcon from '@/assets/closeIcon.svg'
import Image from 'next/image'
import { useState } from 'react'
import LogoRicardoCarnaval from '@/assets/LogoMobile.png'
import Link from 'next/link'
import { MenuStructure } from '../molecules/MenuStructure'

export function NavMenuHeader() {
  const [open, setOpen] = useState(false)

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
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <Image src={closeIcon} width={24} alt="Botão para fechar menu" />
            ) : (
              <Image src={menuIcon} width={30} alt="Botão para abrir menu" />
            )}
          </button>
        </div>
        <ul
          className={`md:flex md:items-center md:font-bold text-center md:gap-6 md:pb-0 pb-12 absolute md:static md:bg-transparent bg-darkColor md:z-auto z-[-1] w-full left-0 md:w-auto md:pl-0 pl-0 transition-all duration-500 easy-in text-4xl md:text-sm ${
            open ? 'top-16' : '-top-96'
          }`}
        >
          <MenuStructure />
        </ul>
      </div>
    </nav>
  )
}
