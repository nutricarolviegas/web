import './style.scss'

import Image from 'next/image'
import { Header } from '@/components/organisms'
import a_terapia_nutricional from '@/utils/texts/a-terapia-nutricional'
import { foods_stock, fruits_stock } from "@/assets/images"
import { carol_portrait } from '@/assets/images/carol-portrait'
import { AboutNutriLeftAside, AboutNutriRightAside } from '@/components/molecules'
import RecipesSwiper from '@/components/organisms/RecipesSwiper/component'
import { ic_eat_food, ic_good_lunch, ic_healthy, ic_talk } from '@/assets/images/icons'
import { Animated } from '@/components/atoms'
import saira_condensed from '@/utils/fonts/saira-condensed'
import Beneficts from '@/components/molecules/Beneficts/component'
import { FaWhatsapp } from 'react-icons/fa'

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
              <Beneficts />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <Image src="/assets/nutricv-logo.svg" width={59} height={72} alt='Nutri Carol Viégas'></Image>
        <h3>© Todos os direitos reservados</h3>
        <div>
          <a href="#terapia_nutricional">
            <FaWhatsapp />
            <h5>+55 11 97183-7971</h5>
          </a>
        </div>
      </footer>
    </>
  )
}
