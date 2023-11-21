import './style.scss'

import Image from 'next/image'
import Header from '@/components/organisms/Header/Header'
import a_terapia_nutricional from '@/utils/texts/a-terapia-nutricional'
import fruits_stock from "@/assets/fruits-stock.png"
import { saira_condensed } from './layout'

export default function Home() {

  return (
    <>
      <Header />
      <main>
        <section className='section-terapia-nutricional'>
          <div>
            <h1>A Terapia Nutricional</h1>
            <p>{a_terapia_nutricional}</p>
            <input className={saira_condensed.className} type='button' value="AGENDE AGORA" />
          </div>
          <Image src={fruits_stock} alt="Frutas saudáveis" width={400} />
        </section>
      </main>
    </>
  )
}
