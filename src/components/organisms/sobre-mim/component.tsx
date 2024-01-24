import "./style.scss"

import { carol_portrait } from "@/assets/images/carol-portrait"
import { AboutNutriLeftAside, AboutNutriRightAside } from "@/components/molecules"
import saira_condensed from "@/utils/fonts/saira-condensed"
import Image from "next/image"

const SobreMim = () => {
  return (
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
  )
}

export default SobreMim