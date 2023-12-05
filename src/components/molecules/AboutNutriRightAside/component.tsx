import "./style.scss"

import Image from "next/image"
import { element_4, element_5, element_6, element_7 } from "@/assets/images/carol-portrait"
import { Animated } from "@/components/atoms"

const AboutNutriRightAside = () => {
  return (
    <div className='info-aside'>
      <Animated.Root>
        <Animated.Element direction='fromLeft' transition={{ delay: 0.8 }} >
          <Image src={element_4} width={400} alt="info" />
        </Animated.Element>
        <Animated.Element direction='fromLeft' transition={{ delay: 1 }} >
          <Image src={element_5} width={400} alt="info" />
        </Animated.Element>
        <Animated.Element direction='fromLeft' transition={{ delay: 1.2 }} >
          <Image src={element_6} width={400} alt="info" />
        </Animated.Element>
        <Animated.Element direction='fromLeft' transition={{ delay: 1.4 }} >
          <Image src={element_7} width={400} alt="info" />
        </Animated.Element>
      </Animated.Root>
    </div>
  )
}

export default AboutNutriRightAside