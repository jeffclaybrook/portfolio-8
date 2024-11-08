"use client"

import Link from "next/link"
import ArtboardsCarousel from "@/components/artboards-carousel"
import Card from "@/components/card"
import Form from "@/components/form"
import Header from "@/components/header"
import Main from "@/components/main"
import Project from "@/components/project"
import Section from "@/components/section"
import Testimonial from "@/components/testimonial"
import Transition from "@/components/transition"
import { useTypewriter } from "react-simple-typewriter"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Github, Resume } from "@/components/icons"
import { about, skills, projects, testimonials, faqs } from "@/lib/data"

export default function Home() {
 const [text] = useTypewriter({
   words: [
     "product manager.",
     "frontend developer.",
     "UX/UI designer.",
     "content creator.",
     "QA & debugger.",
     "technical writer."
   ],
   loop: 0,
   typeSpeed: 125,
   deleteSpeed: 50,
   delaySpeed: 2050
 })

 return (
   <Transition>
     <Header image="/images/hero-1.webp">
       <h1 className="text-4xl lg:text-5xl font-light text-slate-300 mb-2">
         Hi, my name is <strong className="font-bold text-slate-50">Jeff</strong>
       </h1>
       <p className="text-2xl lg:text-2xl mb-4 text-slate-300">
         and I&apos;m a <strong className="font-bold text-slate-50">{text}</strong>
       </p>
       <div className="flex items-center gap-4">
         <Button variant="custom" size="lg" asChild>
           <Link href="/Jeff_Claybrook_Resume.pdf">
             <Resume className="mr-2" />
             My Resume
           </Link>
         </Button>
         <Button variant="secondary" size="lg" asChild>
           <a href="https://github.com/jeffclaybrook" target="_blank" rel="noreferrer">
             <Github className="mr-2" />
             My Github
           </a>
         </Button>
       </div>
     </Header>
     <Main>
       <Section title="About" subtitle="A little bit about me and what I bring to the party">
         <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3.5">
           {about.map((item, i) => (
             <Card
               key={i}
               title={item.title}
               subtitle={item.subtitle}
               icon={<item.icon />}
             />
           ))}
         </div>
         <div className="flex items-center justify-center mt-16">
           <Button variant="customOutline" size="lg" asChild>
             <Link href="/about">
               More About Me
               <ChevronRight />
             </Link>
           </Button>
         </div>
       </Section>
       <Testimonial
         quote={testimonials[0].quote}
         name={testimonials[0].name}
         title={testimonials[0].title}
         image={testimonials[0].image}
       />
       <Section title="Skills" subtitle="I'm a Jeff of all trades">
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
           {skills.map((skill, i) => (
             <Card
               key={i}
               title={skill.title}
               icon={<skill.icon />}
             />
           ))}
         </div>
         <div className="flex items-center justify-center mt-16">
           <Button variant="customOutline" size="lg" asChild>
             <Link href="/skills">
               More Skills
               <ChevronRight />
             </Link>
           </Button>
         </div>
       </Section>
       <Testimonial
         quote={testimonials[1].quote}
         name={testimonials[1].name}
         title={testimonials[1].title}
         image={testimonials[1].image}
       />
       <Section title="Projects" subtitle="A few sample projects you can demo">
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
         <div className="flex items-center justify-center mt-16">
           <Button variant="customOutline" size="lg" asChild>
             <Link href="/projects">
               More Projects
               <ChevronRight />
             </Link>
           </Button>
         </div>
       </Section>
       <Testimonial
         quote={testimonials[2].quote}
         name={testimonials[2].name}
         title={testimonials[2].title}
         image={testimonials[2].image}
       />
       <Section title="Artboards" subtitle="Getting the most out of every pixel">
         <div>
           <ArtboardsCarousel />
         </div>
         <div className="flex items-center justify-center mt-16">
           <Button variant="customOutline" size="lg" asChild>
             <Link href="/artboards">
               More Artboards
               <ChevronRight />
             </Link>
           </Button>
         </div>
       </Section>
       <Testimonial
         quote={testimonials[3].quote}
         name={testimonials[3].name}
         title={testimonials[3].title}
         image={testimonials[3].image}
       />
       <Section title="FAQs" subtitle="Frequently asked questions">
         <Accordion type="single" collapsible>
           {faqs.map((item, i) => (
             <AccordionItem value={item.value} key={i}>
               <AccordionTrigger className="text-start">{item.question}</AccordionTrigger>
               <AccordionContent>{item.response}</AccordionContent>
             </AccordionItem>
           ))}
         </Accordion>
       </Section>
       <Testimonial
         quote={testimonials[4].quote}
         name={testimonials[4].name}
         title={testimonials[4].title}
         image={testimonials[4].image}
       />
       <Section title="Contact" subtitle="Let's get in touch!">
         <Form />
       </Section>
     </Main>
   </Transition>
 )
}