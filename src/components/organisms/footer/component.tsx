import "./style.scss"

import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  return (
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
  )
}

export default Footer