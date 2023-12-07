"use client"

import "./style.scss"

import { ic_healthy, ic_good_lunch, ic_eat_food, ic_talk } from "@/assets/images/icons"
import { Animated } from "@/components/atoms"
import Image from "next/image"

const Beneficts = () => {
  return (
    <div className="beneficios-container">
      <Animated.Root>
        <Animated.Element direction='fromLeft' transition={{ delay: 0.2 }} >
          <Image src={ic_healthy} alt="Boa alimentação" width={36} />
          <span>Melhorar sua relação com a comida</span>
        </Animated.Element>
        <Animated.Element direction='fromLeft' transition={{ delay: 0.4 }} >
          <Image src={ic_good_lunch} alt="Saúde" width={36} />
          <span>Possibilitar comer bem, com prazer e sem culpa</span>
        </Animated.Element>
        <Animated.Element direction='fromLeft' transition={{ delay: 0.6 }} >
          <Image src={ic_eat_food} alt="Boa alimentação" height={36} />
          <span>Ensinar a identificar e respeitar sua fome</span>
        </Animated.Element>
        <Animated.Element direction='fromLeft' transition={{ delay: 0.8 }} >
          <Image src={ic_talk} alt="Auxílio" width={36} />
          <span>Utilize ferramentas que auxiliem a identificar e respeitar a sua fome</span>
        </Animated.Element>
      </Animated.Root>
    </div>
  )
}

export default Beneficts