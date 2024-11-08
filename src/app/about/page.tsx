import Image from "next/image"
import BackButton from "@/components/back-button"
import Card from "@/components/card"
import Header from "@/components/header"
import Main from "@/components/main"
import Section from "@/components/section"
import Transition from "@/components/transition"
import { about } from "@/lib/data"

export default function About() {
 return (
  <Transition>
   <Header image="/images/hero-2.webp">
   <h1 className="text-4xl lg:text-5xl font-light text-slate-50 mb-2">About</h1>
   <p className="text-2xl lg:text-2xl mb-4 text-slate-300">A little bit about me and what I bring to the party</p>
   </Header>
   <Main>
    <Section>
     <div className="flex flex-col lg:flex-row gap-10 mb-10">
      <div className="flex items-start justify-center">
       <Image
        src="/images/headshot.webp"
        alt="Jeffrey Claybrook"
        width={250}
        height={250}
        className="rounded-full border-2 border-slate-100"
       />
      </div>
      <div className="flex-1">
       <p className="text-md tracking-wide mb-4">I graduated from Texas A&M University in 2015 with a degree in political science and a minor in business administration. As a student, I served as communications executive vice president and eventually chief of staff for the Student Government Association, where I managed a sixteen member exective cabinet.</p>
       <p className="text-md tracking-wide mb-4">Before graduating, I interned with a company called GovWhiz, where I discovered a passion for UI/UX. I was brought on full time by a company called Arena Edge, where I started as a channel manager and was promoted to product manager.</p>
       <p className="text-md tracking-wide mb-4">As product manager, I worked closely with company leadership and a team of overseas developers to identify both customer needs and business needs, authored a 170+ page user manual, designed low-fidelity prototypes, created various product tutorials, conducted extensive QA, and thorough documentation of the platform.</p>
       <p className="text-md tracking-wide mb-4">To supplement my knowledge of product management, I began learning the fundamentals of frontend web development. I am currently seeking a product development position with a focus on UX and frontend development.</p>
      </div>
     </div>
     <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3.5">
      {about.map((about, i) => (
       <Card
        key={i}
        title={about.title}
        subtitle={about.subtitle}
        icon={<about.icon />}
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
