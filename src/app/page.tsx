import './style.scss'

import Image from 'next/image'
import { Header, Footer, RecipesSwiper, SobreMim } from '@/components/organisms'
import { Beneficts } from '@/components/molecules/beneficts'
import { foods_stock, fruits_stock } from "@/assets/images"
import saira_condensed from '@/utils/fonts/saira-condensed'
import a_terapia_nutricional from '@/utils/texts/a-terapia-nutricional'

export default function Home() {

  return (
    <>
      <Header />
      <main>
        <section id="terapia_nutricional" className='section-terapia-nutricional m-15'>
          <div>
            <h1>A Terapia Nutricional</h1>
            <p>{a_terapia_nutricional}</p>
            <input className={saira_condensed.className} type='button' value="AGENDE AGORA" />
          </div>
          <Image src={fruits_stock} alt="Frutas saudáveis" width={400} />
        </section>
        <SobreMim />
        <section id="receitas" className="section-recipes" >
          <h1 className={saira_condensed.className}>Receitas</h1>
          <RecipesSwiper />
        </section>
        <section id="beneficios" className='section-beneficios'>
          <Image src={foods_stock} alt="Comidas saudáveis" width={500} />
          <div className='container'>
            <h3 className={saira_condensed.className}>Os Benfícios da Nutrição</h3>
            <div className='info'>
              <span className="info-span">A Nutrição além de proporcionar saúde, bem estar e qualidade de vida ela tem por objetivo:
              </span>
              <Beneficts />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
