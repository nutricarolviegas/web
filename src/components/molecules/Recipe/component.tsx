import "./style.scss"

import Image, { StaticImageData } from "next/image"
import { saira_condensed } from "@/app/layout"
import { ic_clarity_clock, ic_people } from "@/assets/images/icons"

type recipe = {
  title: string,
  cookDuration: number
  peopleServed: number
  imgUrl: StaticImageData
}
const Recipe = ({ title, cookDuration, peopleServed, imgUrl }: recipe) => {
  return (
    <div className='recipe-container'>
      <div>
        <Image src={imgUrl} width={225} alt="Salmão no fogo" />

        <h5 className={saira_condensed.className}>{title}</h5>
        <div className='food-info'>
          <Image src={ic_clarity_clock} width={24} alt='cook time' />
          <span>{cookDuration} minutos</span>
        </div>
        <div className='food-info'>
          <Image src={ic_people} width={24} alt='people' />
          <span>Serve {peopleServed} pessoas</span>
        </div>
      </div>
    </div>
  )
}

export default Recipe