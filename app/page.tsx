/* eslint-disable react/jsx-key */
'use client'

import Navbar from "@/components/ui/nav-bar"
import Projects from "@/components/ui/projects"
import { Badge } from "@/components/ui/badge"

import Image from "next/image";

interface Props {
  title: String,
  date: String,
  place: String,
  desc: String
  tags: String[]
}

const TimelineItem: React.FC<Props> = ({ title, date, place, desc, tags}) => {

  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">{title}</div>

      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">{date}</time>
        <div className="text-xl font-bold text-green ">{place}</div>
        
      </div>
      <p className="text-slate-500 whitespace-pre-line">{desc}</p>
      <div className="tags">
        {tags.map(tag =><Badge className="mx-0.5">{tag}</Badge>)}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <div id="about_me" className="grid grid-cols-2 grid-rows-1 gap-10 pl-80 pb-56">
        <div id="about_me_text">
          <h1 id="myName" className="text-green text-5xl pb-4">Hey there, I&apos;m Brandon Tu</h1>
          <p id="aboutMeText" className="text-green font-serif">I am a software developer and (as of writing this) recent grad from the university of Guelph majoring in Software Engineering. Besides making various software application I enjoy learning about and making cocktails and playing the guitar(not that I am any good at it)</p>
        </div>

        <div id="about_me_picture" className="w-fit">
          <Image
            src="/korok.png"
            alt="a picture of yours truly"
            width={320}
            height={304} />
          <p className="text-green text-center font-serif">This is what I look like in real life.
          </p>
        </div>
      </div>

      <div className="py-12">
        <h1 id="projects" className="text-5xl">✨Projects✨</h1>
        <Projects />
      </div>



      <h1 id="experience" className="text-5xl">Work History Timeline</h1>
      <div className="my-6 px-12">
        <TimelineItem title="Graduated University" desc="Finished my bachelor of computing, honours majoring in software engineering with a minor in business and an overall GPA of 86%" date="Apr 2024" place="University of Guelph" tags={["C","Ruby","Python","Java","Cobol","Fortran","Flutter"]} />
        <TimelineItem title="Finished Final Co-op Position as a Jr Fullstack Developer" desc={"• Worked in a team that developed a light weight client-side browser script and a robust server side application written in typescript to streamline the ad deployment process.\n • Worked on and maintained an application written in angular and Node.JS.\n • Leveraged services such as Serverless and AWS Lambda to deploy typescript based application \n • Application was used on various high traffic webpages"} date="Aug 2023" place="System1"  tags={["Typescript","Javascript","Lambda","Severless","Vite", "React", "Angular"]}/>
        <TimelineItem title="Started Final Co-op Position as a Jr Fullstack Developer" desc="Started final coop term" date="Jan 2023" place="System1" tags={[]}/>
        <TimelineItem title="Finished Second Co-op Position as a Jr Fullstack Developer" desc={"• Developed requested changes to various high traffic PHP Wordpress based websites based on stakeholder requests.\n • Utilized services such as AWS and Jenkins to deploy and monitor production code"} date="Aug 2022" place="System1" tags={["PHP","Wordpress","Angular","Typescript","Javascript"]} />
        <TimelineItem title="Started Second Co-op Position as a Jr Fullstack Developer" desc="Started second co-op term" date="May 2022" place="System1" tags={[]}/>
        <TimelineItem title="Finished First Co-op Position as a Jr Fullstack Developer" desc={"•Translated stakeholder request into production changes to various high traffic PHP Wordpress based websites.\n • Diagnosed and fixed production bugs in various high traffic PHP wordpress websites"} date="Dec 2021" place="System1" tags={["PHP","Wordpress","Angular","Typescript","Javascript"]} />
        <TimelineItem title="Started First Co-op Position as a Jr Fullstack Developer" desc="Started first coop term" date="Sep 2021" place="System1" tags={[]}/>
        <TimelineItem title="Started University" desc="Started university" date="Sep 2019" place="University of Guelph" tags={[]}/>
      </div>
    </main>
  );
}
