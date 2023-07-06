import Image from 'next/image'
import LogoRicardoCarnaval from '@/assets/LogoMobile.png'
import { NavMenuHeader } from '../molecules/NavMenuHeader'

export function Header() {
  return (
    <header className="bg-[#323232]/70 backdrop-blur-md relative z-10">
      <div className="flex justify-between items-center px-24 py-6 h-24">
        <Image
          alt="Ricardo Carnaval Logo Manuscrito"
          src={LogoRicardoCarnaval}
          height={50}
        ></Image>
        <NavMenuHeader />
      </div>
    </header>
  )
}
