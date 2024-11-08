import BackButton from "@/components/back-button"
import Header from "@/components/header"
import Main from "@/components/main"
import Project from "@/components/project"
import Section from "@/components/section"
import Transition from "@/components/transition"
import { projects } from "@/lib/data"

export default function Projects() {
 return (
  <Transition>
   <Header image="/images/hero-4.webp">
   <h1 className="text-4xl lg:text-5xl font-light text-slate-50 mb-2">Projects</h1>
   <p className="text-2xl lg:text-2xl mb-4 text-slate-300">A few sample projects you can demo</p>
   </Header>
   <Main>
    <Section>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3.5">
      {projects.map((project, i) => (
       <Project
        key={i}
        title={project.title}
        href={project.href}
        image={project.image}
       />
      ))}
     </div>
     <div className="flex justify-center mt-16">
      <BackButton />
     </div>
    </Section>
   </Main>
  </Transition>
 )
}
