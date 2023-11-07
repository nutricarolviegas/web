import "./style.scss"

import Image from 'next/image'
import { BiLogoInstagram } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'

const Header = () => {
  return (
    <header>
      <Image src="/assets/nutricv-logo.svg" alt="Nutri Carol Viegas" width={59} height={72} />
      <nav className='navbar-website navbar-container'>
        <ul>
          <li>
            <a href="#about">Terapia Nutricional</a>
          </li>
          <li>
            <a href="#services">Sobre mim</a>
          </li>
          <li>
            <a href="#contact">Receitas</a>
          </li>
          <li>
            <a href="#contact">Benefícios</a>
          </li>
        </ul>
      </nav>
      <nav className='navbar-social navbar-container'>
        <ul>
          <li>
            <a href="#about"><FaWhatsapp /></a>
          </li>
          <li>
            <a href="#about"><BiLogoInstagram /></a>
          </li>
          <li>
            <a href="#about"><AiOutlineMail /></a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header