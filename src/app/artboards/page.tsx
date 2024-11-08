import ArtboardsCarousel from "@/components/artboards-carousel"
import BackButton from "@/components/back-button"
import Header from "@/components/header"
import Main from "@/components/main"
import Section from "@/components/section"
import Transition from "@/components/transition"

export default function Artboards() {
 return (
  <Transition>
   <Header image="/images/hero-2.webp">
   <h1 className="text-4xl lg:text-5xl font-light text-slate-50 mb-2">Artboards</h1>
   <p className="text-2xl lg:text-2xl mb-4 text-slate-300">Getting the most out of every pixel</p>
   </Header>
   <Main>
    <Section>
     <ArtboardsCarousel />
     <div className="flex justify-center mt-16">
      <BackButton />
     </div>
    </Section>
   </Main>
  </Transition>
 )
}
