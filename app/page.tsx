'use client'

import Navbar from "@/components/ui/nav-bar"
import Projects from "@/components/ui/projects"
import Image from "next/image";

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

      <h1 id="projects" className="text-5xl">✨Projects✨</h1>
      <Projects />
      <h1>work history timeline</h1>
      <h1>resume</h1>
    </main>
  );
}
