import './style.scss'

import Image from 'next/image'
import { Header } from '@/components/organisms'
import a_terapia_nutricional from '@/utils/texts/a-terapia-nutricional'
import { foods_stock, fruits_stock } from "@/assets/images"
import { saira_condensed } from './layout'
import { carol_portrait } from '@/assets/images/carol-portrait'
import { AboutNutriLeftAside, AboutNutriRightAside } from '@/components/molecules'
import RecipesSwiper from '@/components/organisms/RecipesSwiper/component'
import { ic_eat_food, ic_good_lunch, ic_healthy, ic_talk } from '@/assets/images/icons'

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
        <section id="sobre_mim" className="section-nutri-carol">
          <h1 className={saira_condensed.className}>Carolina Viégas</h1>
          <div className='about-container'>
            <AboutNutriLeftAside />
            <div className='nutri-portrait'>
              <Image src={carol_portrait} width={400} alt="Carolina Viégas" />
            </div>
            <AboutNutriRightAside />
          </div>
        </section>
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
              <div className='beneficios-container'>
                <div>
                  <Image src={ic_healthy} alt="Boa alimentação" width={36} />
                  <span>Melhorar sua relação com a comida</span>
                </div>
                <div>
                  <Image src={ic_good_lunch} alt="Saúde" width={36} />
                  <span>Possibilitar comer bem, com prazer e sem culpa</span>
                </div>
                <div>
                  <Image src={ic_eat_food} alt="Boa alimentação" height={36} />
                  <span>Ensinar a identificar e respeitar sua fome</span>
                </div>
                <div>
                  <Image src={ic_talk} alt="Auxílio" width={36} />
                  <span>Utilize ferramentas que auxiliem a identificar e respeitar a sua fome</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <Image src="/assets/nutricv-logo.svg" width={59} height={72} alt='Nutri Carol Viégas'></Image>
      </footer >
    </>
  )
}
