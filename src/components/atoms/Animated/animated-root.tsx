import { motion } from "framer-motion"
import { ReactNode } from 'react';

type AnimatedImageProps = {
  children: ReactNode
}
const AnimatedRoot = ({ children }: AnimatedImageProps) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedRoot