import Link from "next/link"
import { Button } from "./ui/button"
import { ChevronLeft } from "./icons"

export default function BackButton() {
 return (
  <Button variant="customOutline" size="lg" asChild>
   <Link href={"/"} className="flex items-center">
    <ChevronLeft />
    Back Home
   </Link>
  </Button>
 )
}