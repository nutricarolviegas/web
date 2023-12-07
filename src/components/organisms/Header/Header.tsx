"use client"

import "./style.scss"

import Image from 'next/image'
import { BiLogoInstagram } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'
import { useState, useEffect } from "react"

const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0)
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
  }, [])

  return { isScrolled }
}

const Header = () => {
  const { isScrolled } = useScroll()

  return (
    <header>
      <Image src="/assets/nutricv-logo.svg" alt="Nutri Carol Viegas" width={59} height={72} />
      <nav className='navbar-website navbar-container'>
        <ul>
          <li>
            <a href="#terapia_nutricional">Terapia Nutricional</a>
          </li>
          <li>
            <a href="#sobre_mim">Sobre mim</a>
          </li>
          <li>
            <a href="#receitas">Receitas</a>
          </li>
          <li>
            <a href="#beneficios">Benefícios</a>
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
      <div className={`header-background ${isScrolled ? 'show-background' : ''}`}></div>
    </header>
  )
}

export default Header