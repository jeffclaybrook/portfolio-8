import { ReactNode } from "react"

type Props = {
 image: string
 children: ReactNode
}

export default function Header({ image, children }: Props) {
 return (
  <header className="hero min-h-screen" style={{ background: `url(${image}) no-repeat center center / cover`}}>
   <div className="flex items-center justify-center hero-overlay bg-opacity-60 px-4">
    <div className="flex flex-col max-w-6xl w-full mx-auto">{children}</div>
   </div> 
  </header>
 )
}