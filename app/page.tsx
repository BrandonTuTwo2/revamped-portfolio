'use client'

import Navbar from "@/components/ui/nav-bar"
import Projects from "@/components/ui/projects"
import Image from "next/image";

interface Props {
  title: String,
  date: String,
  place: String,
  desc: String
}

const TimelineItem: React.FC<Props> = ({ title, date, place, desc }) => {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">{title}</div>
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">{date}</time>
        <div className="text-xl font-bold text-green">{place}</div>
      </div>
      <div className="text-slate-500">{desc}</div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <div id="about_me" className="grid grid-cols-2 grid-rows-1 gap-10 pl-80 pb-56">
        <div id="about_me_text">
          <h1 id="myName" className="text-green text-5xl">Hey there, I&apos;m Brandon Tu</h1>
          <p id="aboutMeText" className="text-green font-serif">text about why im a 1000000000x dev and also Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>

        <div id="about_me_picture" className="w-fit">
          <Image
            src="/korok.png"
            alt="a picture of yours truly"
            width={320}
            height={304} />
          <p className="text-green text-center">This is what I look like in real life.
          </p>
        </div>
      </div>

      <div className="py-12">
        <h1 id="projects" className="text-5xl">✨Projects✨</h1>
        <Projects />
      </div>


      <h1 className="text-5xl">Work History Timeline</h1>
      <div className="my-6 px-12">
        <TimelineItem title="Graduated University" desc="Finished my bachelor of computing, honours majoring in software engineering with a minor in business and an overall GPA of 86%" date="Apr 2024" place="University of Guelph" />
        <TimelineItem title="Finished Final Jr Fullstack Developer Co-op Position" desc="Worked in a team that developed a light weight client-side browser script and server side application written in
typescript to streamline the ad deployment process. Worked on and maintained an application written in angular and Node.JS. Leveraged services such as Serverless and AWS Lambda to deploy typescript based application" date="Aug 2023" place="System1" />
        <TimelineItem title="Started Jr Fullstack Developer Co-op Position" desc="Started final coop term" date="Jan 2023" place="System1" />
        <TimelineItem title="Finshed Second Jr Fullstack Developer Co-op Position" desc="Developed requested changes to various high traffic PHP Wordpress based websites based on stakeholder requests. Utilized services such as AWS and Jenkins to deploy and monitor production code" date="Aug 2022" place="System1" />
        <TimelineItem title="Started Second Jr Fullstack Developer Co-op Position" desc="Started second co-op term" date="May 2022" place="System1" />
        <TimelineItem title="Finshed First Jr Fullstack Developer Co-op Position" desc="Translated stakeholder request into production changes to various high traffic PHP Wordpress based websites. Diagnosed and fixed production bugs in various high traffic PHP wordpress websites" date="Dec 2021" place="System1" />
        <TimelineItem title="Started First Jr Fullstack Developer Co-op Position" desc="Started first coop term" date="Sep 2021" place="System1" />
        <TimelineItem title="Started University" desc="Started university" date="Sep 2019" place="University of Guelph" />
      </div>

      <h1 className="text-5xl">resume</h1>
      <iframe src='/resume_2024_04_12.pdf'/>
    </main>
  );
}
