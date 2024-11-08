"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

type Props = {
 children: ReactNode
}

export default function Transition({ children }: Props) {
 return (
  <motion.div
   initial={{ y: 20, opacity: 0 }}
   animate={{ y: 0, opacity: 1 }}
   transition={{ ease: "easeInOut", duration: 0.75 }}
  >
   {children}
  </motion.div>
 )
}