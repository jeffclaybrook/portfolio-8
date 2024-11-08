"use client"

import { useMediaQuery } from "usehooks-ts"
import { NavbarItems } from "@/types"
import NavbarDesktop from "./navbar-desktop"
import NavbarMobile from "./navbar-mobile"

const items: NavbarItems = {
 links: [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Artboards", href: "/artboards" },
  { label: "Contact", href: "/contact" }
 ]
}

export default function Navbar() {
 const isDesktop = useMediaQuery("(min-width: 1024px)", {
  initializeWithValue: false
 })

 if (isDesktop) {
  return <NavbarDesktop navbarItems={items} />
 }

 return <NavbarMobile navbarItems={items} />
}