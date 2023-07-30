import SectionDivider from '../atoms/SectionDivider'
import { NavMenuFooter } from '../molecules/NavMenuFooter'

export default function Footer() {
  return (
    <footer>
      <SectionDivider marginY={3} />
      <NavMenuFooter />
      <div className="flex justify-center flex-col items-center gap-8 mb-8">
        <h3 className="font-bold md:text-lg text-base">Informações</h3>
        <div className="flex items-center flex-col text-center text-sm md:text-base">
          <span>(14) 99697-1419</span>
          <span>Ricardo Maurício Carnaval</span>
          <address>
            Rua João Albino Zaia, nº 45. Jd São Francisco - Ourinhos-SP
          </address>
        </div>

        <span>Desenvolvido por Giovani Carnaval</span>
      </div>
    </footer>
  )
}
