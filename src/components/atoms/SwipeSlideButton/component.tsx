"use client"

import "./style.scss"

import Image from "next/image"
import { ic_arrow_left, ic_arrow_right } from "@/assets/images/icons"
import { useSwiper } from "swiper/react"

type ComponentProps = {
  direction: "left" | "right"
}
const SwipeSlideButtons = () => {
  const swiper = useSwiper()

  return (
    <div className='swiper-buttons'>
      <button onClick={() => swiper.slidePrev()}>
        <Image src={ic_arrow_left} width={14} alt="Seta para direita" />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <Image src={ic_arrow_right} width={14} alt="Seta para esquerda" />
      </button>
    </div>
  )
}

export default SwipeSlideButtons