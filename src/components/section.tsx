import { ReactNode } from "react"

type Props = {
 title?: string
 subtitle?: string
 children: ReactNode
}

export default function Section({ title, subtitle, children }: Props) {
 return (
  <section className="py-24 max-w-6xl w-full mx-auto">
   {title && <h2 className="text-4xl lg:text-5xl text-center text-slate-500 tracking-wide mb-2">{title}</h2>}
   {subtitle && <h3 className="text-xl lg:text-2xl text-center text-slate-800 tracking-wide mb-12">{subtitle}</h3>}
   {children}
  </section>
 )
}