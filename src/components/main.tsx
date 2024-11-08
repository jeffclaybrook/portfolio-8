import { ReactNode, FC } from "react"

type Props = {
 className?: string
 children: ReactNode
}

const Main: FC<Props> = ({ className = "", children }) => {
 return (
  <main className={`px-4 ${className}`} role="main">{children}</main>
 )
}

export default Main