import { NewTab } from "./icons"

type Props = {
 title: string
 href: string
 image: string
}

export default function Project({ title, href, image }: Props) {
 return (
  <a
   href={href}
   target="_blank"
   rel="noreferrer"
   className="hero rounded-lg overflow-hidden"
   style={{ backgroundImage: `url(${image})` }}
  >
   <div className="hero-overlay flex flex-col justify-center items-center py-24 bg-opacity-65 text-slate-200 hover:bg-opacity-80">
    <h3 className="text-2xl tracking-wide mb-3.5">{title}</h3>
    <NewTab />
   </div>
  </a>
 )
}