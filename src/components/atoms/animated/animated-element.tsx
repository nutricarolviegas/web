import { Variants, delay, motion } from "framer-motion"
import { ReactNode } from "react"

type AnimatedElementProps = {
  direction: "fromRight" | "fromLeft"
  transition?: {
    delay?: number
    duration?: number
  }
  children: ReactNode
}
const AnimatedElement = ({ direction, transition = { delay: 0, duration: 0.5 }, children }: AnimatedElementProps) => {

  const setDirection = direction === "fromRight" ? -20 : 20
  const animatedElementVariant: Variants = {
    offscreen: {
      x: setDirection,
      opacity: 0
    },
    onscreen: {
      x: 0,
      opacity: 1,
    }
  }
  return (
    <motion.div
      variants={animatedElementVariant}
      transition={{
        delay: transition.delay,
        duration: transition.duration
      }}
    >
      {children}
    </motion.div>
  )
}


export default AnimatedElement