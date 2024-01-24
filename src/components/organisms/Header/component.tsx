"use client"

import "./style.scss"

import Image from 'next/image'
import { BiLogoInstagram } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'
import { RxHamburgerMenu } from "react-icons/rx";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuPressed = () => {
    setMenuOpen(!menuOpen)
    console.log(menuOpen)
  }

  return (
    <header>
      <Image src="/assets/nutricv-logo.svg" alt="Nutri Carol Viegas" width={59} height={72} />
      <button className="menu-button" onClick={handleMenuPressed}>
        <RxHamburgerMenu className="menu-icon" />
      </button>
      <nav className={`navbar-website navbar-container `} data-visible={menuOpen ? "true" : "false"}>
        <ul>
          <li className="in-menu-button">
            <button className="menu-button" onClick={handleMenuPressed}>
              <RxHamburgerMenu className="menu-icon" />
            </button>
          </li>
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
      <button className={`background-menu ${menuOpen ? 'visible' : null}`} onClick={handleMenuPressed} />
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