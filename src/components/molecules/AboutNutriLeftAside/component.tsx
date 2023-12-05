import "./style.scss"

import Image from "next/image"
import { element_1, element_2, element_3 } from "@/assets/images/carol-portrait"
import { Animated } from "@/components/atoms"

const AboutNutriLeftAside = () => {
  return (
    <div className='info-aside'>
      <Animated.Root>
        <Animated.Element direction='fromRight' transition={{ delay: 0.2 }}>
          <Image src={element_1} width={400} alt="info" />
        </Animated.Element>
        <Animated.Element direction='fromRight' transition={{ delay: 0.4 }}>
          <Image src={element_2} width={400} alt="info" />
        </Animated.Element>
        <Animated.Element direction='fromRight' transition={{ delay: 0.6 }}>
          <Image src={element_3} width={400} alt="info" />
        </Animated.Element>
      </Animated.Root>
    </div>
  )
}

export default AboutNutriLeftAside