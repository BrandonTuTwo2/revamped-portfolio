/* eslint-disable react/jsx-key */
'use client'

import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardTitle, CardContent } from "@/components/ui/card"
import Image from "next/image";
import { Badge } from "@/components/ui/badge"

export default function Projects() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    )

    const projectNames = ['Will it Rain?', 'HLTB Chrome Extension', 'Cal Count', 'Farkle', 'Bootleg Simon Says', 'Word Replacer']
    const projectDescription = ['This is a web application that allows the user to simply enter in the location they would like to check to see if its going to rain in the next 5 days. This is a revamped version of my original web app of the same name that has been sent to the void because heroku stopped being free.'
        , 'This is a little chrome exentsion I made using Vite + React + TypeScript + Shadcn/ui that displays an inputted game\'s completionist time information(ie how long it takes to beat it, beat with side content and complete it).'
        , 'A mobile application used to enable the user to track user’s caloric input by setting custom caloric and macro nutrient goals with image scanning capabilities'
        , 'Simple Farkle dice game loosely based off the rule set shown in kingdom come deliverance..I feel quite hungry'
        , 'Match/Simon says esque game I made for CIS4250'
        , 'A C# program that takes in a text file and replaces the user entered word with another word.']
    const projectLink = ['https://github.com/BrandonTuTwo2/will-it-rain-2', 'https://github.com/BrandonTuTwo2/HLTB-Chrome-Extension', 'https://github.com/bnguye11/CalCount', 'https://github.com/BrandonTuTwo2/Farkle', 'https://github.com/BrandonTuTwo2/MatchGame', 'https://github.com/BrandonTuTwo2/word-replacer']
    const tags = [["Vue.js","Typescript","Vite","Netlify"],["React","Netlify","Node.js"],["Flutter","Dart"],["Javascript","HTML","CSS"],["Javascript","HTML","CSS"],["C#"]];
    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-xs"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {Array.from({ length: 6 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardTitle className="text-center">
                                    <span className="text-4xl font-semibold ">{projectNames[index]}</span>
                                </CardTitle>
                                <div className="text-center">{tags[index].map(tag =><Badge className="mx-0.5">{tag}</Badge>)}</div>
                                <CardContent className="aspect-square items-center justify-center p-6 text-center">
                                    <span>{projectDescription[index]}</span>
                                    <div className="flex justify-center items-center">
                                        <a href={projectLink[index]}>
                                            <Image
                                                src="/github.svg"
                                                alt="a picture of yours truly"
                                                width={25}
                                                height={25} />
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}