"use client"

import './style.scss'

import Image from 'next/image'
import Header from '@/components/organisms/Header/Header'
import a_terapia_nutricional from '@/utils/texts/a-terapia-nutricional'
import fruits_stock from "@/assets/fruits-stock.png"
import { saira_condensed } from './layout'
import { ArcherContainer } from 'react-archer'
import carolPortrait from "@/assets/carol-portrait.png"

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
          <h1>Carolina Viégas</h1>
          <ArcherContainer strokeColor='#B8860B'>
            <div className='info-container'>
              <Image src={carolPortrait} width={400} alt="Carolina Viégas" />
            </div>
          </ArcherContainer>
        </section>
      </main>
    </>
  )
}
