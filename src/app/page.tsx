"use client"

import './style.scss'

import Image from 'next/image'
import Header from '@/components/organisms/Header/Header'
import a_terapia_nutricional from '@/utils/texts/a-terapia-nutricional'
import fruits_stock from "@/assets/images/fruits-stock.png"
import { saira_condensed } from './layout'
import carolPortrait from "@/assets/images/carol-portrait/carol-portrait.png"
import { Fade } from "react-awesome-reveal"
import { element_1, element_2, element_3 } from '@/assets/images/carol-portrait'

export default function Home() {

  return (
    <>
      <Header />
      <main>
        <section className='section-terapia-nutricional m-15'>
          <div>
            <h1>A Terapia Nutricional</h1>
            <p>{a_terapia_nutricional}</p>
            <input className={saira_condensed.className} type='button' value="AGENDE AGORA" />
          </div>
          <Image src={fruits_stock} alt="Frutas saudáveis" width={400} />
        </section>
        <section className="section-nutri-carol">
          <h1>CAROLINA VIÉGAS</h1>
          <div className='about-container'>
            <Fade cascade className='left-info'>
              <div>
                <Image src={element_1} width={500} alt="info" />
                <Image src={element_2} width={500} alt="info" />
                <Image src={element_3} width={500} alt="info" />
              </div>
            </Fade>
            <div>
              <Image src={carolPortrait} width={400} alt="Carolina Viégas" />
            </div>
            <Fade className='right-info'>

            </Fade>
          </div>
        </section>
      </main>
    </>
  )
}
